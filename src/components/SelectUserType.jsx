import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SelectUserType = () => {
    const [selectedType, setSelectedType] = useState(null);
    const navigate = useNavigate();

    const handleSelection = (type) => {
        setSelectedType(type);
        if (type === 'User') {
            navigate('/create-account'); // Navigate to the CreateUserAccount page
        }
        if (type === 'Business') {
            navigate('/create-account'); // Navigate to the CreateUserAccount page
        }
        // You can add navigation for 'Business' if needed
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h2 className="text-2xl font-bold mb-5">Select User Type</h2>
            <div className="flex justify-center gap-5 mb-8">
                <button
                    className={`flex flex-col items-center justify-center p-5 border-2 rounded-lg w-28 h-28 ${selectedType === 'User' ? 'border-red-500' : 'border-gray-300'} transition-all duration-300`}
                    onClick={() => handleSelection('User')}
                >
                    <div className="text-4xl mb-2">👤</div>
                    <span className="text-lg">User</span>
                </button>
                <button
                    className={`flex flex-col items-center justify-center p-5 border-2 rounded-lg w-28 h-28 ${selectedType === 'Business' ? 'border-red-500' : 'border-gray-300'} transition-all duration-300`}
                    onClick={() => handleSelection('Business')}
                >
                    <div className="text-4xl mb-2">💼</div>
                    <span className="text-lg">Business</span>
                </button>
            </div>
            <button className="py-3 px-16 bg-red-500 text-white rounded-full text-lg">
                Next
            </button>
        </div>
    );
};

export default SelectUserType;
