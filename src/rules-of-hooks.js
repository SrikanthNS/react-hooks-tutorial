import React, { useState, useEffect } from 'react';

// https://reactjs.org/docs/hooks-rules.html
// yarn add --dev eslint-plugin-react-hooks
// "eslintConfig": {
//   "extends": [
//     "react-app"
//   ],
//   "plugins": [
//     "react-hooks"
//   ],
//   "rules": {
//     "react-hooks/rules-of-hooks": "error"
//   }
// },

function TopLevel({ fail }) {
  const [state, setState] = useState(fail); // eslint-disable-line

  if (state) {
    // This will force a re-render, causing state to change, breaking the condition -
    // thus changing the number of hooks that get rendered.
    useEffect(() => setState(!state));
  }

  return <div><p>TopLevel Failed: {JSON.stringify(state)}</p></div>;
}

class NoClasses extends React.Component {
  render() {
    const [count, setCount] = useState(3);
    return (
      <div>
        Current count: {count}<br />
        <button onClick={() => setCount(count + 1)}>Click to increment</button>
      </div>
    );
  }
}


function Rules({ rule }) {
  return (
    <React.Fragment>
      <TopLevel fail={true} />
      {/* <NoClasses /> */}
    </React.Fragment>
  );
}

export default function RulesDemo() {
  return <Rules />;
}
