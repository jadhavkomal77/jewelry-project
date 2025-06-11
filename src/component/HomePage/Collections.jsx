import React, { useState } from 'react'
import { AiFillGolden, AiTwotoneGold } from 'react-icons/ai';
import { BsSuitDiamond } from 'react-icons/bs';
import { GiFlatPlatform, GiGoldBar, GiKaleidoscopePearls, GiOysterPearl } from 'react-icons/gi';
import { IoDiamond } from 'react-icons/io5';

const Collections = () => {
    return (
        <div>
            {/* Rings */}
            <div>
                <p className='font-bold text-blue-400 ml-10 mt-5 text-xl'>CaratLane Collections</p>
                <div className="flex justify-between mt-2 bg-white text-black p-6 rounded shadow relative">

                    <div className='pl-12'>
                        <div className='flex' >
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/utsav.png" width={50} alt="" />
                            <p className='p-2'>Utsav</p>
                        </div>
                        <div className='flex'>
                            <img src=" https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/Butterfly.png" width={50} alt="" />
                            <p className='p-2'>Butterfly</p>
                        </div>
                        <div className='flex'>
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/Lotus.png" width={50} alt="" />
                            <p className='p-2'>Lotus</p>
                        </div>
                        <div className='flex'>
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/Disney.png" width={50} alt="" />
                            <p className='p-2'>Disney</p>
                        </div>
                        <div className='flex'>
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/harmony.png" width={50} alt="" />
                            <p className='p-2'>Harmony</p>
                        </div>
                        <div className='flex'>
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/ballet.png" width={50} alt="" />
                            <p className='p-2'>Ballet</p>
                        </div>

                    </div>


                    <div className='items-center'>
                        <div className='flex'>
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/Alpona.png" width={50} alt="" />
                            <p className='p-2'>Alpona</p>
                        </div>
                        <div className='flex'>
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/Ombre.png" width={50} alt="" />
                            <p className='p-2'>Ombre</p>
                        </div>
                        <div className='flex'>
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/Sholapith.png" width={50} alt="" />
                            <p className='p-2'> Sholapith</p>
                        </div>
                        <div className='flex'>
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/mogra.png" width={50} alt="" />
                            <p className='p-2'>Mogra</p>
                        </div>
                        <div className='flex'>
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/kanak.png" width={50} alt="" />
                            <p className='p-2'>Kanak</p>
                        </div>
                        <div className='flex'>
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/mandala.png" width={50} alt="" />
                            <p className='p-2'>Mandala</p>
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className='flex'>
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/Adaa.png" width={50} alt="" />
                            <p className='p-2'>Adaa</p>
                        </div>
                        <div className='flex'>
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/Aaranya.png" width={50} alt="" />
                            <p className='p-2'>Aaranya</p>
                        </div>
                        <div className='flex'>
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/HarryPotter.png" width={50} alt="" />
                            <p className='p-2'>Harry Potter</p>
                        </div>
                        <div className='flex'>
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/blaze.png" width={50} alt="" />
                            <p className='p-2'>Blaze</p>
                        </div>
                        <div className='flex'>
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/dunes.png" width={50} alt="" />
                            <p className='p-2'>Tango</p>
                        </div>
                        <div className='flex'>
                            <img src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/hamburger/01/collections/desktop_1/dunes.png" width={50} alt="" />
                            <p className='p-2'>Dunes</p>
                        </div>

                    </div>

                    <div className=' relative flex gap-4 mr-10'>
                        <div className="bg-white rounded-xl shadow-md overflow-hidden w-64">
                            <div className="relative w-full h-64 bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
                                <img
                                    src='https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/others/hamburger/01/Sol_d.png'
                                    alt=""
                                    className="object-cover w-full"
                                />
                            </div>
                            <div className="text-center p-1">
                                <h3 className="text-gray-600 text-sm font-medium">Sol</h3>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md overflow-hidden w-64">
                            <div className="relative w-full h-64 bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center">
                                <img
                                    src='https://cdn.caratlane.com/media/static/images/V4/2025/CL/04_APR/others/hamburger/01/Luna_d.png'
                                    alt=""
                                    className="object-cover w-full"
                                />
                            </div>
                            <div className="p-2 text-center">
                                <h3 className="text-gray-600 text-sm font-medium">Luna</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Collections

