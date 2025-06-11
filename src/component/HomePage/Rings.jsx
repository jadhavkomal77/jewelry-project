import React, { useState } from 'react'
import { AiFillGolden, AiTwotoneGold } from 'react-icons/ai';
import { BsSuitDiamond } from 'react-icons/bs';
import { GiFlatPlatform, GiGoldBar, GiKaleidoscopePearls, GiOysterPearl } from 'react-icons/gi';
import { IoDiamond } from 'react-icons/io5';

const Rings = () => {
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
                        <p>All Rings</p>
                        <p>Engagement</p>
                        <p>Dailywear</p>
                        <p>Infinity</p>
                        <p>Cocktail</p>
                        <p>Solitaire</p>
                        <p>Couple Rings</p>
                        <p>Bands</p>
                        <p>Pormise Rings</p>
                        <p>Silver By Shaya</p>
                    </div>
                    <div className='items-center'>
                        <p className='font-bold text-blue-400 text-xl'> By Metal & Stone</p>
                        <div className='flex gap-1 mt-2'>
                            <IoDiamond className='mt-1' />
                            <p >Diamond</p>
                        </div>
                        <div className='flex gap-1 mt-2'>
                            <GiKaleidoscopePearls className='mt-1' />
                            <p>Pearl</p>
                        </div>
                        <div className='flex gap-1 mt-2'>
                            <GiOysterPearl className='mt-1' />
                            <p>Navratan</p>
                        </div>
                        <div className='flex gap-1 mt-2'>
                            <BsSuitDiamond className='mt-1' />
                            <p>GameStone</p>
                        </div>
                        <div className='flex gap-1 mt-2'>
                            <GiFlatPlatform className='mt-1' />
                            <p>Platinum</p>
                        </div>
                        <div className='flex gap-1 mt-2'>
                            <GiGoldBar className='mt-1' />
                            <p>Gold</p>
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
                        <div className='flex gap-1 mt-2'>
                            <AiFillGolden className='mt-1' />
                            <p>22KT Gold</p>
                        </div>
                    </div>
                    <div className='text-center'>
                        <p className='font-bold text-blue-400 text-xl'>By Price</p>
                        <p>Under ₹ 10k</p>
                        <p>₹ 10 -₹ 20k</p>
                        <p>₹ 20 -₹ 30k</p>
                        <p>₹ 30 -₹ 50k</p>
                        <p>₹ 40 -₹ 50k</p>
                        <p>₹ 50 -₹ 75k</p>
                        <p>₹ 75 & Above</p>

                    </div>

                    <div className=' relative flex gap-4 mr-10'>
                        <div className="bg-white rounded-xl shadow-md overflow-hidden w-64">
                            <div className="relative w-full h-64 bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
                                <img
                                    src='https://cdn.caratlane.com/media/static/images/V4/2025/CL/02-FEB/Banner/New_Website/MenuBar/Desktop_01/MenuBar_Desktop_MB.jpg'
                                    alt=""
                                    className="object-cover w-full"
                                />
                            </div>
                            <div className="p-2 text-center">
                                <h3 className="text-gray-600 text-lg font-medium">Message Bands</h3>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-md overflow-hidden w-64">
                            <div className="relative w-full h-64 bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
                                <img
                                    src='https://cdn.caratlane.com/media/static/images/V4/2025/CL/02-FEB/Banner/New_Website/MenuBar/Desktop_01/MenuBar_Desktop_PC.jpg'
                                    alt=""
                                    className="object-cover w-full"
                                />
                            </div>
                            <div className="p-2 text-center">
                                <h3 className="text-gray-600 text-lg font-medium">Message Bands</h3>
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
                        <p className="text-gray-700 font-medium">For Kids</p>
                        <div className="h-6 border-l border-gray-400"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Rings

