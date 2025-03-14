// components/Footer.js
import { Linkedin, Youtube, Facebook, Search } from "lucide-react"; // Use PascalCase for icon names

export function Footer() {
  return (
    <footer className="w-full bg-lightRed text-white p-8">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        {/* HiddenSafari Logo */}
        <h2 className="text-2xl text-black font-bold">HiddenSafari</h2>

        {/* Links (Teams, About, Events, Contact Us, Terms and Conditions) */}
        <div className="flex space-x-6">
          <a href="#teams" className="!text-black hover:text-white">
            Teams
          </a>
          <a href="#about" className="!text-black hover:text-white">
            About
          </a>
          <a href="#events" className="!text-black hover:text-white">
            Events
          </a>
          <a href="#contact" className="!text-black hover:text-white">
            Contact Us
          </a>
          <a href="#terms" className="!text-black hover:text-white">
            Terms and Conditions
          </a>
        </div>

        {/* Email Subscription and Social Media Icons */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Email Subscription */}
          <div className="flex items-center border border-black rounded-lg">
            <input
              type="email"
              placeholder="Enter your Email"
              className="p-2 rounded-l-lg placeholder-black focus:outline-none"
            />
            <button className="p-2 bg-greylight rounded-r-lg hover:bg-blue-700 transition-colors">
              <Search size={20} className="text-black" /> {/* Search Icon */}
            </button>
            
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="!text-black hover:text-white"
            >
              <Linkedin size={24} /> {/* LinkedIn Icon */}
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="!text-black hover:text-white"
            >
              <Facebook size={24} /> {/* Facebook Icon */}
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="!text-black hover:text-white"
            >
              <Youtube size={24} /> {/* YouTube Icon */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}