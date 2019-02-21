import React, { useState, useEffect } from 'react';

export default function Dynamic(props) {
  const [drawable, setDrawable] = useState({ Component: undefined });

  const fetchModule = async () => {
    const result = await props.component;
    setDrawable({ Component: result.default });
  };

  useEffect(() => {
    fetchModule();
  }, [props.component]);

  return drawable.Component ? <drawable.Component /> : null;
}
