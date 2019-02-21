import React, { useState, useEffect } from 'react';

export default function HackerNews(props) {
  const [data, setData] = useState({ hits: [] });

  const fetchData = async () => {
    const result = await fetch(`https://hn.algolia.com/api/v1/search?query=${props.query}`);
    const data = await result.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, [props.query]);

  return (
    <header className="App-header">
      <ul>
        {data && data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </header>
  );
}