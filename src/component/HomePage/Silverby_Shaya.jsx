import React, { useState } from 'react'
import { AiFillGolden, AiTwotoneGold } from 'react-icons/ai';
import { BsSuitDiamond } from 'react-icons/bs';
import { GiFlatPlatform, GiGoldBar, GiKaleidoscopePearls, GiOysterPearl } from 'react-icons/gi';
import { IoDiamond } from 'react-icons/io5';

const Silverby_Shaya = () => {
    return (
        <div>
            {/* Rings */}
            <div>
                <div className="flex  mt-2  bg-white text-black p-4 pl-15 gap-5 rounded shadow relative">

                    <div>
                        <p className='font-bold text-blue-400 text-xl'>By Style</p>
                        <p className='mt-1.5'> Earring</p>
                        <p className='mt-1.5'>Necklaces</p>
                        <p className='mt-1.5'>Bracelets</p>
                        <p className='mt-1.5'>Rings</p>
                        <p className='mt-1.5'>Coins & Articles</p>
                        <p className='mt-1.5'>More Styles</p>
                    </div>


                    <div className=' relative flex gap-4 '>
                        <div className="bg-white rounded-xl shadow-md overflow-hidden w-64">
                            <div className="relative w-full h-64 bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
                                <img
                                    src='https://cdn.caratlane.com/media/static/images/V4/2025/Shaya/03-March/CL/Menu/CL-Menu-03-01.jpg'
                                    alt=""
                                    className="object-cover w-full"
                                />
                            </div>
                            <div className="text-center p-1">
                                <h3 className="text-gray-600 text-sm font-medium">Mangalsutras Earrings</h3>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-md overflow-hidden w-64">
                            <div className="relative w-full h-64 bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
                                <img
                                    src='https://cdn.caratlane.com/media/static/images/V4/2025/Shaya/05-May/16/App/CL%20Menu.jpg'
                                    alt=""
                                    className="object-cover w-full"
                                />
                            </div>
                            <div className="text-center p-1">
                                <h3 className="text-gray-600 text-sm font-medium">Mangalsutras Earrings</h3>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md overflow-hidden w-64">
                            <div className="relative w-full h-64 bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
                                <img
                                    src='https://cdn.caratlane.com/media/static/images/V4/2025/Shaya/05-May/CL%20Menu/Anklets%20CL%20Menu.jpg'
                                    alt=""
                                    className="object-cover w-full"
                                />
                            </div>
                            <div className="p-2 text-center">
                                <h3 className="text-gray-600 text-sm font-medium">Trendy Mangalsutras</h3>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md overflow-hidden w-64">
                            <div className="relative w-full h-64 bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
                                <img
                                    src='https://cdn.caratlane.com/media/static/images/V4/2025/Shaya/03-March/CL/Menu/CL-Menu-04-01_.jpg'
                                    alt=""
                                    className="object-cover w-full"
                                />
                            </div>
                            <div className="p-2 text-center">
                                <h3 className="text-gray-600 text-sm font-medium">Trendy Mangalsutras</h3>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Silverby_Shaya

