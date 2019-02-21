import React, { useReducer } from 'react';

// https://reactjs.org/docs/hooks-reference.html#usereducer

// This is important:
// https://reactjs.org/docs/hooks-reference.html#specifying-the-initial-state

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function CounterWithReducer({ initialState }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment +</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement -</button>
    </>
  );
}

export default function Counter() {
  return (
    <header className="App-header">
      <CounterWithReducer initialState={{ count: 0 }} />
    </header>
  );
}
