import { languages } from "@/languages";

export type Theme = {
  name: string,
  isDarkMode: boolean,
  primary: string,
  accent: string,
  background: string,
  surface: string,
  text: string,
};

export type Campsite = {
  id: string,
  name: string,
  image?: string,
  description: string,
  coordinates: Coordinates,
  firePlace?: boolean,
  fireWood?: boolean,
  shelter?: boolean,
  water?: boolean,
  drinkingWater?: boolean,
  note?: string,
  toilet?: boolean,
}

export type Coordinates = {
  longitude: number,
  latitude: number,
}

export type Language = keyof typeof languages;