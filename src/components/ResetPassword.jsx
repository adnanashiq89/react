import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSendEmail = (e) => {
        e.preventDefault();
        // Add logic to send a reset password email
        console.log('Reset email sent to:', email);
    };

    const handleCancel = () => {
        navigate('/'); // Navigate back to the Login page
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
            <div className="w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-5">Reset Password</h2>
                <form onSubmit={handleSendEmail}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                           <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="businessName">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="xyz@gmail.com"
                            value={email}
                            onChange={handleEmailChange}
                            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:border-red-500"
                        />
                    </div>
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-red-500 text-white rounded-full text-lg mt-6"
                    >
                        Send email
                    </button>
                </form>
                <button
                    onClick={handleCancel}
                    className="w-full py-3 border border-gray-300 rounded-full text-lg mt-6"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default ResetPassword;
