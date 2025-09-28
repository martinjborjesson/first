export type Theme = {
  name: string,
  isDarkMode: boolean,
  primary: string,
  accent: string,
  background: string,
  surface: string,
  text: string,
};

export type CampingSite = {
  id: string,
  name: string,
  image: string,
  description: string,
  coordinates: Coordinates,
  firePlace: boolean,
  fireWood: boolean,
  shelter: boolean,
  water: boolean,
  drinkingWater: boolean,
  note: string,
}

export type Coordinates = {
  longitude: string,
  latitude: string,
}