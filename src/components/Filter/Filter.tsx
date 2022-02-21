import { Form } from "react-bootstrap";
import { IDogBreed } from "../../interfaces/DogBreed.interface";
import { BreedGroup } from "./BreedGroup";

export const Filter = ({ dogBreeds }: { dogBreeds: IDogBreed[] }) => {
  return (
    <>
      <Form>
        <BreedGroup dogBreeds={dogBreeds} />
      </Form>
    </>
  );
};
