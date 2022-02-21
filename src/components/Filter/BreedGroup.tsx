import { Form } from "react-bootstrap";
import { IDogBreed } from "../../interfaces/DogBreed.interface";

export const BreedGroup = ({ dogBreeds }: { dogBreeds: IDogBreed[] }) => {
  const breedGroups = dogBreeds
    .map((dogBreed) => dogBreed.breed_group)
    .filter((elem, index, self) => index === self.indexOf(elem))
    .filter((breedGroup) => breedGroup)
    .sort()
    .concat("Other");

  return (
    <>
      <h5>Breed group</h5>
      {breedGroups.map((breedGroup, i) => (
        <Form.Check
          inline
          label={breedGroup}
          name="group1"
          type="checkbox"
          key={i}
        />
      ))}
    </>
  );
};
