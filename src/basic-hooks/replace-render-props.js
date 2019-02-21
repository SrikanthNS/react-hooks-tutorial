import React from 'react';

import EditableWithRenderProps from './render-props';
import EditableWithHooks from './no-render-props';

export default function RenderPropsVersusHooks() {
  return (
    <header className="App-header">
      <EditableWithHooks label="EditableWithHooks" initialValue="Editable Using Hooks" />
      <EditableWithRenderProps label="EditableWithRenderProps" initialValue="Editable Using Render Props" />
    </header>
  )
}