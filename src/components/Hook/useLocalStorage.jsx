import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const storedValue = localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : initialValue;
        } catch (error) {
            console.error("Error reading localStorage", error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            window.dispatchEvent(new Event("localStorageChange"));
        } catch (error) {
            console.error("Error setting localStorage", error);
        }
    }, [key, value]);

    useEffect(() => {
        const handleStorageChange = () => {
            try {
                const newValue = localStorage.getItem(key);
                const parsedValue = newValue ? JSON.parse(newValue) : initialValue;
                setValue((prev) => (
                    JSON.stringify(prev) !== JSON.stringify(parsedValue) ? parsedValue : prev
                ));
            } catch (error) {
                console.error("Error reading localStorage", error);
            }
        };

        window.addEventListener("localStorageChange", handleStorageChange);
        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("localStorageChange", handleStorageChange);
            window.removeEventListener("storage", handleStorageChange);
        };
    }, [key]);

    const removeValue = () => {
        try {
            localStorage.removeItem(key);
            setValue(initialValue);
            window.dispatchEvent(new Event("localStorageChange"));
        } catch (error) {
            console.error("Error removing localStorage", error);
        }
    };

  return [value, setValue, removeValue];
}

export default useLocalStorage;
