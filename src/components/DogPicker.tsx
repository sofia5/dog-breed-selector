import { useEffect, useState } from "react";

export default function DogPicker() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/breeds", {
      method: "GET",
      headers: {
        "x-api-key": "69648bf6-6b99-4139-888f-4b011291f08f",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        console.log(data);
        setData(data);
      })
      .catch((err) => setError(err.message));
  }, []);
  return (
    <>
      <h1>API Posts</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {data && data.map(({ id, name }) => <p key={id}>{name}</p>)}
    </>
  );
}
