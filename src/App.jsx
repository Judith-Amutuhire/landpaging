import { useState } from "react";
import { NavBar } from "./components/navBar";
import "./App.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";
import kilimanjaro from "./assets/kilimanjaro.jpg";
import kenya from "./assets/kenya.jpeg";
import rwenzori from "./assets/rwenzori.jpeg";
import atlas from "./assets/atlas.jpg";
import { Users2, User, CalendarDays, Clock } from "lucide-react";

const events = [
  {
    title: "KILIMANJARO",
    location: "Killmanjaro Trek",
    image: kilimanjaro,
  },
  {
    title: "MOUNT KENYA",
    location: "Mount Kenya Trek",
    image: kenya,
  },
  {
    title: "RWENZORI",
    location: "Rwenzori Trek",
    image: rwenzori,
  },
  {
    title: "ATLAS",
    location: "Atlas Trek",
    image: atlas,
  },
];

const cardsData = [
  {
    image: kilimanjaro,
    title: "Kilimanjaro",
    icons: [
      { icon: <Users2 size={20} /> },
      { icon: <User size={20} /> },
      { icon: <CalendarDays size={20} /> },
      { icon: <Clock size={20} /> },
    ],
  },
  {
    image: atlas,
    title: "Atlas",
    icons: [
      { icon: <Users2 size={20} /> },
      { icon: <User size={20} /> },
      { icon: <CalendarDays size={20} /> },
      { icon: <Clock size={20} /> },
    ],
  },
  {
    image: kenya,
    title: "Kenya",
    icons: [
      { icon: <Users2 size={20} /> },
      { icon: <User size={20} /> },
      { icon: <CalendarDays size={20} /> },
      { icon: <Clock size={20} /> },
    ],
  },
];

function ImageCard({ image, title, icons }) {
  return (
    <div className="flex flex-col w-64 h-80 rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Background image */}
      <div className="relative h-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Title at the top */}
        <div className="absolute top-45 left-0 right-0 p-4 bg-black/50">
          <h3 className="text-2xl font-bold text-white font-loader">{title}</h3>
        </div>

        {/* Icons at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 flex justify-center space-x-6">
          {icons.map((icon, index) => (
            <div key={index} className="text-white">
              {icon.icon} {/* Render the icon */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EventCard({ title, location, image }) {
  return (
    <div className="flex flex-col w-64 h-80 rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Image covering from top to just above the location */}
      <div className="relative h-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {/* Title within the image */}
        <div className="absolute top-0 left-0 right-0 p-4 bg-black/50">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
      </div>
      {/* Location at the bottom of the card */}
      <div className="p-4 flex flex-col justify-end h-1/4">
        <p className="text-sm text-black">{location}</p>
      </div>
    </div>
  );
}

function App() {
  const containerRef = useRef(null);
  const imageCardRef = useRef(null);

  const scrollLeft = (ref) => {
    ref.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = (ref) => {
    ref.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="bg-white min-h-screen">
      <NavBar></NavBar>
      <div className="p-8 bg-white">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Highlighted Events
        </h1>
        {/* Paragraph with spacing */}
        <p className="mb-8 text-gray-600">
          Recommended camps by our Instructors
        </p>
        {/* Image cards container with horizontal scrolling */}
        <div className="relative">
          <button
            onClick={() => scrollLeft(imageCardRef)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>
          <div
            ref={imageCardRef}
            className="flex overflow-x-auto space-x-4 scrollbar-hide min-w-full"
          >
            {cardsData.map((card, index) => (
              <ImageCard key={index} {...card} />
            ))}
          </div>
          <button
            onClick={() => scrollRight(imageCardRef)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
          >
            <FaChevronRight className="text-gray-700" />
          </button>
        </div>
      </div>
      <div className="p-8 bg-white">
        {/* Snow Treks title */}
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Snow Treks</h1>
        {/* Paragraph with spacing */}
        <p className="mb-8 text-gray-600">
          Experience the magic of winter landscapes with our guided snow treks
        </p>
        {/* Event cards container with horizontal scrolling */}
        <div className="relative">
          <button
            onClick={() => scrollLeft(containerRef)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>
          <div
            ref={containerRef}
            className="flex overflow-x-auto space-x-4 scrollbar-hide min-w-full"
          >
            {events.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                location={event.location}
                image={event.image}
              />
            ))}
          </div>
          <button
            onClick={() => scrollRight(containerRef)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
          >
            <FaChevronRight className="text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;