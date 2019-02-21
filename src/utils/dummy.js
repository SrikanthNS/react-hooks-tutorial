import React from 'react';

// This component is only here so that Component is bundled with the main js bundle,
// and not with the CounterWithState component, so we can get a clean comparison of size.
export default class NullComponent extends React.Component {
  render() { return null; }
}