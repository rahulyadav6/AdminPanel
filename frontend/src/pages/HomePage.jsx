import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        const products = response.data.data;
        setProducts(products); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleProductDelete = async (productId) => {
    try {
      await axios.delete(`/api/products/${productId}`);
      setProducts( products.filter((product) =>(
        product._id !== productId
      )));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };


  const handleEditProduct = async (productId) =>{
    navigate(`/create/${productId}`);
  }
  
  return (
    <section className='min-h-screen dark:bg-slate-700'>
        <main className='sm:mx-auto px-14 py-36 space-y-10'>
            <div>
              <h2 className='sm:text-5xl text-xl font-bold dark:text-white text-center'>Current Products</h2>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6  2xl:grid-cols-5'>
              {products ?
                products.map((product) => (
                  <Card 
                    key={product._id} 
                    product={product} 
                    onDelete={handleProductDelete}
                    onEdit={handleEditProduct}
                    />
                ))
                :
                <div>
                  <h1>No available products</h1>
                  <Link to={"/create"}>
                      Add Product here
                  </Link>
                </div>
              }
            </div>
        </main>
    </section>
  )
}

export default HomePage