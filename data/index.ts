import { CampingSite } from "@/types/types"

export const mockData: CampingSite[] = [
  {
    id: "0001",
    name: "Hålehall",
    image: "@/assets/app/front-page.jpg",
    description: "Lägerplats med vindskydd på lövskogshöjd.",
    coordinates: {
      longitude: "12.845264",
      latitude: "56.361773"
    },
    firePlace: true,
    fireWood: true,
    shelter: true,
    water: true,
    drinkingWater: true,
    note: "På grund av vedstölder kan vi inte garantera att det finns ved vid våra lägerplatser. Om det är möjligt uppmanar vi till att ta med sig egen ved. Tänk på att ta väl hand om naturen!",
  },
]