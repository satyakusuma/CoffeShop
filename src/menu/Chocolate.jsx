import React from 'react';
import imgCarBelCho from '../assets/CaramelBelgianChoco.jpg'; // Default image if none is provided

const Chocolate = ({ data }) => {
  const chocolateProducts = data.find(category => category.category_name === 'Chocolate');
  if (!chocolateProducts) return null;

  return (
    <section id='chocolate' className="section__container px-4 pt-2 pb-4 lg:pt-3 lg:pb-6">
      <h2 className="text-xl font-semibold mb-2 lg:mb-4">Chocolate</h2>
      <div className="space-y-6 lg:space-y-8 lg:grid lg:grid-cols-1">
        {chocolateProducts.menu.map((product, index) => (
          <div key={index} className="flex items-start border-b pb-4 lg:pb-6 lg:border-none">
            <img
              src={product.photo || imgCarBelCho} // Default to imgCarBelCho if photo is not provided
              alt={product.name}
              className="w-16 h-16 object-cover rounded-lg mr-4"
            />
            <div className="flex-1 flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
              </div>
              <p className="text-lg font-bold text-gray-800 ml-4">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Chocolate;
