import React, { useState } from 'react';
import imgTecno from '../assets/logo technopartner.png';
import axios from 'axios';
import { useOutletContext, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');
    const { setToken } = useOutletContext(); 
    const navigate = useNavigate();

    const handleSubmit = async (e) => { 
        e.preventDefault(); 
        try { 
            const response = await axios.post('https://soal.staging.id/oauth/token', 
                { 
                    grant_type: 'password', 
                    client_secret: '0a40f69db4e5fd2f4ac65a090f31b823', 
                    client_id: 'e78869f77986684a', 
                    username: username, 
                    password: password 
                }); 
                setToken(response.data); 
                navigate('/');
            } catch (error) { 
                console.error('Login failed', error); 
            } 
        };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          <img
            src={imgTecno}
            alt="Technopartner Logo"
            className="w-32 h-auto mb-4"
          />
          <h1 className="text-xl font-bold text-gray-800">
            TECHNOPARTNER INDONESIA
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"
              required
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-red-300"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"
              required
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-red-300"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-white text-black border border-gray-300 rounded-md shadow hover:bg-gray-100 focus:outline-none focus:ring focus:ring-red-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
