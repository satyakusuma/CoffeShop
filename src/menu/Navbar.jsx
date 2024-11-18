
import React from 'react';

const Navbar = () => {
  return (
    <nav className="mt-2">
      <ul className="flex justify-center space-x-8">
        <li><a href="#seasonal-product" className="hover:underline">Seasonal Product</a></li>
        <li><a href="#best-seller" className="hover:underline">Best Seller</a></li>
        <li><a href="#coffee" className="hover:underline">Coffee</a></li>
        <li><a href="#cold-brew" className="hover:underline">Cold Brew</a></li>
        <li><a href="#chocolate" className="hover:underline">Chocolate</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
