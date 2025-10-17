import { ImTwitter, ImFacebook, ImLinkedin } from "react-icons/im";
import { BsDiscord } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-sky-700 text-white p-10 text-center">
      <div className="flex flex-col items-center">
        {/* Logo / Icon */}
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="mb-4"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>

        {/* Footer Text */}
        <p className="font-bold text-lg">
          TravelSathii - Explore & Plan Your Perfect Trip
        </p>
        <p className="text-sm mt-2">
          &copy; {new Date().getFullYear()} TravelSathii. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4">
          <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <ImTwitter className="w-6 h-6 hover:text-orange-400 transition-colors"/>
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <ImLinkedin className="w-6 h-6 hover:text-orange-400 transition-colors"/>
          </a>
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <ImFacebook className="w-6 h-6 hover:text-orange-400 transition-colors"/>
          </a>
          <a href="https://discord.com" aria-label="Discord" target="_blank" rel="noopener noreferrer">
            <BsDiscord className="w-6 h-6 hover:text-orange-400 transition-colors"/>
          </a>
        </div>
      </div>
    </footer>
  );
};
