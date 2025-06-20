import React, { useState } from 'react'

const Register = () => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[newPassword,setNewPassword]=useState("");
    const[confirmPassword,setConfirmPassword]=useState("");
    const[errors, setErrors] = useState({});

    const validate = () => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email.trim()) {
            errors.email = "Email is required";
        } else if (!emailRegex.test(email)) {
            errors.email = "Email is invalid";
        }

        if(!name){
            errors.name = "Please Enter Your Name";
        }

        if (!newPassword) {
            errors.newPassword = "Password is required";
        } else if (newPassword.length < 6) {
            errors.newPassword = "Password must be at least 6 characters";
        }
        if(confirmPassword !== newPassword){
            errors.confirmPassword = "Password do not match";
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        console.log("register successfully",{email,newPassword});
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 w-96 flex flex-col gap-6">
                <h1 className="text-3xl font-bold text-center text-gray-800">Register</h1>
                <div className="flex flex-col gap-4">
                    <label htmlFor="name" className="text-gray-700 font-semibold">Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                </div>
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
                    <label htmlFor="newPassword" className="text-gray-700 font-semibold">New Password</label>
                    <input
                        type="password"
                        placeholder="Enter your new password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.newPassword && (
                        <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>
                    )}
                </div>
                <div className="flex flex-col gap-4">
                    <label htmlFor="confirmPassword" className="text-gray-700 font-semibold">Confirm Password</label>
                    <input
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.confirmPassword && (
                        <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                    )}
                </div>
                <button type="submit" className="bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition duration-300">
                    Register
                </button>
            </form>
        </div>
    )
}

export default Register
