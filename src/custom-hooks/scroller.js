import React, { useRef } from 'react';

import { useOnScreen } from './hooks/useOnScreen';

export default function Scroller() {
  // Ref for the element that we want to detect whether on screen
  const ref = useRef();

  // Call the hook passing in ref and root margin
  // In this case it would only be considered onScreen if more ...
  // ... than 300px of element is visible.
  const onScreen = useOnScreen(ref, '-300px');

  return (
    <div>
      <div style={{ height: '100vh' }}>
        <h1>Scroll down to next section <span role="img" aria-label="scroll down">👇</span></h1>
      </div>
      <div
        ref={ref}
        style={{
          height: '100vh',
          backgroundColor: onScreen ? '#23cebd' : '#efefef'
        }}
      >
        {onScreen ? (
          <div>
            <h1>Hey I'm on the screen</h1>
            <img src="https://i.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif" alt="the visible element" />
          </div>
        ) : (
            <h1>Scroll down 300px from the top of this section <span role="img" aria-label="scroll down">👇</span></h1>
          )}
      </div>
    </div>
  );
}
