import React from 'react';

// START HERE:
// Why hooks? What were Hooks specifically intended to attack?
// https://twitter.com/acdlite/status/1024852895814930432

import { getRoute } from './routes';

import Null from './utils/dummy';
import './App.css';

export default function App() {
  const Route = getRoute();

  return (
    <div className="App">
      <Null />
      <Route />
    </div>
  );
}
