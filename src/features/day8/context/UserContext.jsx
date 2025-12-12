import { createContext, useContext, useState, useRef, useEffect } from "react";
import { fetchLocalStoredData, fetchUsers } from "../api/api";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const abortRef = useRef(null);

  const load = async () => {
    setLoading(true);
    setError(null);

    // Cancel any previous request
    if (abortRef.current) {
      abortRef.current.abort();
    }
    abortRef.current = new AbortController();
    const signal = abortRef.current.signal;

    try {
      // following is to fetch data from server . 
      // const data = await fetchUsers(signal);
      // make sure state always stores an array
      
      // now using local store data for demo deployment 
      const data = await fetchLocalStoredData(signal)
      setUsers(Array.isArray(data) ? data : []);
    } catch (err) {
      if (err.name === "AbortError") {
        console.debug("fetchUsers aborted");
        return;
      }

      console.error("fetchUsers failed:", err);
      setError(err);
      setUsers([]); // safe fallback 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    return () => {
      if (abortRef.current) {
        abortRef.current.abort();
        abortRef.current = null;
      }
    };
  }, []); 

  const refresh = () => load();

  return (
    <UserContext.Provider value={{ users, loading, error, refresh }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUsers() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUsers must be used within UserProvider");
  return ctx;
}
