const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

// local data for frontend demo deployement 
import {users} from '../../../../db.json'

export async function fetchUsers(signal) {
  const res = await fetch(`${API_BASE}/users`, { signal });
  if (!res.ok) throw new Error(`Failed To fetch Users ${res.status}`);

  return res.json();
}

export async function fetchUserById(id, signal) {
  const res = await fetch(`${API_BASE}/users/${id}`, { signal });
  if (!res.ok) throw new Error(`Failed to fetch User ${res.status}`);

  return res.json();
}

export async function fetchLocalStoredData(signal){
  return users
}
