import React from 'react';

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
