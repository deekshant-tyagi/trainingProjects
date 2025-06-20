import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[errors, setErrors] = useState({});

    const validate = () => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email.trim()) {
            errors.email = "Email is required";
        } else if (!emailRegex.test(email)) {
            errors.email = "Email is invalid";
        }

        if (!password) {
            errors.password = "Password is required";
        } else if (password.length < 6) {
            errors.password = "Password must be at least 6 characters";
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 w-96 flex flex-col gap-6">
                <h1 className="text-3xl font-bold text-center text-gray-800">Login</h1>
                <div className="flex flex-col gap-4">
                    <label htmlFor="email" className="text-gray-700 font-semibold">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                </div>
                <div className="flex flex-col gap-4">
                    <label htmlFor="password" className="text-gray-700 font-semibold">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                    )}
                </div>
                <div className="flex justify-between items-center">
                    <Link to="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</Link>
                </div>
                <button type="submit" className="bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition duration-300">
                    Login
                </button>
                <div className="text-center">
                    <Link to="/register" className="text-blue-600 hover:underline">Create Account</Link>
                </div>
            </form>
        </div>
    )
}

export default Login
