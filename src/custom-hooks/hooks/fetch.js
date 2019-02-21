import { useState, useEffect } from 'react';

// https://github.com/bghveding/use-fetch

export const useDataApi = (initialUrl, initialData) => {
  const [data, setData] = useState(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchData = async () => {
    setHasError(false);
    setIsLoading(true);

    try {
      const result = await fetch(url);
      const data = await result.json();
      setData(data);
    } catch (error) {
      setHasError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const doGet = (url) => {
    setUrl(url);
  };

  return { data, isLoading, hasError, doGet };
};
