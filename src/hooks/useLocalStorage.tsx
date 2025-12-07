
import { Product } from "@/types/product";
import { useEffect, useState } from "react";

export function useLocalStorage(key: string, initialValue: Product[]) {
  const [cartItems, setValue] = useState(initialValue);

  useEffect(() => {
    // undefined window means no access to localStorage
    if (typeof window !== "undefined") {
      let value = localStorage.getItem(key);
      if (value) setValue(JSON.parse(value));
    }
  }, [window]);

  function updateLocalStorage(newValue: Product[]) {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  }

  return {
    cartItems,
    updateLocalStorage,
  };
}
