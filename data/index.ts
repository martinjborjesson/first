import { CampingSite } from "@/types/types"

export const mockData: CampingSite[] = [
  {
    id: "patrik",
    name: "Patrik Lax",
    image: "@/assets/app/patrik.png",
    description: "Kungen.",
    coordinates: {
      longitude: 57.714186790674404,
      latitude: 12.796773591829576
    },
    firePlace: false,
    fireWood: true,
    shelter: true,
    water: false,
    drinkingWater: true,
    note: "Hej",
  },
  {
    id: "0001",
    name: "Hålehall",
    image: "@/assets/app/front-page.jpg",
    description: "Lägerplats med vindskydd på lövskogshöjd.",
    coordinates: {
      longitude: 12.845264,
      latitude: 56.361773
    },
    firePlace: true,
    fireWood: true,
    shelter: true,
    water: true,
    drinkingWater: true,
    note: "På grund av vedstölder kan vi inte garantera att det finns ved vid våra lägerplatser. Om det är möjligt uppmanar vi till att ta med sig egen ved. Tänk på att ta väl hand om naturen!",
  },
  {
    id: "0002",
    name: "Bottnamaden",
    image: "",
    description: "Vindskydd med eldplats beläget vid Jälmån",
    coordinates: {
      longitude: 13.5046,
      latitude: 57.5715,
    },
    firePlace: true,
    fireWood: true,
    shelter: true,
    water: true,
    drinkingWater: false,
    note: "",
  },
  {
    id: "0003",
    name: "Holmforsen",
    image: "",
    description: "Vindskydd med eldplats beläget vid Jälmån",
    coordinates: {
      longitude: 13.5107,
      latitude: 57.5863
    },
    firePlace: true,
    fireWood: true,
    shelter: true,
    water: true,
    drinkingWater: true,
    note: "",
  },
  {
    id: "0004",
    name: "Abborrsjön",
    image: "",
    description: "Vindskydd med grillplats intill Abborrsjön",
    coordinates: {
      longitude: 12.6238,
      latitude: 57.7072
    },
    firePlace: true,
    fireWood: true,
    shelter: true,
    water: true,
    drinkingWater: true,
    note: "",
  },
  {
    id: "0005",
    name: "Säven",
    image: "",
    description: "En sjö. Jäkligt fint på sommarn",
    coordinates: {
      longitude: 12.8693,
      latitude: 57.8845
    },
    firePlace: false,
    fireWood: false,
    shelter: false,
    water: true,
    drinkingWater: false,
    note: "",
  },
  // {
  //   id: "0002",
  //   name: "",
  //   image: "",
  //   description: "",
  //   coordinates: {
  //     longitude: 12.845264,
  //     latitude: 56.361773
  //   },
  //   firePlace: true,
  //   fireWood: true,
  //   shelter: true,
  //   water: true,
  //   drinkingWater: true,
  //   note: "",
  // },
]