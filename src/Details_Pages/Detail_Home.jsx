
import React, { useState } from 'react'
import DetailNavbar from './DetailNavbar'
import { IoChevronForward } from 'react-icons/io5'
import { IoHeartOutline, IoShareOutline, IoLocationOutline, IoCalendarOutline } from 'react-icons/io5';
import { FaSun, FaGem } from "react-icons/fa";
import { GiEmerald } from "react-icons/gi";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { LuClockArrowDown } from "react-icons/lu";
import { SlBag } from "react-icons/sl"
import { TbSettingsDown } from "react-icons/tb";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import RateUs from './RateUs';
import RecentlyViewCard from './RecentlyViewCard';
import SimilerProduct from './SimilerProduct';
import FooterDetails from './FooterDetails';
import RelatedCategories from './RelatedCategories';

const Detail_Home = () => {
    const [slide, setSlide] = useState(1);

    const handleNext = () => {
        setSlide(prev => (prev < 3 ? prev + 1 : 1));
    };

    const handlePrev = () => {
        setSlide(prev => (prev > 1 ? prev - 1 : 3));
    };

    return <>
        <div>
            <DetailNavbar />

            <div className="flex  items-center space-x-1 px-4 py-2">
                <p className="text-xs text-gray-900">HOME</p>
                <IoChevronForward className="text-xs text-gray-600" />
                <p className="text-xs text-gray-900">RINGS</p>
                <IoChevronForward className="text-xs text-gray-600" />
                <p className="text-xs text-gray-900">DIAMOND RINGS</p>
                <IoChevronForward className="text-xs text-gray-600" />
                <p className="text-xs text-gray-900"> FLARE DRIFT GAMSTONE RINGS</p>
            </div>
            <button className='text-xs bg-yellow-400 w-14 h-5 ml-5 rounded text-center'> Latest</button>

            <div className='flex'>
                <div>
                    <div className='flex'>
                        <img className='w-[550px]' src="https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10305-RGS3OO_12_listhover.jpg" alt="" />
                        <img className='w-[550px]' src="https://cdn.caratlane.com/media/catalog/product/J/R/JR10211-YGS3P0_3_lar.jpg" alt="" />
                    </div>
                    <div className='flex'>
                        <img className='w-[550px]' src="https://cdn.caratlane.com/media/catalog/product/J/R/JR10056-1YS300_4_lar.jpg" alt="" />
                        <img className='w-[550px]' src="https://cdn.caratlane.com/media/catalog/product/J/R/JR10305-RGS3OO_5_lar.jpg" alt="" />
                    </div>
                    <div className='flex'>
                        <img className='w-[550px]' src="https://cdn.caratlane.com/media/catalog/product/J/R/JR10305-RGS3OO_3_lar.jpg" alt="" />
                        <img className='w-[550px]' src="https://cdn.caratlane.com/media/catalog/product/J/R/JR08870-1YP9A0_5_lar.jpg" alt="" />
                    </div>

                    <div className='bg-gray-400 w-40 h-10  rounded-sm text-center p-2 m-30 ml-140'>
                        <button>Show More</button>
                    </div>
                </div>

                {/*  */}

                <div className="max-w-md mx-auto p-4 space-y-4 text-gray-900 text-sm">
                    {/* Price and Title */}
                    <div>
                        <button className="text-[10px] border border-gray-400 rounded-full px-2 py-0.5">WRITE A REVIEW</button>
                        <h2 className="text-2xl font-semibold mt-1">₹15,170</h2>
                        <p className="text-xs text-gray-500">(MRP inclusive of all taxes)</p>
                        <p className="mt-1 font-medium">Flare Drift Gemstone Ring</p>
                    </div>

                    {/* App Download card. */}
                    <div className="max-w-sm  right-12 bg-gradient-to-l bg-gray-300 to-blue-400 rounded-xl p-4 text-center shadow-sm">
                        <p className="font-semibold text-lg mb-1">Diamond Stack a Scale</p>
                        <div className='flex'>
                            <div className='text-center border-2xl border-yellow-400 p-1 w-60 rounded bg-gradient-to-l bg-emerald-400 to-green-800'>
                                <div>
                                    <p className="text-lg text-white mb-1">Enjoy  10% off</p>
                                    <p className="text-sm text-white mb-1">When you shop for 30k to 50k</p>
                                    <hr className='text-yellow-500' />
                                    <p className="text-lg text-white mb-1">Enjoy  12.5% off</p>
                                    <p className="text-sm text-white mb-1">When you shop for 60k to 1.2l</p>
                                </div>
                            </div>
                            <div className='ml-7 mt-5'>
                                <img src="https://cdn.caratlane.com/media/catalog/product/J/R/JR10211-YGS3P0_3_lar.jpg" width={80} alt="" />

                            </div>
                        </div>
                    </div>

                    {/* Customization Options */}
                    <div className="inline-flex text-xs rounded-xl overflow-hidden border border-amber-400">
                        <button className="px-3 py-1 border-r bg-white text-black">Size<br />12 (51.8 mm)</button>
                        <button className="px-3 py-1 border-r bg-white text-black">Metal<br />14 KT Yellow</button>
                        <button className="px-3 py-1 border-r bg-white text-black">Diamond<br />FG-SI</button>
                        <button className="px-3 py-1 bg-yellow-400 text-white font-semibold">CUSTOMISE</button>
                    </div>


                    <div className="bg-purple-100 text-purple-700 text-xs p-2 rounded flex justify-between items-center">
                        Not sure about your ring size? <span className="font-medium">LEARN HOW</span>
                    </div>

                    {/* Add to Cart... */}
                    <div className="flex space-x-2 items-center">
                        <button className="bg-purple-500 text-white px-6 py-2 rounded flex-1 flex items-center justify-center gap-2">
                            <span>🛒</span> ADD TO CART
                        </button>
                        <button className="border px-3 py-2 rounded"><IoHeartOutline /></button>
                        <button className="border px-3 py-2 rounded"><IoShareOutline /></button>
                    </div>

                    {/* Delivery Section... */}
                    <div>
                        <h3 className="font-medium mb-2">Delivery, Stores & Trial</h3>
                        <div className="flex items-center border border-y-amber-400 h-10 rounded-xl px-2 py-1">
                            <IoLocationOutline className="text-lg" />
                            <input type="text" placeholder="Enter Pincode" className="flex-1 px-2 outline-none" />
                            <button className="text-purple-600 font-medium">Locate Me</button>
                        </div>
                        <div className="flex items-center  mt-2 rounded px-2 py-1">
                            <IoCalendarOutline className="text-lg" />
                            <p className="px-2 text-gray-600">Expected Delivery Date</p>
                        </div>
                    </div>

                    {/* Home  Store */}
                    <div className="flex space-x-2">
                        <div className="bg-gray-100 p-3 rounded text-center flex-1">
                            <p className="font-medium">Try At Home</p>
                            <p className="text-xs">Trial upto 5 designs</p>
                            <button className="mt-2 bg-blue-500 h-8 text-white px-3 py-1 rounded-xl text-xs">BOOK APPOINTMENT</button>
                        </div>
                        <div className="bg-gray-100 p-3 rounded text-center flex-1">
                            <p className="font-medium">Store Availability</p>
                            <p className="text-xs">Find designs in store</p>
                            <button className="mt-2 bg-red-500 h-8 text-white px-3 py-1 rounded-xl text-xs">FIND IN STORE</button>
                        </div>
                    </div>

                    {/* Video Call */}
                    <div className="bg-gray-100 p-3 rounded flex items-center space-x-2">
                        <img src="https://images.unsplash.com/photo-1548126761-75bb795a7d42?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-29 h-24 rounded" alt="video-call" />
                        <div className="flex-1">
                            <p className="text-xl">Live Video Call</p>
                            <p className="text-xs text-gray-600">Join a live call with our consultants to see your favourite designs up close!</p>
                            <button className="mt-1 bg-gray-200 text-green-700 px-2 py-1 rounded-xl w-50 text-lg">Schedule a Video Call</button>
                        </div>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-4 gap-2 text-center text-xs text-gray-600">
                        <div>
                            <IoCheckmarkDoneCircle className='ml-7 size-7' />
                            <p>100% Certified</p>
                        </div>
                        <div>
                            <RiMoneyRupeeCircleLine className='ml-7 size-7' />
                            <p>15 Day Money-Back</p>
                        </div>
                        <div>
                            <LuClockArrowDown className='ml-7 size-7' />
                            <p>Lifetime Exchange</p>
                        </div>
                        <div>
                            <SlBag className='ml-7 size-7' />
                            <p>One Year Warranty</p>
                        </div>
                    </div>

                    {/* Point Section */}
                    <div className="bg-gradient-to-l bg-blue-200 to-pink-200 p-2 rounded text-xs text-purple-900 flex items-center justify-between">
                        <p>Earn 455 xCLusive points with this order<br /><span className="text-[10px]">(1 xClusive point = ₹1)</span></p>
                        <span className="text-lg">🎁</span>
                    </div>

                    {/*  */}
                    <div className="p-4 space-y-4 text-sm text-gray-800">
                        <div>
                            <span className="px-4 py-1 text-xs font-semibold  rounded-full">
                                Learn more on about our
                            </span>
                            <span className=" text-xs font-semibold text-pink-500  rounded-full">
                                TERMS & POLICIES
                            </span>
                        </div>
                        {/* Button */}
                        <div className='flex justify-between'>
                            <div>
                                <p className='text-lg'>Product Details</p>
                            </div>

                            <button className="px-4 py-1 text-sm font-semibold text-white bg-gray-400 rounded-sm">
                                + PRICE BREAKUP
                            </button>
                        </div>

                        {/* SKU & Description */}
                        <p className="text-xs text-gray-600">
                            SKU <span className="text-purple-600">JR10032-1YS3SE</span>
                        </p>
                        <p className="text-sm">
                            Set in 14 KT Yellow Gold (1.140 g) with diamonds (0.020 ct FG-SI)
                        </p>

                        {/* GOLD Section */}
                        <div className="rounded-lg bg-orange-50 p-4 space-y-2">
                            <div className="flex items-center gap-2 font-semibold text-orange-500">
                                <FaSun className='' /> GOLD
                            </div>
                            <div className="grid grid-cols-3  bg-white gap-2 text-xs">
                                <div className='p-3'>
                                    <p className="text-gray-500 ">Dimensions</p>
                                    <p>Width : 4.75 mm<br />Height : 2.6 mm</p>
                                </div>
                                <div className='p-3'>
                                    <p className="text-gray-500">Weight</p>
                                    <p>Gross : 1.172 g</p>
                                </div>
                                <div className='p-3'>
                                    <p className="text-gray-500">Purity</p>
                                    <p>14 KT</p>
                                </div>
                            </div>
                        </div>

                        {/* DIAMOND Section */}
                        <div className="rounded-lg bg-orange-50 p-4 space-y-2">
                            <div className="flex items-center gap-2 font-semibold text-orange-500">
                                <FaGem /> DIAMOND
                            </div>
                            <div className="grid grid-cols-3 bg-white  gap-2 text-xs">
                                <div className='p-3'>
                                    <p className="text-gray-500">Type</p>
                                    <p>FG-SI</p>
                                </div>
                                <div className='p-3'>
                                    <p className="text-gray-500">Setting</p>
                                    <p>Setting : Micro Pave<br />Total No. : 6</p>
                                </div>
                                <div className='p-3'>
                                    <p className="text-gray-500">Total Weight</p>
                                    <p>0.020 ct</p>
                                </div>
                            </div>
                        </div>

                        {/* GEMSTONE Section */}
                        <div className="rounded-lg bg-orange-50 p-4 space-y-2">
                            <div className="flex items-center gap-2 font-semibold text-orange-500">
                                <GiEmerald /> GEMSTONE
                            </div>
                            <div className="grid grid-cols-2 bg-white gap-2 text-xs">
                                <div className='p-3'>
                                    <p className="text-gray-500">Type</p>
                                    <p>Synthetic Emerald (4.00 x 3.00 mm)</p>
                                </div>
                                <div className='p-3'>
                                    <p className="text-gray-500">Total No.</p>
                                    <p>1</p>
                                </div>
                            </div>
                        </div>

                        <hr className="bg-gray-300 h-[1px] border-0 my-4" />
                        {/* Manufacturer */}
                        <p className="text-sm text-black">
                            Manufactured by CaratLane Trading Pvt Ltd...{" "}
                            <span className="text-purple-600 cursor-pointer">Show More</span>
                        </p>

                        <hr className="bg-gray-300 h-[1px] border-0 my-4" />

                        {/* icon. */}

                        <div className="flex justify-between gap-4 px-2 py-1 text-sm">

                            <div className="text-center">
                                <img src="https://toppng.com/uploads/preview/diamond-pendants-for-mangalsutras-si-11564256167cyqkzb9fnz.png" width={70} alt="" />
                                <p className="font-medium mr-7">BIS</p>
                                <p className="text-gray-600">Hallmarked Jewellery</p>
                            </div>

                            {/* Trust A TATA */}
                            <div className="text-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVguGE23yH0dMJT5rXdplchCSS8fN-9Zr0g&s" width={70} alt="" />
                                <p className="font-medium mt-6">Trust A TATA</p>
                                <p className="text-xs text-gray-600">Spirit Of CaratLane</p>
                            </div>

                            {/* 100% Certified */}
                            <div className="text-center">
                                <TbSettingsDown className='size-12' />
                                <p className="font-medium mt-3">100% Certified</p>
                                <p className="text-xs text-gray-600">By CaratLane</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* card.. */}

            <div>
                <div className="relative w-full mx-auto p-4 pt-10">

                    <div className="flex transition-transform gap-3 duration-500 ease-in-out" style={{ transform: `translateX(-${(slide - 1) * 100}%)`, width: '50%' }}>

                        {/* imgage 1 */}
                        <div className="w-full flex-shrink-0 p-6 rounded-xl bg-gradient-to-r from-green-500 to-green-300 text-white">
                            <div className='flex justify-between'>
                                <div>
                                    <h2 className="text-xl font-bold mb-4">Now you can invest & redeem anytime</h2>
                                    <button className="bg-white text-black px-4 py-2 rounded shadow">Buy Digital Gold</button>
                                </div>
                                <img className='w-75' src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/bestsellers/02/Desktop_1740x850.jpg" alt="" />
                            </div>
                        </div>

                        {/* image 2 */}
                        <div className="w-full flex-shrink-0 p-6 rounded-xl bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
                            <div className='flex justify-between'>
                                <div>
                                    <h2 className="text-xl font-bold mb-4">Get your 10th installment FREE</h2>
                                    <button className="bg-white text-black px-4 py-2 rounded shadow">Enroll Now</button>
                                </div>
                                <img className='w-75' src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/PoP/01/Desktop_Slider.jpg" alt="" />
                            </div>
                        </div>

                        {/* image 3 */}
                        <div className="w-full flex-shrink-0 p-6 rounded-xl bg-teal-700 text-white">
                            <div className='flex justify-between'>
                                <div>
                                    <h2 className="text-xl font-bold mb-4">Flat 20% Off on Jewelry</h2>
                                    <button className="bg-white text-black px-4 py-2 rounded shadow">Shop Now</button>
                                </div>
                                <img className='w-75' src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/bestsellers/02/Desktop_1740x850.jpg" alt="" />
                            </div>
                        </div>

                        {/* image 4 */}
                        <div className="w-full flex-shrink-0 p-6 rounded-xl bg-gradient-to-r from-purple-900 to-indigo-800 text-white">
                            <div className='flex justify-between'>
                                <div>
                                    <h2 className="text-xl font-bold mb-4">Get your 10th installment FREE</h2>
                                    <button className="bg-white text-black px-4 py-2 rounded shadow">Enroll Now</button>
                                </div>
                                <img className='w-75' src="https://cdn.caratlane.com/media/static/images/V4/2025/CL/03_MAR/Banner/PoP/01/Desktop_Slider.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className=''>
                        <div className="flex justify-end gap-2 pr-10 py-3">
                            <button onClick={handlePrev} className="bg-purple-800 p-2 text-white rounded-full shadow hover:bg-gray-200">
                                <ChevronLeft />
                            </button>
                            <button onClick={handleNext} className="bg-purple-800 p-2 text-white rounded-full shadow hover:bg-gray-200">
                                <ChevronRight />
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            <RateUs />
            <RecentlyViewCard />
            <SimilerProduct />
            <RelatedCategories />
            <FooterDetails />
        </div>

    </>
}

export default Detail_Home

