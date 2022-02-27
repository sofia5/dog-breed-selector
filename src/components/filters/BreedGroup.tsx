import { Form } from "react-bootstrap";
import { FaDog } from "react-icons/fa";
import { useState } from "react";
import { IDogBreed } from "../../interfaces/DogBreed.interface";
import "./filters.scss";

export const BreedGroup = ({
  dogBreeds,
  filterDogBreeds,
}: {
  dogBreeds: IDogBreed[];
  filterDogBreeds: any;
}) => {
  const breedGroups = dogBreeds
    .map((dogBreed) => dogBreed.breed_group)
    .filter((elem, index, self) => index === self.indexOf(elem))
    .filter((breedGroup) => breedGroup)
    .sort()
    .concat("Other");

  const [checked, setChecked] = useState(
    new Array(breedGroups.length).fill(false)
  );

  const handleChange = (selectedIndex: number) => {
    setChecked(
      checked.map((item, index) => (index === selectedIndex ? !item : item))
    );
    console.log(checked);
    const selectedDogBreedGroups = checked.filter(
      (item, index) => item === true
    );
    console.log(selectedDogBreedGroups);
    // const selectedDogBreeds = dogBreeds.filter(breed => breed.breed_group ===)
    filterDogBreeds(selectedIndex);
  };

  return (
    <>
      <h5>
        <FaDog className="filter-icon" />
        Breed group
      </h5>

      {breedGroups.map((breedGroup, index) => (
        <Form.Check
          inline
          label={breedGroup}
          name="breedGroups"
          type="checkbox"
          key={index}
          checked={checked[index]}
          onChange={() => handleChange(index)}
        />
      ))}
      <p>{checked}</p>
    </>
  );
};
