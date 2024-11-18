import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imgHome from '../assets/home2.png';
import imgMenu from '../assets/menu2.png';

const BottomNav = () => {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div className="w-full bg-white shadow fixed bottom-0 flex justify-around items-center py-2">
      <Link to="/" className="flex flex-col items-center text-gray-600 hover:text-gray-800" onClick={() => setActiveTab('home')}>
        <img src={imgHome} alt="home" className={`w-6 h-6 md:w-8 md:h-8 transition duration-300 ${activeTab === 'home' ? 'brightness-0' : ''}`} />
        <span className="text-sm">Home</span>
      </Link>
      <Link to="/menu" className="flex flex-col items-center text-gray-600 hover:text-gray-800" onClick={() => setActiveTab('menu')}>
        <img src={imgMenu} alt="menu" className={`w-6 h-6 md:w-8 md:h-8 transition duration-300 ${activeTab === 'menu' ? 'brightness-0' : ''}`} />
        <span className="text-sm">Menu</span>
      </Link>
    </div>
  );
};

export default BottomNav;
