export interface IDogBreed {
  id: string;
  name: string;
  breed_group: string;
  bred_for: string;
  height: {
    imperial: string;
    metric: string;
  };
  image: {
    id: string;
    url: string;
    height: number;
    width: number;
  };
  lifespan: string;
  origin: string;
  reference_img_id: string;
  temperament: string;
  weight: {
    imperial: string;
    metric: string;
  };
}
