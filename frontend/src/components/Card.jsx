import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';

const Card = ({ product, onDelete }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/products/${product._id}`);
      onDelete(product._id); // Call the onDelete function passed from the parent component
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="border rounded-lg shadow-2xl bg-bl">
      {product.image ? (
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-t-lg">
          <span>No Image Available</span>
        </div>
      )}
      <h2 className="text-xl font-bold mt-2 px-4 dark:text-white">{product.name}</h2>
      <p className="text-gray-700 px-4">${product.price}</p>
      <div className="m-3 flex justify-between px-2">
        <button className="flex items-center text-blue-500 hover:underline">
          <FaEdit className="mr-1" /> Edit
        </button>
        <button className="flex items-center text-red-500 hover:underline" 
          onClick={handleDelete}>
          <FaTrash className="mr-1" /> Delete
        </button>
      </div>
    </div>
  );
}

export default Card;