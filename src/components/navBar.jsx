import "../App.css";
import { Home, Calendar, Users, Info, Mail, User, Users2, CalendarDays, Clock } from "lucide-react";
import backgroundImage from "../assets/background.png"; 

export function NavBar() {
  return (
    <div
      className="relative w-screen h-screen flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      <div className="absolute inset-0 bg-black/50"></div>


      <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 z-10">
        <h1 className="text-white text-2xl font-bold">HiddenSafari</h1>
        <div className="flex space-x-6 text-white">
          <a href="#home" className="flex items-center gap-1 !text-white hover:text-gray-300">
            <Home size={20} className="text-white"/> Home
          </a>
          <a href="#events" className="flex items-center gap-1 !text-white hover:text-gray-300">
            <Calendar size={20} className="text-white"/> Events
          </a>
          <a href="#team" className="flex items-center !text-white gap-1 hover:text-gray-300">
            <Users size={20} className="text-white"/> Team
          </a>
          <a href="#about" className="flex items-center gap-1 !text-white hover:text-gray-300">
            <Info size={20} className="text-white"/> About
          </a>
          <a href="#contact" className="flex items-center gap-1 !text-white hover:text-gray-300">
            <Mail size={20} className="text-white"/> Contact
          </a>
        </div>
      </nav>

      <div className="relative z-10 w-full px-6">
        <div className="text-left">
          <h2 className="text-5xl md:text-6xl font-bold">Experience</h2>
          <h2 className="text-5xl md:text-6xl font-bold mt-2">Nature</h2>
        </div>
      </div>

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
  );
}