import { createContext, useContext, useState } from "react";

const CardContext = createContext(null);
const CardUpdateContext = createContext(null);

export default function CardContextProvider({ children }) {
  const [formData, setFormData] = useState({ to: "", msg: "", from: "" });


  return (
    <CardContext.Provider value={formData}>
      <CardUpdateContext.Provider value={setFormData}>{children}</CardUpdateContext.Provider>
    </CardContext.Provider>
  );
}

export function useCardData() {
  return useContext(CardContext);
}

export function useCardUpdateData() {
  return useContext(CardUpdateContext);
}
