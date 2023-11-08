export const sites: sitesType[] = [
  {
    "name": "Eiffel Tower",
    "description": "Iconic Parisian landmark",
    "rate": 4.6,
    "like": true,
    "guide": "Jean Dupont",
    "image": "https://cdn.pixabay.com/photo/2022/10/03/13/16/houses-7495861_1280.jpg"
  },
  {
    "name": "Great Wall of China",
    "description": "Ancient defensive structure in China",
    "rate": 3.8,
    "like": true,
    "guide": "Li Wei",
    "image": "https://cdn.pixabay.com/photo/2021/07/24/15/47/venice-6489813_1280.jpg"
  },
  {
    "name": "Machu Picchu",
    "description": "Incan ruins in the Andes",
    "rate": 4.7,
    "like": true,
    "guide": "Alejandro Gomez",
    "image": "https://cdn.pixabay.com/photo/2017/10/12/18/09/venice-2845272_1280.jpg"
  },
  {
    "name": "Taj Mahal",
    "description": "White marble mausoleum in India",
    "rate": 4.9,
    "like": true,
    "guide": "Rajesh Patel",
    "image": "https://cdn.pixabay.com/photo/2015/10/21/11/17/marrakesh-999370_1280.jpg"
  },
  {
    "name": "Pyramids of Giza",
    "description": "Ancient Egyptian tombs",
    "rate": 5,
    "like": true,
    "guide": "Ahmed Khalil",
    "image": "https://cdn.pixabay.com/photo/2020/01/31/07/10/city-4807268_1280.jpg"
  },
  {
    "name": "Colosseum",
    "description": "Ancient Roman amphitheater",
    "rate": 2.5,
    "like": true,
    "guide": "Giovanni Rossi",
    "image": "https://cdn.pixabay.com/photo/2019/10/18/01/45/city-4558069_1280.jpg"
  }
]

export interface sitesType {
  name: string,
  description: string,
  rate: number,
  like: boolean,
  guide: string,
  image: string
}