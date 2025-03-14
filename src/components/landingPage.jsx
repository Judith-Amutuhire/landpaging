// components/LandingPage.js
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import kilimanjaro from "../assets/kilimanjaro.jpg";
import kenya from "../assets/kenya.jpeg";
import rwenzori from "../assets/rwenzori.jpeg";
import atlas from "../assets/atlas.jpg";
import kruger from "../assets/kruger.jpeg";
import western from "../assets/westernCape.jpeg";
import addo from "../assets/addoPark.jpeg";
import masai from "../assets/masaiMara.jpeg";
import kilimanjaroTrek from "../assets/kilimanjaro.jpeg";
import hwangePark from "../assets/hwangePark.jpeg";
import botswana from "../assets/botswana.jpeg";
import hunting from "../assets/hunting.jpeg";
import trainingCamp from "../assets/trainingCamp.jpeg";
import { Users2, User, CalendarDays, Clock } from "lucide-react";
import backgroundImage from "../assets/background.png";
import tourism1 from "../assets/tourism1.webp"
import tourism2 from "../assets/tourism2.jpg"
import tourism3 from "../assets/tourism3.webp"

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

const summerEvents = [
  {
    title: "KRUGER PARK",
    location: "Kruger Park",
    image: kruger,
  },
  {
    title: "WESTERN CAPE",
    location: "Western Cape",
    image: western,
  },
  {
    title: "ADDO PARK",
    location: "Addo Park",
    image: addo,
  },
  {
    title: "MASAI MARA",
    location: "Masai Mara",
    image: masai,
  },
];

const epicAdventure = [
  {
    title: "KILIMANJARO",
    location: "Kilimanjaro Trek",
    image: kilimanjaroTrek,
  },
  {
    title: "HWANGE PARK",
    location: "Hwange Park",
    image: hwangePark,
  },
  {
    title: "BOTSWANA",
    location: "Botswana",
    image: botswana,
  },
];

const specialEvents = [
  {
    title: "HUNTING",
    location: "Hunting",
    image: hunting,
  },
  {
    title: "TRAINING CAMP",
    location: "Training Camp",
    image: trainingCamp,
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

const videoSectionProps = {
  heading: "Experience Yourself",
  subheading: "Exclusive footage from our camps",
  videoIds: ["r_Isw2xGtVE?si=DvN9pwrJmvNCVqGg", "mOvGV_w34Jg?si=w2KSAAXqqlAhANpY", "K6FjfCuhgrY?si=_N2-HNtSlpHhxsRw"],
  images: [tourism1, tourism2, tourism3],
};

function ImageCard({ image, title, icons }) {
  return (
    <div className="flex flex-col w-64 h-80 rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative h-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute top-45 left-0 right-0 p-4 bg-black/50">
          <h3 className="text-2xl font-bold text-white font-loader">{title}</h3>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 flex justify-center space-x-6">
          {icons.map((icon, index) => (
            <div key={index} className="text-white">
              {icon.icon}
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
      <div className="relative h-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 right-0 p-4 bg-black/50">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
      </div>
      <div className="p-4 flex flex-col justify-end h-1/4">
        <p className="text-sm text-black">{location}</p>
      </div>
    </div>
  );
}
function VideoSection({ heading, subheading, videoIds, images }) {
  return (
    <div className="p-8 bg-lightRed">
      <div className="container mx-auto">
        {/* Heading and Subheading */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{heading}</h1>
          <p className="text-lg text-gray-600">{subheading}</p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoIds.map((videoId, index) => (
            <a
              key={index}
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={images[index]}
                alt={`YouTube video ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

  function TestimonialsSection() {
    return (
      <div className="p-8 bg-gray-50">
        <div className="container mx-auto">
          {/* Heading and Subheading */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why people ❤️ Invincible
            </h2>
            <p className="text-lg text-gray-600">
              Experience the best with us
            </p>
          </div>
  
          {/* Testimonials and Review Section */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Testimonials Column */}
            <div className="flex flex-col space-y-6">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">Milton Austin</h3>
                <p className="text-gray-600">Sales Manager, ABC</p>
              </div>
  
              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">Annie</h3>
                <p className="text-gray-600">Head of Sales, ABC</p>
              </div>
  
              {/* Testimonial 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800">Sandra</h3>
                <p className="text-gray-600">Head of Sales, ABC</p>
              </div>
            </div>
  
            {/* Star Rating and Review */}
            <div className="flex-1">
              <div className="text-yellow-500 text-2xl mb-4">★★★★★★</div>
              <p className="text-gray-600">
                This trekking organization is excellent. Their costs are minimal due to
                their NGO’s non-profit efforts. You can have the experience of
                trekking at the lowest cost with basic amenities and the best
                available trek leaders. The best part is the food they provide during
                the trek. Their cooks are the best I have experienced so far with
                different organizations. The food they serve is healthy and a
                balanced diet.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default function LandingPage() {
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
      {/* Background Image and "Experience Nature" Section */}
      <div
        className="relative w-screen h-screen flex flex-col justify-center items-center text-white"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* "Experience Nature" Text */}
        <div className="relative z-10 w-full px-6">
          <div className="text-left">
            <h2 className="text-5xl md:text-6xl font-bold">Experience</h2>
            <h2 className="text-5xl md:text-6xl font-bold mt-2">Nature</h2>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="absolute bottom-0 left-0 p-6 z-10">
          <div className="flex flex-col space-y-2 text-white">
            <p className="text-lg text-gray-200 mb-4">
              India’s Largest Trekking Organization
            </p>
            <div className="flex space-x-6">
              <div className="flex items-center gap-2">
                <Users2 size={20} />
                <span>2,15,000+ Participants</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={20} />
                <span>2,750+ Volunteers</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays size={20} />
                <span>68+ Events</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>1 Year</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Highlighted Events Section */}
      <div className="p-8 bg-white">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Highlighted Events
        </h2>
        <p className="mb-8 text-gray-600">
          Recommended camps by our Instructors
        </p>
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

      {/* Snow Treks Section */}
      <div className="p-8 bg-white">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Snow Treks</h2>
        <p className="mb-8 text-gray-600">
          Experience the magic of winter landscapes with our guided snow treks
        </p>
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

      {/* Summer Events Section */}
      <div className="p-8 bg-white">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Summer Events</h2>
        <p className="mb-8 text-gray-600">
          Join our exciting range of summer activities
        </p>
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
            {summerEvents.map((event, index) => (
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

      {/* Epic Adventure Section */}
      <div className="p-8 bg-white">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Epic Adventure
        </h2>
        <p className="mb-8 text-gray-600">
          Push your limits with our most thrilling outdoor challenges
        </p>
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
            {epicAdventure.map((event, index) => (
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

      {/* Special Events Section */}
      <div className="p-8 bg-white">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Special Events
        </h2>
        <p className="mb-8 text-gray-600">
          Join us for unique, limited-time gatherings that celebrate remarkable
          occasions
        </p>
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
            {specialEvents.map((event, index) => (
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
      <VideoSection {...videoSectionProps} />
      <TestimonialsSection/>
    </div>
  );
}