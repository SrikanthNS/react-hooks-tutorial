import React from 'react';

import logo from './logo.svg';
import { getPaths } from './routes';

export default function Home() {
  const paths = getPaths();
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Welcome to React Hooks</p>
      <h2>Check out the examples below</h2>
      <ol>
        {paths.map(p => <li key={p.route}><a href={p.route}>{p.name}</a></li>)}
      </ol>
    </header>
  );
}
