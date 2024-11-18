import React, { useState, useEffect } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import axios from 'axios';
import backImg from '../assets/motif.png';
import img from '../assets/logo technopartner.png';

const Content = () => {
  const { token } = useOutletContext();
  const [homeData, setHomeData] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://soal.staging.id/api/home', {
          headers: {
            Authorization: `${token.token_type} ${token.access_token}`,
          },
        });
        console.log('API response:', response.data.result.qrcode); 
        setHomeData(response.data.result);
      } catch (error) {
        console.error('Failed to fetch home data', error);
        navigate('/login');
      }
    };
    if (token) {
      fetchData();
    } else {
      navigate('/login');
    }
  }, [token, navigate]);

  if (!homeData) {
    return <div>Loading...</div>;
  }

  const handleQRCodeClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="bg-white shadow-lg rounded-lg p-4 w-11/12 md:w-2/3 mt-4">
        <p className="text-lg font-semibold text-gray-600">{homeData.greeting},</p>
        <h2 className="text-2xl font-bold text-gray-800">{homeData.name}</h2>
        <div className="flex items-center justify-between mt-4">
          <img
            src={homeData.qrcode}
            alt="QR Code"
            className="w-12 h-12 object-cover rounded-full cursor-pointer"
            onClick={handleQRCodeClick} 
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = 'https://via.placeholder.com/150'; 
            }}
          />
          <div className="flex flex-col ml-4">
            <div className="flex justify-between">
              <p className="text-sm text-gray-600 mr-4">Saldo</p>
              <p className="text-lg font-bold text-gray-800">{homeData.saldo}</p>
            </div>
            <div className="flex justify-between mt-2">
              <p className="text-sm text-gray-600 mr-4">Points</p>
              <p className="text-lg font-bold text-green-600">{homeData.point}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`bg-black w-11/12 md:w-2/3 mt-6 rounded-lg bg-[url(${backImg})] bg-cover bg-center`}>
        <img
          src={img}
          alt="Technopartner Banner"
          className="w-full rounded-lg brightness-0 invert"
        />
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4">
            <img
              src={homeData.qrcode}
              alt="QR Code"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = 'https://via.placeholder.com/150'; 
              }}
            />
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
