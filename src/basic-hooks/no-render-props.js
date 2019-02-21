import React, { useState, useCallback } from "react";

// useCallback(fn, inputs) is equivalent to useMemo(() => fn, inputs).

function useToggle(initialValue) {
  const [toggleValue, setToggleValue] = useState(initialValue);
  const toggler = useCallback(() => setToggleValue(!toggleValue));

  return [toggleValue, toggler];
}

export default function EditableItem({ label, initialValue }) {
  const [value, setValue] = useState(initialValue);
  const [editorVisible, toggleEditorVisible] = useToggle(false);

  return (
    <main>
      {editorVisible ? (
        <label>
          {label}
          <input
            type="text"
            value={value}
            onChange={event => setValue(event.target.value)}
          />
        </label>
      ) : (
          <span>{value}</span>
        )}
      <button onClick={toggleEditorVisible}>
        {editorVisible ? "Done" : "Edit"}
      </button>
    </main>
  );
}
