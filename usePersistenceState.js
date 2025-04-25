import { useState, useEffect } from "react";

export function usePersistentState(key, initialValue) {
  const [value, setValue] = useState(() => {
    const persisted = localStorage.getItem(key);
    return persisted !== null ? JSON.parse(persisted) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}