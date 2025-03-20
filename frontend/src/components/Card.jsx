import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Card = ({ product }) => {
  return (
    
    <div className="border rounded-lg shadow-2xl">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
      <h2 className="text-xl font-bold mt-2 px-4">{product.name}</h2>
      <p className="text-gray-700 px-4">${product.price}</p>
      <div className="m-3 flex justify-between px-2">
        <button className="flex items-center text-blue-500 hover:underline">
          <FaEdit className="mr-1" /> Edit
        </button>
        <button  className="flex items-center text-red-500 hover:underline">
          <FaTrash className="mr-1" /> Delete
        </button>
      </div>
    </div>
  );
}

export default Card;