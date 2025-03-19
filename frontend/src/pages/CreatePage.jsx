import React, { useState } from 'react'

const CreatePage = () => {
    const [formData, setFormData] = useState({
        productName: "",
        price: "",
        imageUrl: ""
    })
  return (
    <section className='min-h-screen w-full dark:bg-slate-700 bg-white </section>'>
        <main className='max-w-7xl mx-auto px-4 py-28'>
            <div className='mt-10 sm:mt-0'>
                <h1 className='sm:text-5xl text-xl font-bold dark:text-white text-center'>Create New Product</h1>
            </div>
            <div className='max-w-2xl bg-slate-100 dark:bg-slate-600 min-h-56 mx-auto mt-10 p-5 shadow-2xl'>
                <form>
                    <div className='space-y-5'>
                        {/* product name */}
                        <div className='space-y-3'>
                            <label
                                htmlFor='productName'
                                className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                            >
                                Product Name
                            </label>
                            <input
                                id='productName'
                                name='productName'
                                type='text'
                                required
                                className='appearance-none h-10 relative block w-full px-3 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400  dark:bg-gray-700'
                                placeholder='Product Name'
                                value={formData.productName}
                            />
                        </div>
                        {/* Price */}
                        <div>
                            <label
                                htmlFor='rice'
                                className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                            >
                                Price
                            </label>
                            <input
                                id='price'
                                name='price'
                                type='text'
                                required
                                className='appearance-none h-10 relative block w-full px-3 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400  dark:bg-gray-700'
                                placeholder='Price'
                                value={formData.price}
                            />
                        </div>
                        {/* image url */}
                        <div>
                            <label
                                htmlFor='image Url'
                                className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1'
                            >
                                imageUrl
                            </label>
                            <input
                                id='imageUrl'
                                name='imageUrl'
                                type='text'
                                required
                                className='appearance-none h-10 relative block w-full px-3 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400  dark:bg-gray-700'
                                placeholder='imageUrl'
                                value={formData.productName}
                            />
                        </div>
                        {/* button */}
                        <div className='w-full flex justify-center items-center '>
                            <button
                                type='submit'
                                className='w-1/3 flex justify-center py-3 px-4 mt-1 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-green-600 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all duration-150 hover:scale-[1.02]'
                            >Add Product</button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    </section>
  )
}

export default CreatePage