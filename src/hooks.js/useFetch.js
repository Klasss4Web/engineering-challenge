//useFetch.js
import { useState, useEffect } from 'react';

function useFetch(url, API_KEY, query) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData([]);
    setError(null);

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
      },
      body: JSON.stringify({
        query: query,
        variables: {
          network: "bsc",
          from: "2020-10-01",
          till: "2020-10-08",
          address: ["0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c"],
        },
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        setData(
          res?.data?.ethereum?.transfers?.filter((dat) => dat?.total > 15)
          // res?.data?.bitcoin?.transactions?.filter((dat) => dat.count > 1000)
        );
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  }, [url, API_KEY, query]);

  return { data, loading, error }
}

export default useFetch;