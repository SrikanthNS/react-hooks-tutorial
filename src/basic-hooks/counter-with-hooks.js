import React, { useState, useEffect } from 'react';

export default function Counter(props) {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('I need to be rendered!');

  // what happens if we only want to render once, on mount?
  useEffect(() => {
    setMessage('Thanks, I rendered!');
  });

  return (
    <div>
      Counter With Hooks<br />
      Count: {count}<br />
      Message: {message}<br />
      <button onClick={() => setCount(count + 1)}>
        Click me!
      </button>
    </div>
  );
};
