import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function handleLogin() {
       
        

        try {
            const response = await axios.post('http://localhost:3000/api/user/login', {
                email: email,
                password: password
            });
            //alert("Login successful");
            toast.success("Login successful");
            console.log(response.data);
        } catch (error) {
           // alert(error.response.data.message);
            toast.error(error.response.data.message);
        }
    }

    return (
        <div className="w-full h-screen bg-[url('/login.jpg')] bg-center bg-cover flex justify-center items-center">
            <div className="w-[50%] h-full"></div>
            <div className="w-[50%] h-full flex justify-center items-center">
                <div className="w-[500px] h-[600px] backdrop-blur-lg bg-white/30 rounded-3xl shadow-2xl p-10 flex flex-col justify-between">
                    <div>
                        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
                            Login
                        </h1>
                        <p className="text-center text-gray-600 mt-4 text-xl font-bold">
                            Welcome back! Please enter your details.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6 mt-8">
                        <input 
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                        <input 
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        
                        <button
                            onClick={handleLogin}
                           
                            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
                        >
                            Login
                        </button>
                    </div>

                    <div className="text-center mt-4">
                        <p className="text-gray-600">
                            Don't have an account?{' '}
                            <Link
                                to="/signup"
                                className="text-blue-600 font-medium hover:underline"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </div>

                    <div className="text-center mt-4 text-gray-500 text-sm">
                        Forgot your password?{' '}
                        <Link
                            to="/forgot-password"
                            className="text-blue-600 font-medium hover:underline"
                        >
                            Reset here
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}