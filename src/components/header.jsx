// components/Header.js
import { Home, Calendar, Users, Info, Mail } from "lucide-react";

export function Header() {
  return (
    <nav className="w-full fixed top-0 left-0 flex justify-between items-center p-6 bg-black/50 z-50">
      <h2 className="text-white text-2xl font-bold">HiddenSafari</h2>
      <div className="flex space-x-6 text-white">
        <a href="#home" className="flex items-center gap-1 !text-white hover:text-gray-300">
          <Home size={20} /> Home
        </a>
        <a href="#events" className="flex items-center gap-1 !text-white hover:text-gray-300">
          <Calendar size={20} /> Events
        </a>
        <a href="#team" className="flex items-center gap-1 !text-white hover:text-gray-300">
          <Users size={20} /> Team
        </a>
        <a href="#about" className="flex items-center gap-1 !text-white hover:text-gray-300">
          <Info size={20} /> About
        </a>
        <a href="#contact" className="flex items-center gap-1 !text-white hover:text-gray-300">
          <Mail size={20} /> Contact
        </a>
      </div>
    </nav>
  );
}