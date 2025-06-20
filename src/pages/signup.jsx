import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import Header from '../components/header';

export default function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  async function handleSignup() {
    if (!firstname || !lastname || !email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/user/register', {
        firstname,
        lastname,
        email,
        password,
        role,
      });

      toast.success("Signup successful");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  }

  return (
    <>
    <Header/>
    <div
      className="w-full min-h-screen bg-center bg-cover relative flex justify-center items-center px-6"
      style={{ backgroundImage: "url('/newlogin.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Form container */}
      <div className="relative z-10 w-full max-w-md bg-gray-800/90 backdrop-blur-lg rounded-3xl p-10 shadow-2xl flex flex-col gap-8">
        <div>
          <h1 className="text-4xl font-extrabold text-center text-purple-400 mb-4">
            Sign Up
          </h1>
          <p className="text-center text-gray-400 text-lg font-semibold">
            Create your account to get started.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <input
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
            type="text"
            placeholder="First Name"
            aria-label="First Name"
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
            type="text"
            placeholder="Last Name"
            aria-label="Last Name"
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email Address"
            aria-label="Email Address"
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div className="relative">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              aria-label="Password"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="button"
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-purple-400 transition"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Toggle Password Visibility"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <select
            onChange={(e) => setRole(e.target.value)}
            value={role}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="customer">Customer</option>
            <option value="seller">Seller</option>
          </select>

          <button
            onClick={handleSignup}
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300 cursor-pointer"
          >
            Sign Up
          </button>
        </div>

        <div className="text-center text-gray-400">
          <p>
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-purple-400 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
