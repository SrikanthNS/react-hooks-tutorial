import React from 'react';

import { useLocalStorage } from './hooks/useLocalStorage';

// We could for example debounce the onChange event with a useDebounce hook.
// https://gist.github.com/gragland/e50346f02e7edf4f81cc0bda33d3cae6

export default function StoredForm() {
  // Similar to useState but first arg is key to the value in local storage.
  const [name, setName] = useLocalStorage('name', 'Bob');

  return (
    <header className="App-header">
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </header>
  );
}