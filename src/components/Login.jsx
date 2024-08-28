import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleForgetPassword = () => {
        navigate('/reset-password'); // Navigate to the ResetPassword component
    };


    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Form data:', formData);
    };

    const handleSignUp = () => {
        navigate('/select-user-type')// Navigate to the SignUp page
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
            <div className="w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-5">Login</h2>
                <form onSubmit={handleLogin}>
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
                                onClick={handleTogglePassword}
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                            >
                                {showPassword ? '👁️' : '👁️‍🗨️'}
                            </button>
                          
                        </div>
                        <div className="text-right">
                            <button type="button" onClick={handleForgetPassword}  className="text-sm text-gray-500">
                                Forget Password
                            </button>
                        </div>
                    </div>
                    
                   
                    
                    <button
                        type="submit"
                        className="w-full py-3 bg-red-500 text-white rounded-full text-lg mt-6"
                    >
                        Login
                    </button>
                </form>
                <div className="text-center mt-6">
                    <p className="text-gray-500">
                        Don’t have an account?{' '}
                        <button onClick={handleSignUp} className="text-red-500 font-bold">
                            Sign up!
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;