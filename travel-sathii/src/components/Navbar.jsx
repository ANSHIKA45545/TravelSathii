import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { LoginModal } from "../pages/Login";

const Header = ({ showContact, setShowContact }) => {
    const [showLogin, setShowLogin] = useState(false);
  const [hidden, setHidden] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryTerm = event.target.search.value;
    event.target.reset();
    return navigate(`/search?q=${queryTerm}`);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-sky-700 shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={() => setHidden(!hidden)}
              type="button"
              className="text-sky-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="text-white text-2xl font-extrabold tracking-wide">
            Travel<span className="text-orange-400">Sathii</span>
          </div>

          {/* Menu (Desktop) */}
          <div className="hidden sm:flex space-x-6">
            <Link
              to="/"
              className="text-sky-100 hover:text-white hover:border-b-2 border-orange-400 transition"
            >
              Home
            </Link>
            <Link
              to="/explore"
              className="text-sky-100 hover:text-white hover:border-b-2 border-orange-400 transition"
            >
              Explore
            </Link>
            <button
              className="text-sky-100 hover:text-white hover:border-b-2 border-orange-400 transition"
              onClick={() =>
                setShowContact && setShowContact(!showContact)
              }
            >
              Contact
            </button>
            <button
              to="/login"
              className="text-sky-100 hover:text-white hover:border-b-2 border-orange-400 transition"
              onClick={() => setShowLogin(true)}
            >
              Login / Register
            </button>
            <LoginModal showLogin={showLogin} onClose={() => setShowLogin(false)} />

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {!hidden && (
        <div className="sm:hidden bg-blue-800 px-4 py-3 space-y-2 text-sky-100">
          <Link
            to="/"
            className="block hover:text-white"
            onClick={() => setHidden(true)}
          >
            Home
          </Link>
          <Link
            to="/explore"
            className="block hover:text-white"
            onClick={() => setHidden(true)}
          >
            Explore
          </Link>
          <button
            className="block hover:text-white"
            onClick={() => {
              setHidden(true);
              setShowContact && setShowContact(!showContact);
            }}
          >
            Contact
          </button>
          <Link
            to="/login"
            className="block hover:text-white"
            onClick={() => setHidden(true)}
          >
            Login / Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
