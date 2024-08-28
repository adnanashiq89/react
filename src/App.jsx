import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SelectUserType from './components/SelectUserType';
import CreateUserAccount from './components/CreateUserAccount';
import BusinessAccount from './components/BusinessAccount';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';
import HomePage from './components/HomePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/select-user-type" element={<SelectUserType />} />
                <Route path="/create-account" element={<CreateUserAccount />} />
                <Route path="/create-businessaccount" element={<BusinessAccount />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
