import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import Header from '../components/header';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  async function handleLogin() {
    try {
      const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/user/login', {
        email,
        password,
      });

      toast.success("Login successful");
      localStorage.setItem("token", response.data.token);

      if (response.data.role === "admin") {
        navigate("/adminpage");
      } else {
        navigate("/home");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  }

  return (

    <>

    <Header />
   
    <div   
    
     className ="w-full min-h-screen bg-center bg-cover relative flex justify-center items-center px-6"
      style={{ backgroundImage: "url('/login.jpg')" }}
    >
     
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Form container */}
      <div className="relative z-10 w-full max-w-md bg-gray-800/90 backdrop-blur-lg rounded-3xl p-10 shadow-2xl flex flex-col gap-8">
        <div>
          <h1 className="text-4xl font-extrabold text-center text-purple-400 mb-2">
            Login
          </h1>
          <p className="text-center text-gray-400 text-lg font-semibold">
            Welcome back! Please enter your details.
          </p>
        </div>

        {/* Form Inputs */}
        <div className="flex flex-col gap-6">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <div className="relative">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-purple-400 transition"
              aria-label="Toggle Password Visibility"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            onClick={handleLogin}
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300 cursor-pointer"
          >
            Login
          </button>
        </div>

        {/* Links */}
        <div className="text-center text-gray-400 space-y-3">
          <p>
            Don't have an account?{' '}
            <Link
              to="/signup"
              className="text-purple-400 font-medium hover:underline"
            >
              Sign Up
            </Link>
          </p>

          <p className="text-gray-500 text-sm">
            Forgot your password?{' '}
            <Link
              to="/forgot-password"
              className="text-purple-400 font-medium hover:underline"
            >
              Reset here
            </Link>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
