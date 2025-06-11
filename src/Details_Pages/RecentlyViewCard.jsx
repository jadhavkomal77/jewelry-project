import React from 'react'
import { FaSearchLocation } from 'react-icons/fa';
import { IoChevronForward } from 'react-icons/io5';

const RecentlyViewCard = () => {

    const products = [
        {
            label: '',
            image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D',
            price: '₹9,817',
            oldPrice: '',
            name: 'Square Nodes Gemstone Open Ring',
        },
        {
            label: 'LATEST',
            image: 'https://cdn.caratlane.com/media/catalog/product/J/R/JR07849-1YS300_3_lar.jpg',
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
        {
            label: 'LATEST',
            image: 'https://cdn.caratlane.com/media/catalog/product/K/E/KE07319-2Y0000_3_lar.jpg',
            price: '₹13,234',
            oldPrice: '',
            name: 'Maple Glimmer Gemstone Ring',
        },
        {
            label: 'LATEST',
            image: 'https://cdn.caratlane.com/media/catalog/product/K/E/KE07319-2Y0000_6_lar.jpg',
            price: '₹13,234',
            oldPrice: '',
            name: 'Maple Glimmer Gemstone Ring',
        },
        {
            label: 'LATEST',
            image: 'https://cdn.caratlane.com/media/catalog/product/K/E/KE07319-2Y0000_7_lar.jpg',
            price: '₹13,234',
            oldPrice: '',
            name: 'Maple Glimmer Gemstone Ring',
        },
        {
            label: 'LATEST',
            image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE11177-1YS300_11_listfront.jpg',
            price: '₹13,234',
            oldPrice: '',
            name: 'Maple Glimmer Gemstone Ring',
        },
        {
            label: 'LATEST',
            image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/E/KE07319-2Y0000_11_listfront.jpg',
            price: '₹13,234',
            oldPrice: '',
            name: 'Maple Glimmer Gemstone Ring',
        },
        {
            label: 'LATEST',
            image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE10311-YGP9SE_11_listfront.jpg',
            price: '₹13,234',
            oldPrice: '',
            name: 'Maple Glimmer Gemstone Ring',
        },
        {
            label: '',
            image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE09546-1YP9A0_11_listfront.jpg',
            price: '₹9,817',
            oldPrice: '',
            name: 'Square Nodes Gemstone Open Ring',
        },
        {
            label: 'LATEST',
            image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE09546-1YP9A0_11_listfront.jpg',
            price: '₹13,234',
            oldPrice: '',
            name: 'Maple Glimmer Gemstone Ring',
        },
        {
            label: 'LATEST',
            image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE11178-1YS3A0_11_listfront.jpg',
            price: '₹13,234',
            oldPrice: '',
            name: 'Maple Glimmer Gemstone Ring',
        },
        {
            label: 'LATEST',
            image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE11129-1YS3RS_11_listfront.jpg',
            price: '₹13,234',
            oldPrice: '',
            name: 'Maple Glimmer Gemstone Ring',
        },
        {
            label: 'LATEST',
            image: 'https://cdn.caratlane.com/media/catalog/product/K/E/KE07319-2Y0000_7_lar.jpg',
            price: '₹13,234',
            oldPrice: '',
            name: 'Maple Glimmer Gemstone Ring',
        },
        {
            label: 'LATEST',
            image: 'https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE11177-1YS300_11_listfront.jpg',
            price: '₹13,234',
            oldPrice: '',
            name: 'Maple Glimmer Gemstone Ring',
        },


    ];
    return (
        <div>
            <div className='bg-gray-100 m-7 rounded-xl'>
                <p className='text-black text-2xl pt-3 text-center font-semibold'>
                    Recently Viewed
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

            {/*  MAP */}
            <div>
                <div className="bg-white px-6 py-10">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
                        <div className="w-120">
                            <img
                                src="https://assets.cltstatic.com/images/responsive/map.jpg"
                                alt="Map"
                                className="rounded-lg w-full"
                            />
                        </div>

                        {/* FIND STORE*/}
                        <div className="w-full lg:w-[40%] text-center">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Find in Store near you!</h2>
                            <p className="text-sm text-gray-500 mb-5">
                                Have to see it to believe it? Check here if the design is available in the store or not. You can also book an appointment
                            </p>

                            {/* Input & Button */}
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <div className="relative w-full max-w-sm">
                                    <FaSearchLocation className="absolute top-3 left-3 text-purple-500" />
                                    <input
                                        type="text"
                                        placeholder="STORE PINCODE"
                                        className="pl-10 py-2 px-4 border border-purple-400 rounded-md w-full focus:outline-none"
                                    />
                                </div>
                            </div>
                            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-md font-semibold">
                                VIEW STORES & DESIGNS
                            </button>
                        </div>
                    </div>


                    {/* CARD */}
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-14">
                        <div className="bg-purple-100 text-center p-6 rounded-xl w-full md:w-[40%]">
                            <p className="font-semibold text-lg text-purple-800">Download the CaratLane App</p>
                            <p className="text-sm text-gray-600 mt-2">Shop & Save more on app by redeeming xCLusive points</p>
                            <button className="mt-4 bg-purple-500 text-white font-semibold px-6 py-2 rounded-full">Download</button>
                            <p className="text-xs mt-2 text-gray-500">Available on IOS & Android</p>
                        </div>


                        <div className="bg-green-100 text-center p-6 rounded-xl w-full md:w-[40%]">
                            <p className="font-semibold text-lg text-green-800">Complete Profile & Earn ₹250</p>
                            <p className="text-sm text-gray-600 mt-2">You can now redeem xCLusive points on all your orders.</p>
                            <button className="mt-4 bg-green-500 text-white font-semibold px-6 py-2 rounded-full">Complete</button>
                            <p className="text-xs mt-2 text-gray-500">Terms & Conditions apply</p>
                        </div>
                    </div>

                    {/*  */}
                    <div className='flex gap-10 ml-25 pt-5'>

                        <div className="text-center mb-6">
                            <h2 className="text-md font-semibold text-purple-800 mb-2">More 18K Rings</h2>

                            <div className="flex items-center gap-3 bg-blue-100 px-4 py-3 rounded-xl w-fit mx-auto">
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

                        {/* More 18K RINGS */}
                        <div className="text-center mb-6">
                            <h2 className="text-md font-semibold text-purple-800 mb-2">More 18K Rings</h2>

                            <div className="flex items-center gap-3 bg-blue-100 px-4 py-3 rounded-xl w-fit mx-auto">
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

                    {/* Form */}
                    <div className='mx-5 '>
                        <div className="w-full p-15 rounded-xl bg-gradient-to-b from-black to-purple-700 text-white flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex items-center gap-4 pl-30">
                                <img
                                    src="https://assets.cltstatic.com/images/responsive/purple-gift-icon.png"
                                    alt="Gift"
                                    className="w-16 h-16"
                                />
                                <div className=''>
                                    <h2 className="text-xl md:text-2xl font-bold">Join CaratLane Insider</h2>
                                    <p className="text-sm md:text-base">
                                        To discover enticing deals, latest arrivals, & more
                                    </p>
                                </div>
                            </div>


                            <form className="flex flex-col items-center gap-4 w-full max-w-lg left-24 pr-30">
                                <input
                                    type="email"
                                    placeholder="Enter Email"
                                    className="w-full px-4 py-2 rounded-xl text-black bg-white focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-xl"
                                >
                                    submit
                                </button>
                                <div className="flex gap-6 text-sm">
                                    <label className="flex items-center gap-1">
                                        <input type="radio" name="gender" value="female" className="accent-pink-500" />
                                        Female
                                    </label>
                                    <label className="flex items-center gap-1">
                                        <input type="radio" name="gender" value="male" className="accent-pink-500" />
                                        Male
                                    </label>
                                    <label className="flex items-center gap-1">
                                        <input type="radio" name="gender" value="other" className="accent-pink-500" />
                                        Other
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RecentlyViewCard
