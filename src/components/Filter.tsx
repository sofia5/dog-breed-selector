import { Form } from "react-bootstrap";
import { useCallback } from "react";
import PropTypes from "prop-types";
import { IDogBreed } from "../interfaces/DogBreed.interface";
import { BreedGroup } from "./filters/BreedGroup";

export const Filter = ({ dogBreeds }: { dogBreeds: IDogBreed[] }) => {
  const filterData = useCallback((count) => {
    console.log(count);
  }, []);

  return (
    <>
      <Form>
        <BreedGroup dogBreeds={dogBreeds} filterDogBreeds={filterData} />
      </Form>
    </>
  );
};

Filter.protoTypes = {
  dogBreeds: PropTypes.object.isRequired,
  filterDogBreeds: PropTypes.func,
};
