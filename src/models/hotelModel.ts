
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
    type: "Divvietīgs numurs (1 gulta) ar privātu vannas istabu",
    price_per_night: 60,
    features: ["24 m²","Skats uz pilsētu","Privāta vannas istaba","Plakanā ekrāna", "televizors","Bezmaksas bezvadu internets"],
    description: "Šajā divvietīgajā numurā (ar 1 gultu) ir privāta vannas istaba ar vannu, dušu un fēnu. Šī divvietīgā numura ērtību klāstā ir elektriskā tējkanna, apkure un plakanā ekrāna televizors ar satelīta kanāliem. No numura paveras skats uz pilsētu. Šajā uzturēšanās vietā ir 2 gultas.",
    image: "/lovable-uploads/images/662562698.jpg",
    max_guests: 2
  },
  {
    id: "2",
    type: "Četrvietīgs numurs ar privātu vannas istabu",
    price_per_night: 70,
    features: ["Skats uz iekšpagalmu","Privāta vannas istaba","Plakanā ekrāna televizors","Bezmaksas bezvadu internets"],
    description: "Šajā četrvietīgajā numurā ir plakanā ekrāna televizors ar satelīta kanāliem un privāta vannas istaba. Šajā uzturēšanās vietā ir 3 gultas.",
    image: "/lovable-uploads/images/663100348.jpg",
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
