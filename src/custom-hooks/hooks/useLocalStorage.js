import { useState } from 'react';
import { MemoryStorage } from './memorystorage';

// https://gist.github.com/gragland/2970ae543df237a07be1dbbf810f23fe

let storageImpl; // eslint-disable-line no-var, vars-on-top
export function getStorage() {
  if (!storageImpl) {
    try {
      localStorage.setItem('storage', '');
      localStorage.removeItem('storage');
      storageImpl = localStorage;
    } catch (err) {
      storageImpl = new MemoryStorage('__');
    }
  }
  return storageImpl;
}

export function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
