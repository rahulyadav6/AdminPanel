import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';


const Card = ({ product, onDelete }) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const handleDeleteConfirm = async () => {
      onDelete(product._id);
      setShowDeleteConfirm(false);
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
          onClick={() => setShowDeleteConfirm(true)}
          >
          <FaTrash className="mr-1" /> Delete
        </button>
      </div>

      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-md">
            <h3 className="text-lg font-medium mb-4 dark:text-white">Confirm Delete</h3>
            <p className="dark:text-gray-300">Are you sure you want to delete {product.name}?</p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 dark:text-white"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;