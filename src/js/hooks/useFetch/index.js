import { useState, useEffect } from 'react';

/**
 * @param {string} url
 * @param {boolean} isJson
 */
export default function useFetch(url, isJson, defaultValue) {
  const [fetchedData, setFetchedData] = useState(defaultValue);

  useEffect(() => {
    if (url.length > 0) {
      fetch(url)
        .then(response => (isJson ? response.json() : response.text()))
        .then(data => setFetchedData(data));
    } else {
      setFetchedData(defaultValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, isJson]);

  return fetchedData;
}
