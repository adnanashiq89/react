import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateUserAccount = () => {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        // Handle sign-up logic here, e.g., validation, API call, etc.
        console.log('Form data:', formData);
    };

    const handleSignIn = () => {
        navigate('/'); // Navigate to the Login page
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
            <div className="w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-5">Create User Account</h2>
                <form onSubmit={handleSignUp}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userName">
                            User Name
                        </label>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            placeholder="Your Name"
                            value={formData.userName}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:border-red-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="xyz@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:border-red-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:border-red-500"
                            />
                            <button
                                type="button"
                                onClick={toggleShowPassword}
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                            >
                                {showPassword ? '👁️' : '👁️‍🗨️'}
                            </button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:border-red-500"
                            />
                            <button
                                type="button"
                                onClick={toggleShowConfirmPassword}
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                            >
                                {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                            </button>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-red-500 text-white rounded-full text-lg mt-6"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="text-center mt-6">
                    <p className="text-gray-500">
                        Already have an account?{' '}
                        <button onClick={handleSignIn} className="text-red-500 font-bold">
                            Sign In
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CreateUserAccount;
