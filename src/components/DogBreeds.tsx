import { IDogBreed } from "../interfaces/DogBreed.interface";

export const DogBreeds = ({
  dogBreeds,
  loadingState,
  error,
}: {
  dogBreeds: IDogBreed[];
  loadingState: boolean;
  error: any;
}) => {
  return (
    <>
      <h1>Dog breeds</h1>
      {loadingState && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {dogBreeds && dogBreeds.map(({ id, name }) => <p key={id}>{name}</p>)}
    </>
  );
};
