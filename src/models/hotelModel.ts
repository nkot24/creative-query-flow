
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
  images: string[]; // Changed from 'image' to 'images' array
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
    type: "Divvietīgs numurs (1 gulta un 1 dīvāns) ar privātu vannas istabu",
    price_per_night: 70,
    features: ["24 m²","Skats uz pilsētu","Privāta vannas istaba","Plakanā ekrāna televizors","Bezmaksas bezvadu internets"],
    description: "Šajā divvietīgajā numurā (ar 1 gultu) ir privāta vannas istaba ar vannu, dušu un fēnu. Šī divvietīgā numura ērtību klāstā ir elektriskā tējkanna, apkure un plakanā ekrāna televizors ar satelīta kanāliem. No numura paveras skats uz pilsētu. Šajā uzturēšanās vietā ir 2 gultas.",
    images: ["/lovable-uploads/images/662562698.jpg", "/lovable-uploads/images/663100348.jpg"],
    max_guests: 3
  },
  {
    id: "2",
    type: "Četrvietīgs numurs ar privātu vannas istabu",
    price_per_night: 70,
    features: ["14 m²","Skats uz iekšpagalmu","Privāta vannas istaba","Plakanā ekrāna televizors","Bezmaksas bezvadu internets"],
    description: "Šajā četrvietīgajā numurā ir plakanā ekrāna televizors ar satelīta kanāliem un privāta vannas istaba. Šajā uzturēšanās vietā ir 3 gultas.",
    images: ["/lovable-uploads/images/663100348.jpg", "/lovable-uploads/images/663099965.jpg"],
    max_guests: 4
  },
  
  {
    id: "3",
    type: "Divvietīgs numurs (1 gulta) ar privātu vannas istabu",
    price_per_night: 50,
    features: ["14 m²","Skats uz iekšpagalmu","Privāta vannas istaba","Plakanā ekrāna televizors","Bezmaksas bezvadu internets"],
    description: "Šajā divvietīgajā numurā (ar 1 gultu) ir plakanā ekrāna televizors ar satelīta kanāliem un privāta vannas istaba.",
    images: ["/lovable-uploads/images/663099965.jpg", "/lovable-uploads/images/663099913.jpg"],
    max_guests: 2
  },
  {
    id: "4",
    type: "Divvietīgs numurs (2 gultas) ar privātu vannas istabu",
    price_per_night: 50,
    features: ["14 m²","Skats uz pilsētu","Privāta vannas istaba","Plakanā ekrāna televizors","Bezmaksas bezvadu internets"],
    description: "Šajā divvietīgajā numurā (ar 2 gultām) ir plakanā ekrāna televizors ar satelīta kanāliem un privāta vannas istaba.",
    images: ["/lovable-uploads/images/663099913.jpg", "/lovable-uploads/images/663100529.jpg"],
    max_guests: 2
  },
  {
    id: "5",
    type: "Divvietīgs numurs (1 gulta) ar balkonu",
    price_per_night: 55,
    features: ["15 m²","Balkons","Skats uz pilsētu","Privāta vannas istaba","Plakanā ekrāna televizors","Bezmaksas bezvadu internets"],
    description: "Šajā divvietīgajā numurā ir plakanā ekrāna televizors ar satelīttelevīzijas kanāliem, privāta vannas istaba un balkons ar skatu uz pilsētu. Numurā ir 1 gulta.",
    images: ["/lovable-uploads/images/663100529.jpg", "/lovable-uploads/images/663102216.jpg"],
    max_guests: 2
  },
  {
    id: "6",
    type: "Vienvietīgs numurs ar privātu vannas istabu",
    price_per_night: 45,
    features: ["12 m²","Skats uz iekšpagalmu","Privāta vannas istaba","Bezmaksas bezvadu internets"],
    description: "Šajā vienvietīgajā numurā ir apkure, kā arī privāta vannas istaba ar dušu. Šajā uzturēšanās vietā ir 1 gulta.",
    images: ["/lovable-uploads/images/663102216.jpg", "/lovable-uploads/images/662562698.jpg"],
    max_guests: 1
  }
];

// Function to generate iCal content for all hotel bookings
export const generateHotelICal = (): string => {
  // This would typically fetch from a database, but for demo we'll use sample data
  let ical = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Hotel Kandava//Booking Calendar//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:Hotel Kandava - All Bookings
X-WR-CALDESC:All hotel bookings at Hotel Kandava
`;

  // Sample bookings for demonstration
  const sampleBookings = [
    {
      id: "booking1",
      roomType: "Divvietīgs numurs (1 gulta)",
      guestName: "Sample Guest 1",
      checkIn: "2024-02-15",
      checkOut: "2024-02-17"
    },
    {
      id: "booking2", 
      roomType: "Četrvietīgs numurs",
      guestName: "Sample Guest 2",
      checkIn: "2024-02-20",
      checkOut: "2024-02-22"
    }
  ];

  sampleBookings.forEach(booking => {
    const startDate = new Date(booking.checkIn);
    const endDate = new Date(booking.checkOut);
    
    // Format dates for iCal (YYYYMMDD)
    const formatDate = (date: Date) => {
      return date.toISOString().slice(0, 10).replace(/-/g, '');
    };
    
    ical += `BEGIN:VEVENT
UID:${booking.id}@hotelkandava.com
DTSTART;VALUE=DATE:${formatDate(startDate)}
DTEND;VALUE=DATE:${formatDate(endDate)}
SUMMARY:${booking.roomType} - ${booking.guestName}
DESCRIPTION:Hotel booking for ${booking.guestName}
STATUS:CONFIRMED
TRANSP:OPAQUE
END:VEVENT
`;
  });

  ical += `END:VCALENDAR`;
  return ical;
};

// Function to download hotel iCal file
export const downloadHotelICal = () => {
  const icalContent = generateHotelICal();
  const blob = new Blob([icalContent], { type: 'text/calendar;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = 'hotel_kandava_bookings.ics';
  link.click();
  
  window.URL.revokeObjectURL(url);
};
