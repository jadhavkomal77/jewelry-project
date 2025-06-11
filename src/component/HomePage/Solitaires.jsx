import React, { useState } from 'react'
import { AiFillGolden, AiTwotoneGold } from 'react-icons/ai';
import { BsSuitDiamond } from 'react-icons/bs';
import { GiFlatPlatform, GiGoldBar, GiKaleidoscopePearls, GiOysterPearl } from 'react-icons/gi';
import { IoDiamond } from 'react-icons/io5';

const Solitaires = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            {/* Rings */}
            <div>
                <div className="flex justify-between mt-2 bg-white text-black p-6 rounded shadow relative">
                    <div>
                        <p className='font-bold text-blue-400 text-xl'>Feactured</p>
                        <p>Latest Design</p>
                        <p>Bestsellers</p>
                        <p>Fast Delivery</p>
                        <p>Special Deals</p>
                    </div>
                    <div>
                        <p className='font-bold text-blue-400 text-xl'>By Style</p>
                        <p>All Solitaires</p>
                        <p>Rings</p>
                        <p>Earrings</p>
                        <p>Bridal Sets</p>
                        <p>Mangalsutras</p>
                        <p>Pendants</p>
                        <p> Necklaces</p>
                        <p>Bracelets</p>

                    </div>
                    <div className='items-center'>
                        <p className='font-bold text-blue-400 text-xl'> By Metal & Stone</p>
                        <div className='flex gap-1 mt-2'>
                            <IoDiamond className='mt-1' />
                            <p >Diamond</p>
                        </div>
                        <div className='flex gap-1 mt-2'>
                            <GiFlatPlatform className='mt-1' />
                            <p>Platinum</p>
                        </div>

                        <div className='flex gap-1 mt-2'>
                            <AiTwotoneGold className='mt-1' />
                            <p>Rose Gold</p>
                        </div>
                        <div className='flex gap-1 mt-2'>
                            <AiFillGolden className='mt-1' />
                            <p>Yellow Gold</p>
                        </div>
                        <div className='flex gap-1 mt-2'>
                            <AiFillGolden className='mt-1' />
                            <p>White Gold</p>
                        </div>

                    </div>
                    <div className='text-center'>
                        <p className='font-bold text-blue-400 text-xl'>By Price</p>
                        <p>₹ 30k to ₹ 50k</p>
                        <p>₹ 50k to ₹ 75k</p>
                        <p>₹ 75k to ₹ 1L</p>
                        <p>₹ 1L to ₹ 1.5L</p>
                        <p>₹ 1.5 to to ₹ 2L</p>

                    </div>

                    <div className=' relative flex gap-4 mr-10'>
                        <div className="bg-white rounded-xl shadow-md overflow-hidden w-64">
                            <div className="relative w-full h-64 bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
                                <img
                                    src='https://cdn.caratlane.com/media/static/images/V4/2025/CL/02-FEB/Banner/New_Website/MenuBar/Desktop_01/MenuBar_Desktop_Engage.jpg'
                                    alt=""
                                    className="object-cover w-full"
                                />
                            </div>
                            <div className="p-2 text-center">
                                <h3 className="text-gray-600 text-lg font-medium">Engagement</h3>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-md overflow-hidden w-64">
                            <div className="relative w-full h-64 bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
                                <img
                                    src='https://cdn.caratlane.com/media/static/images/V4/2025/CL/05_MAY/others/Hamburger/01/Gulnaara_d.jpg'
                                    alt=""
                                    className="object-cover w-full"
                                />
                            </div>
                            <div className="p-2 text-center">
                                <h3 className="text-gray-600 text-lg font-medium">Gulnara</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Paraph */}
                <div className="mt-7 px-6">
                    <div className="flex gap-10 items-center">
                        <p className="text-gray-700 font-medium">For Women</p>
                        <div className="h-6 border-l border-gray-400"></div>
                        <p className="text-gray-700 font-medium">For Men</p>
                        <div className="h-6 border-l border-gray-400"></div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Solitaires

