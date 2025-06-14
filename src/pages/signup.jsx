import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

export default function Signup() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("customer");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    async function handleSignup() {
        // Basic validation
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
        <div className="w-full h-screen bg-[url('/login.jpg')] bg-center bg-cover flex justify-center items-center">
            <div className="w-[50%] h-full"></div>
            <div className="w-[50%] h-full flex justify-center items-center">
                <div className="w-[500px] h-[800px] backdrop-blur-lg bg-white/30 rounded-3xl shadow-2xl p-10 flex flex-col justify-between">
                    <div>
                        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
                            Sign Up
                        </h1>
                        <p className="text-center text-gray-600 mt-4 text-xl font-bold">
                            Create your account to get started.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6 mt-8">
                        <input
                            onChange={(e) => setFirstname(e.target.value)}
                            value={firstname}
                            type="text"
                            placeholder="First Name"
                            aria-label="First Name"
                            className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            onChange={(e) => setLastname(e.target.value)}
                            value={lastname}
                            type="text"
                            placeholder="Last Name"
                            aria-label="Last Name"
                            className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            placeholder="Email Address"
                            aria-label="Email Address"
                            className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <div className="relative">
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                aria-label="Password"
                                className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="button"
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label="Toggle Password Visibility"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        <select
                            onChange={(e) => setRole(e.target.value)}
                            value={role}
                            className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="customer">Customer</option>
                            <option value="seller">Seller</option>
                        </select>
                        <button
                            onClick={handleSignup}
                            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
                        >
                            Sign Up
                        </button>
                    </div>

                    <div className="text-center mt-4">
                        <p className="text-gray-600">
                            Already have an account?{' '}
                            <Link
                                to="/login"
                                className="text-blue-600 font-medium hover:underline"
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
