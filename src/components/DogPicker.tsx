import { useEffect, useState } from "react";
import { DogBreeds } from "./DogBreeds";
import { Filter } from "./Filter/Filter";

export default function DogPicker() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (data.length === 0) {
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
    }
  }, []);

  // const [data, error] = useFetch("https://api.thedogapi.com/v1/breeds", "GET", {
  //   "x-api-key": "69648bf6-6b99-4139-888f-4b011291f08f",
  // });

  return (
    <>
      <Filter dogBreeds={data} />
      <DogBreeds dogBreeds={data} loadingState={loading} error={error} />
    </>
  );
}
