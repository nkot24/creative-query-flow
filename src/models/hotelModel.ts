
export interface Hotel {
  name: string;
  address: string;
  description: string;
  phone: string;
  email: string;
  amenities: string[];
  images: string[];
}

export interface Room {
  id: string;
  type: string;
  price_per_night: number;
  features: string[];
  description: string;
  image: string;
  max_guests: number;
}

export interface Booking {
  id: string;
  room_id: string;
  guest_name: string;
  guest_email: string;
  guest_phone: string;
  check_in: string;
  check_out: string;
  guests: number;
  total_price: number;
}

export const hotelData: Hotel = {
  name: "Viesnīca Kandava",
  address: "Sabiles iela 3, Kandava, LV-3120, Latvia",
  description: "Located in the historic center of Kandava, our charming hotel offers comfort and authentic Latvian hospitality in a beautifully restored building.",
  phone: "+371 63182188",
  email: "kandava.hotel@gmail.com",
  amenities: ["Free Wi-Fi", "Private bathroom", "Restaurant", "Garden", "Parking", "24/7 Reception"],
  images: ["/placeholder.svg"]
};

export const roomsData: Room[] = [
  {
    id: "1",
    type: "Double Room",
    price_per_night: 65,
    features: ["2 single beds", "Private bathroom", "Free Wi-Fi", "Garden view"],
    description: "Comfortable double room with traditional Latvian décor and modern amenities.",
    image: "/placeholder.svg",
    max_guests: 2
  },
  {
    id: "2",
    type: "Family Room",
    price_per_night: 85,
    features: ["1 double bed", "2 single beds", "Private bathroom", "Free Wi-Fi", "Balcony"],
    description: "Spacious family room perfect for up to 4 guests with a lovely balcony view.",
    image: "/placeholder.svg",
    max_guests: 4
  },
  {
    id: "3",
    type: "Single Room",
    price_per_night: 45,
    features: ["1 single bed", "Private bathroom", "Free Wi-Fi", "Desk"],
    description: "Cozy single room ideal for solo travelers or business guests.",
    image: "/placeholder.svg",
    max_guests: 1
  }
];
