import React from 'react';
import { IoChevronForward } from "react-icons/io5";

const SimilerProduct = () => {
    const products = [
        {
            label: '',
            image: 'https://cdn.caratlane.com/media/catalog/product/K/E/KE07319-2Y0000_6_lar.jpg',
            price: '₹9,817',
            oldPrice: '',
            name: 'Square Nodes Gemstone Open Ring',
        },
        {
            label: 'LATEST',
            image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10305-RGS3OO_11_listfront.jpg',
            price: '₹13,234',
            oldPrice: '',
            name: 'Maple Glimmer Gemstone Ring',
        },
        {
            label: 'LATEST',
            image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR07351-YGS300_11_listfront.jpg',
            price: '₹13,234',
            oldPrice: '',
            name: 'Maple Glimmer Gemstone Ring',
        },
    ];

    return (
        <div className="text-center my-6">
            {/* Title */}
            <p className="text-purple-800 text-xl font-semibold mb-4">Similer Product</p>

            <div className='p-6'>
                <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-300 pl-50">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl shadow p-4 text-center"
                        >
                            {product.label && (
                                <div className="bg-yellow-400 text-white text-xs font-bold px-2 ml-50 py-1 rounded-md inline-block mb-2">
                                    {product.label}
                                </div>
                            )}
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-contain mb-2"
                            />
                            <p className="text-purple-900 text-xs mr-60 font-semibold">{product.price}</p>
                            <p className="text-xs text-gray-400">{product.name}</p>
                            <div className='absolute mb-30  bottom-12'>
                                <p className=' mb-20 bg-blue-800 w-13 text-xs text-white rounded '>10% OFF</p>
                            </div>

                        </div>
                    ))}
                </div>
                <div>
                    <button className='text-xs text-purple-800 rounded-xl font-semibold border w-30 h-8 mt-7'>SHOW MORE</button>
                </div>
            </div>

            {/* Continue Browsing */}
            <div className="text-center mb-6">


                <div className='flex'>
                    <div className="flex items-center gap-3 bg-blue-100 px-4 py-3 rounded-xl w-fit mx-auto">
                        <h2 className="text-md font-semibold text-purple-800 mb-2">Rings</h2>
                        <div className="bg-white p-2 rounded-3xl w-16 h-15 flex items-center justify-center shadow-md">
                            <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/R/KR01960-2Y0000_12_listhover.jpg"
                                alt="ring1"
                                className=" "
                            />
                        </div>
                        <div className="bg-white p-2 rounded-3xl w-16 h-15 flex items-center justify-center shadow-md">
                            <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE09546-1YP9A0_11_listfront.jpg"
                                alt="ring2"
                                className=" "
                            />
                        </div>
                        <div className="bg-white p-2 rounded-3xl w-16 h-15 flex items-center justify-center shadow-md">
                            <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/U/R/UR00065-PT0000_11_listfront.jpg"
                                alt="ring3"
                                className=""
                            />
                        </div>
                        <div className="bg-white p-3 rounded-full shadow-md cursor-pointer hover:bg-purple-100 transition">
                            <IoChevronForward className="text-purple-800 text-xl" />
                        </div>
                    </div>


                    <div>
                        <div className=" items-center gap-3 bg-blue-100 px-4 py-3 rounded-xl w-fit mx-auto">
                            <h2 className="text-md font-semibold mr-30 text-purple-800 mb-2">Latest Earring Desings</h2>
                            <div className='flex gap-3'>

                                <div className="bg-white p-2 rounded-3xl w-16 h-15 flex items-center justify-center shadow-md">
                                    <img src="https://cdn.caratlane.com/media/catalog/product/K/E/KE07319-2Y0000_7_lar.jpg"
                                        alt="ring1"
                                        className=" "
                                    />
                                </div>
                                <div className="bg-white p-2 rounded-3xl w-16 h-15 flex items-center justify-center shadow-md">
                                    <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE09546-1YP9A0_11_listfront.jpg"
                                        alt="ring2"
                                        className=" "
                                    />
                                </div>
                                <div className="bg-white p-2 rounded-3xl w-16 h-15 flex items-center justify-center shadow-md">
                                    <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE10311-YGP9SE_11_listfront.jpg"
                                        alt="ring3"
                                        className=""
                                    />
                                </div>
                                <div className="bg-white p-3 rounded-full shadow-md cursor-pointer hover:bg-purple-100 transition">
                                    <IoChevronForward className="text-purple-800 text-xl" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" items-center gap-3 bg-blue-100 px-4 py-3 rounded-xl w-fit mx-auto">
                        <h2 className="text-md font-semibold mr-30 text-purple-800 mb-2">RunWay Jewellery</h2>
                        <div className='flex gap-3'>

                            <div className="bg-white p-2 rounded-3xl w-16 h-15 flex items-center justify-center shadow-md">
                                <img src="https://cdn.caratlane.com/media/catalog/product/K/E/KE07319-2Y0000_7_lar.jpg"
                                    alt="ring1"
                                    className=" "
                                />
                            </div>
                            <div className="bg-white p-2 rounded-3xl w-16 h-15 flex items-center justify-center shadow-md">
                                <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/R/KR01964-2Y0000_11_listfront.jpg"
                                    alt="ring2"
                                    className=" "
                                />
                            </div>
                            <div className="bg-white p-2 rounded-3xl w-16 h-15 flex items-center justify-center shadow-md">
                                <img src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/R/KR01971-2Y0000_11_listfront.jpg"
                                    alt="ring3"
                                    className=""
                                />
                            </div>
                            <div className="bg-white p-3 rounded-full shadow-md cursor-pointer hover:bg-purple-100 transition">
                                <IoChevronForward className="text-purple-800 text-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SimilerProduct;
