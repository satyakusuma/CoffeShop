import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useOutletContext, useNavigate } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import SeasonalProduct from './SeasonalProduct';
import BestSeller from './BestSeller';
import Coffee from './Coffee';
import ColdBrew from './ColdBrew';
import Chocolate from './Chocolate';
import BottomNav from '../components/BottomNav';

const MenuPage = () => {
  const [menuData, setMenuData] = useState([]);
  const { token } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await axios.post(
          'https://soal.staging.id/api/menu',
          { show_all: 1 },
          {
            headers: {
              Authorization: `${token.token_type} ${token.access_token}`,
            },
          }
        );
        setMenuData(response.data.result.categories);
      } catch (error) {
        console.error('Failed to fetch menu data', error);
        navigate('/login');
      }
    };
    if (token) {
      fetchMenuData();
    } else {
      navigate('/login');
    }
  }, [token, navigate]);

  return (
    <div>
      <Header />
      <Navbar />
      <SeasonalProduct data={menuData} />
      <BestSeller data={menuData} />
      <Coffee data={menuData} />
      <ColdBrew data={menuData} />
      <Chocolate data={menuData} />
      <BottomNav />
    </div>
  );
};

export default MenuPage;
