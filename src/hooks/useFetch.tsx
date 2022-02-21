import { useState, useEffect } from "react";

const useFetch = (url: string, method: string, headers: any) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, {
      method,
      headers,
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => setError(err.message));
  }, [url, method, headers]);

  return [data, error];
};

export default useFetch;
