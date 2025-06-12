import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="/" className="hover:text-gray-400">AgroConnect</a>
        </div>

        {/* Links */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            
            <Link to="/Login" className="hover:text-gray-400">
              Login
            </Link>
          </li>
          <li>
            <Link to="/Signup" href="/Signup" className="hover:text-gray-400">
              Sign Up
            </Link>
          </li>
          <li>
            <a href="https://www.google.com" className="hover:text-gray-400">
              Google
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
