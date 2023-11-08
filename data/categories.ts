import { IconFoodSquare, IconNatureSquare, IconStarSquare } from "../components/icons"

export const categories: categoriesType[] = [
  {
    "name": "Top 30 places",
    "icon": IconStarSquare()
  },
  {
    "name": "Nature",
    "icon": IconNatureSquare()
  },
  {
    "name": "Gastro",
    "icon": IconFoodSquare()
  },
  // {
  //   "name": "Car Rentals",
  //   "icon": "car"
  // },
  // {
  //   "name": "Cruises",
  //   "icon": "cruise"
  // },
  // {
  //   "name": "Tours",
  //   "icon": "tour"
  // },
  // {
  //   "name": "Vacation Packages",
  //   "icon": "vacation"
  // }
]

export interface categoriesType {
  name: string,
  icon: React.JSX.Element
}
