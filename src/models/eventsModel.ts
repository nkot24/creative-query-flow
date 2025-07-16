
export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  location: string;
  image: string;
  category: string;
}

export const eventsData: Event[] = [
  {
    id: 1,
    title: "Jazz Night",
    date: "2024-01-15",
    time: "20:00",
    description: "Enjoy an evening of smooth jazz with local musicians in our cozy lounge.",
    location: "Hotel Lounge",
    image: "/placeholder.svg",
    category: "Music"
  },
  {
    id: 2,
    title: "Wine Tasting",
    date: "2024-01-20",
    time: "18:30",
    description: "Discover local wines paired with artisanal cheeses in an intimate setting.",
    location: "Wine Cellar",
    image: "/placeholder.svg",
    category: "Food & Drink"
  },
  {
    id: 3,
    title: "Cooking Class",
    date: "2024-01-25",
    time: "14:00",
    description: "Learn to cook traditional local dishes with our head chef.",
    location: "Hotel Kitchen",
    image: "/placeholder.svg",
    category: "Experience"
  },
  {
    id: 4,
    title: "Art Exhibition",
    date: "2024-02-01",
    time: "16:00",
    description: "Local artists showcase their latest works in our gallery space.",
    location: "Gallery Hall",
    image: "/placeholder.svg",
    category: "Culture"
  }
];
