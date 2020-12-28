import { useState, useEffect } from 'react';

/**
 * @param {string} url
 * @param {boolean} isJson
 */
export default function useFetch(url, isJson) {
  const [fetchedData, setFetchedData] = useState('');

  useEffect(() => {
    if (url.length > 0) {
      fetch(url)
        .then(response => (isJson ? response.json() : response.text()))
        .then(data => setFetchedData(data));
    } else {
      setFetchedData('');
    }
  }, [url, isJson]);

  return fetchedData;
}
