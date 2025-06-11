import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";

const RateUs = () => {

    const products = [
        {
            label: '',
            image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10305-RGS3OO_11_listfront.jpg',
            price: '₹9,817',
            oldPrice: '',
            name: 'Square Nodes Gemstone Open Ring',
        },
        {
            label: 'LATEST',
            image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/R/UR00888-YG0000_11_listfront.jpg',
            price: '₹13,234',
            oldPrice: '',
            name: 'Maple Glimmer Gemstone Ring',
        },
        {
            label: 'LATEST',
            image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/R/UR00888-YG0000_11_listfront.jpg',
            price: '₹13,234',
            oldPrice: '',
            name: 'Maple Glimmer Gemstone Ring',
        },
        {
            label: 'LATEST',
            image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg',
            price: '₹13,234',
            oldPrice: '',
            name: 'Maple Glimmer Gemstone Ring',
        },
        {
            label: 'LATEST',
            image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/R/KR01960-2Y0000_11_listfront.jpg',
            price: '₹13,234',
            oldPrice: '',
            name: 'Maple Glimmer Gemstone Ring',
        },
        {
            label: 'LATEST',
            image: 'https://cdn.caratlane.com/media/catalog/product/K/R/KR01957-2Y0000_1_lar.jpg',
            price: '₹13,234',
            oldPrice: '',
            name: 'Maple Glimmer Gemstone Ring',
        },
        {
            label: 'LATEST',
            image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10056-1YS300_11_listfront.jpg',
            price: '₹13,234',
            oldPrice: '',
            name: 'Maple Glimmer Gemstone Ring',
        },
        {
            label: 'LATEST',
            image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10056-1YS300_11_listfront.jpg',
            price: '₹13,234',
            oldPrice: '',
            name: 'Maple Glimmer Gemstone Ring',
        },
        {
            label: 'LATEST',
            image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/R/KR01960-2Y0000_11_listfront.jpg',
            price: '₹13,234',
            oldPrice: '',
            name: 'Maple Glimmer Gemstone Ring',
        },
        {
            label: '',
            image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10305-RGS3OO_11_listfront.jpg',
            price: '₹9,817',
            oldPrice: '',
            name: 'Square Nodes Gemstone Open Ring',
        },
        {
            label: 'LATEST',
            image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/R/UR00888-YG0000_11_listfront.jpg',
            price: '₹13,234',
            oldPrice: '',
            name: 'Maple Glimmer Gemstone Ring',
        },
        {
            label: 'LATEST',
            image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/R/UR00888-YG0000_11_listfront.jpg',
            price: '₹13,234',
            oldPrice: '',
            name: 'Maple Glimmer Gemstone Ring',
        },

    ];
    return (
        <div>
            <div className='flex pl-50'>
                <CiStar size={30} />
                <CiStar size={30} />
                <CiStar size={30} />
                <CiStar size={30} />
                <CiStar size={30} />
                <p className=' ml-4 text-purple-900 text-xl'>Rate Us</p>
                <div className='text-end ml-200'>
                    <button className='text-center mr-30 pb-10 text-lg bg-gradient-to-l bg-blue-500 from-purple-600 h-10 w-40 rounded'>WRITE A REVIEW</button>
                </div>
            </div>
            <div className=' flex justify-between pl-50 pt-3'>
                <p className='text-sm ml-5 text-purple-900'> We'd Love to Hear from You!</p>
            </div>

            {/* card.... */}
            <div className='bg-gray-100 m-7 rounded-xl'>
                <p className='text-black text-2xl pt-3 text-center font-semibold'>
                    Product You May Like
                </p>

                <div className='p-6'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-300 pl-50">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow p-4 text-center"
                            >
                                {product.label && (
                                    <div className="bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-md inline-block mb-2">
                                        {product.label}
                                    </div>
                                )}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-contain mb-2"
                                />
                                <p className="text-pink-600 text-lg mr-60 font-semibold">{product.price}</p>
                                <p className="font-xs text-gray-900">{product.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div >

    )
}

export default RateUs
