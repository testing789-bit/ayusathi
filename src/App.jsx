import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AyuSathi from './pages/Community';
import Doctors from './pages/Doctors';
import HealthTips from './pages/HealthTips';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import AskQuestion from './pages/AskQuestion';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-healthcare-gray flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ayusathi" element={<AyuSathi />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/health-tips" element={<HealthTips />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/ask-question" element={<AskQuestion />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
