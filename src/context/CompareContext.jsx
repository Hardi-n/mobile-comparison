import { createContext, useContext, useState } from "react";

const CompareContext = createContext();

export function CompareProvider({ children }) {
  const [phonesToCompare, setPhonesToCompare] = useState([]);

  function addPhone(phone) {
    setPhonesToCompare((prev) => {
      // allow max 2 phones
      if (prev.length >= 2) return [phone];
      // avoid duplicates
      if (prev.find((p) => p.id === phone.id)) return prev;
      return [...prev, phone];
    });
  }

  function clearCompare() {
    setPhonesToCompare([]);
  }

  return (
    <CompareContext.Provider value={{ phonesToCompare, addPhone, clearCompare }}>
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  return useContext(CompareContext);
}
