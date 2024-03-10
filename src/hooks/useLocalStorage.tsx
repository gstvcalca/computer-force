import { Product } from "@/types/product";
import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T){
    const [cartItems, setValue] = useState(initialValue);

    
    useEffect(() => {
            // undefined window means no access to localStorage
            if (typeof window === 'undefined') return;
            let value = localStorage.getItem(key);
            if (value) setValue(JSON.parse(value))
        }, [window]
    )

    const updateLocalStorage = (newValue: T) =>{
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    }

    return {
        cartItems,
        updateLocalStorage
    }
}