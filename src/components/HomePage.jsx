import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-gray-100 min-h-screen p-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                    <span className="text-gray-500">Current Location</span>
                    <button className="text-black font-semibold">
                        New York, USA
                    </button>
                </div>
                <button className="p-2 rounded-full bg-green-500 text-white">
                    🛎️
                </button>
            </div>

            {/* Search Bar */}
            <div className="flex items-center bg-white p-3 rounded-full shadow-sm mb-4">
                <input
                    type="text"
                    placeholder="Search Events"
                    className="flex-grow pl-3 focus:outline-none"
                />
                <button className="text-gray-500">
                    🔍
                </button>
            </div>

            {/* Upcoming Events */}
            <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg font-semibold">Upcoming Events</h2>
                    <button className="text-red-500 font-bold">See All</button>
                </div>
                <div className="flex space-x-4 overflow-x-scroll">
                    {/* Event Card 1 */}
                    <div className="bg-white p-4 rounded-lg shadow-md w-64">
                        <div className="relative">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Event"
                                className="rounded-lg"
                            />
                            <div className="absolute top-2 left-2 bg-red-500 text-white p-1 rounded-full">
                                <span>10 Feb</span>
                            </div>
                            <button className="absolute top-2 right-2 bg-white p-1 rounded-full text-red-500">
                                ❤️
                            </button>
                        </div>
                        <h3 className="mt-4 font-semibold">JAMES COATES AT...</h3>
                        <p className="text-gray-500 text-sm">36 Guild Street London, UK</p>
                        <div className="flex items-center mt-2">
                            <img
                                src="https://via.placeholder.com/24"
                                alt="User"
                                className="rounded-full"
                            />
                            <span className="ml-2 text-gray-500">+20 Interested</span>
                        </div>
                    </div>

                    {/* Repeat Event Card as needed */}
                </div>
            </div>

            {/* Advertisement */}
            <div className="bg-black text-white p-4 rounded-lg shadow-md mb-4">
                <p>Nice job! You're Displaying a 320x50 test ad</p>
                <p className="text-xs text-gray-400">Ad by events app</p>
            </div>

            {/* Today's Events */}
            <div>
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg font-semibold">Today Events</h2>
                    <button className="text-red-500 font-bold">See All</button>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="relative">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Event"
                            className="rounded-lg"
                        />
                        <div className="absolute top-2 left-2 bg-red-500 text-white p-1 rounded-full">
                            <span>17 Mar</span>
                        </div>
                    </div>
                    <h3 className="mt-4 font-semibold">Tycoon Music Festival Feat Chris Brown</h3>
                    <p className="text-gray-500 text-sm">36 Guild Street London, UK</p>
                    <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center">
                            <img
                                src="https://via.placeholder.com/24"
                                alt="User"
                                className="rounded-full"
                            />
                            <span className="ml-2 text-gray-500">+20 Interested</span>
                        </div>
                        <div className="flex space-x-2 text-gray-500">
                            <button>🔗</button>
                            <button>❤️</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 right-0 bg-white p-3 flex justify-around shadow-lg">
                <button className="text-red-500">🏠</button>
                <button>📅</button>
                <button className="bg-red-500 p-2 rounded-full text-white">🔍</button>
                <button>📧</button>
                <button>👤</button>
            </div>
        </div>
    );
};

export default HomePage;
