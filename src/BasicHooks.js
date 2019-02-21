import React from 'react';

import Dynamic from './utils/Dynamic';

const StatefulCounter = import(/* webpackChunkName: "counter.state" */ './basic-hooks/counter-with-state');
const HookedCounter = import(/* webpackChunkName: "counter.hooks" */ './basic-hooks/counter-with-hooks');

export default function BasicHooks() {
  return (
    <header className="App-header">
      <div className="basic-hooks">
        <Dynamic component={StatefulCounter} />
        <Dynamic component={HookedCounter} />
      </div>
    </header>
  );
}
