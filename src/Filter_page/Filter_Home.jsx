import React, { useState } from "react";
import { FaHeart, FaRegCopy, FaVideo } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

import Footer from "../pages/Footer";
import ProductCard from "./ProductCard";
import FilterNavbar from "./FilterNavbar";

const Filter_Home = () => {
    return (
        <div>

            <FilterNavbar />

            <div className='bg-gray-100 w-full h-19 p-3 pl-19'>
                <p className='text- text-purple-900 '>Jewellery Designs  8456 Designs </p>
                <p className='text-purple-800 text-sm'>  Home  Jewellery</p>
            </div>
            <div className="flex gap-4 p-10">
                <button className="bg-gray-500 text-white rounded-2xl hover:bg-blue-600 px-4 py-3">All</button>
                <button className="bg-gray-500 text-white rounded-2xl hover:bg-blue-600 px-4 py-3">New In</button>
                <button className="bg-gray-500 text-white rounded-2xl hover:bg-blue-600 px-4 py-3">Designs In Store</button>
                <button className="bg-gray-500 text-white rounded-2xl hover:bg-blue-600 px-4 py-3">Faster Delivery</button>
                <button className="bg-gray-500 text-white rounded-2xl hover:bg-blue-600 px-4 py-3">Try At Home</button>

            </div>
            <div>
                <div className="flex">
                    <Sidebar />
                    <ProductCard />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Filter_Home


// sidebar component.....

const Sidebar = () => {
    const [showAll, setShowAll] = useState(true);
    const [priceShow, setpriceShow] = useState(true);
    const [showWaight, setShowWaight] = useState(true);
    const [showMateril, setShowMaterial] = useState(true);
    const [showMetel, setshowMetel] = useState(true)

    const [showRing, setShowAllRing] = useState(false);

    const priceRange = [
        { label: "Under ₹5,000", count: 10 },
        { label: "₹5,001 - ₹10,000", count: 689 },
        { label: "₹10,001 - ₹15,000", count: 909 },
        { label: "₹15,001 - ₹20,000", count: 628 },
        { label: "₹20,001 - ₹30,000", count: 1152 },
        { label: "₹30,001 - ₹40,000", count: 967 },
        { label: "₹40,001 - ₹50,000", count: 796 },
        { label: "₹50,001 - ₹75,000", count: 1421 },
        { label: "₹75,001 - ₹1,00,000", count: 727 },
        { label: "₹1,00,001 - ₹1,50,000", count: 687 },
        { label: "₹1,50,001 - ₹2,00,000", count: 240 },
    ];
    const PRange = priceShow ? priceRange : priceRange.slice(0, 4);

    // Product Type
    const types = [
        { name: "Earrings", count: 2576 },
        { name: "Rings", count: 2067 },
        { name: "Necklaces", count: 707 },
        { name: "Pendants", count: 914 },
        { name: "Set Product", count: 49 },
        { name: "Brooch", count: 6 },
        { name: "Bracelets", count: 973 },
        { name: "Bangles", count: 195 },
        { name: "Chains", count: 172 },
        { name: "Sets", count: 46 },
        { name: "Mangalsutra", count: 477 },
        { name: "Nose pin", count: 149 },
        { name: "Nath", count: 2 },
        { name: "Charms", count: 86 },
        { name: "Adjustable Rings", count: 15 },
        { name: "Charm Builders", count: 2 },
        { name: "Baby Bangles", count: 19 },
    ];
    const visibleTypes = showAll ? types : types.slice(0, 8);

    //  weight
    const weight = [
        { label: "0-2", count: 2893 },
        { label: "2-5", count: 3644 },
        { label: "5-10", count: 973 },
        { label: "10-20", count: 283 },
        { label: "20-30", count: 46 },
        { label: "> 30 g", count: 11 },
    ];
    const visibleWeight = showWaight ? weight : weight.slice(0, 5);

    const materialOptions = [
        { label: "Platinum", count: 228 },
        { label: "Gold", count: 2399 },
        { label: "Diamond", count: 5699 },
        { label: "Gemstone", count: 1157 },
        { label: "Solitaire", count: 293 },
    ];
    const visibleMaterial = showMateril ? materialOptions : materialOptions.slice(0, 3)

    const metalOptions = [
        { label: "22 KT Yellow", count: 1128 },
        { label: "18 KT Yellow", count: 1545 },
        { label: "9 KT Yellow", count: 207 },
        { label: "18 KT White", count: 237 },
        { label: "9 KT White", count: 13 },
        { label: "18 KT Rose", count: 366 },
        { label: "9 KT Rose", count: 6 },
        { label: "18 KT Two Tone", count: 58 },
        { label: "18 KT Three Tone", count: 10 },
        { label: "14 KT Yellow", count: 3172 },
        { label: "14 KT White", count: 40 },
        { label: "14 KT Rose", count: 1359 },
        { label: "14 KT Two Tone", count: 65 },
        { label: "14 KT Three Tone", count: 16 },
    ];

    const visibleMetal = showMetel ? metalOptions : metalOptions.slice(0, 4)

    const ringSizes = [
        { size: 5, count: 64 },
        { size: 6, count: 489 },
        { size: 7, count: 668 },
        { size: 8, count: 974 },
        { size: 9, count: 1009 },
        { size: 10, count: 1151 },
        { size: 11, count: 1010 },
        { size: 12, count: 1458 },
        { size: 13, count: 1158 },
        { size: 14, count: 1321 },
        { size: 15, count: 1113 },
        { size: 16, count: 1106 },
        { size: 17, count: 940 },
        { size: 18, count: 913 },
        { size: 19, count: 711 },
        { size: 20, count: 814 },
        { size: 21, count: 178 },
        { size: 22, count: 217 },
        { size: 23, count: 105 },
        { size: 24, count: 143 },
        { size: 25, count: 114 },
        { size: 26, count: 6 },
        { size: 27, count: 9 },
        { size: 28, count: 12 },
        { size: 29, count: 4 },
        { size: 30, count: 8 },
        { size: 1, count: 23 },
    ];
    const visibleSizes = showRing ? ringSizes : ringSizes.slice(0, 7);
    return (
        <>
            <div>
                {/*  sidebar */}
                <div className="ml-10 mt-10">
                    <div className="flex gap-10">
                        <p>Filter 0</p>
                        <p>Clear All</p>
                    </div>
                    <hr className="w-[280px] mt-2 bg-gray-400 h-px border-0" />

                    <div>
                        <p className="font-bold  text-purple-800 p-2 text-lg">Price</p>
                    </div>

                    <div>
                        <div className="text-sm text-gray-600 ml-5">
                            {PRange.map((item, index) => (
                                <div key={index} className="flex items-center mb-2">
                                    <input type="checkbox" className="mr-2 w-4 h-4 accent-purple-500" />
                                    <span className="flex  w-full">
                                        <span>{item.label}</span>
                                        <p className="text-gray-400 ml-2">({item.count})</p>
                                    </span>
                                </div>
                            ))}
                            <button
                                onClick={() => setpriceShow(!priceShow)}
                                className="mt-4 text-purple-600 text-sm- font-medium flex items-center space-x-1">
                                <FaChevronUp className="w-3 h-3" />
                                <span>Show Less</span>
                            </button>
                        </div>

                        <hr className="w-[280px] mt-2 bg-gray-400 h-px border-0" />

                        {/* product type */}

                        <div className="w-full max-w-xs text-sm pt-4 ml-5 text-gray-600">
                            <h3 className="font-semibold p-2 mb-4 ">Product Type</h3>
                            <div className="space-y-3">
                                {visibleTypes.map((item, index) => (
                                    <label key={index} className="flex items-center space-x-2 cursor-pointer">
                                        <input type="checkbox" className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500" />
                                        <span className="">{item.name}</span>
                                        <span className="text-gray-400">({item.count})</span>
                                    </label>
                                ))}
                            </div>

                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="mt-4 text-purple-600 text-sm font-medium flex items-center space-x-1"
                            >
                                <FaChevronUp className="w-3 h-3" />
                                <span>Show Less</span>
                            </button>
                        </div>

                        <hr className="w-[280px] mt-2 bg-gray-400 h-px border-0" />

                        {/* Waight Ranges  */}

                        <div className="w-full max-w-xs text-sm pt-4 ml-5 text-gray-600">
                            <h3 className="font-semibold p-2 mb-4">Weight Ranges</h3>
                            <div className="space-y-3">
                                {visibleWeight.map((item, index) => (
                                    <label key={index} className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                                        />
                                        <span>{item.label}</span>
                                        <span className="text-gray-400">({item.count})</span>
                                    </label>
                                ))}
                            </div>

                            <button
                                onClick={() => setShowWaight(!showWaight)}
                                className="mt-4 text-purple-600 text-sm font-medium flex items-center space-x-1"
                            >
                                <FaChevronUp className="w-3 h-3" />
                                <span>Show More</span>
                            </button>
                        </div>

                        <hr className="w-[280px] mt-2 bg-gray-400 h-px border-0" />

                        {/* Material.. */}

                        <div className="w-full max-w-xs text-sm pt-4 ml-5 text-gray-600">
                            <h3 className="font-semibold p-2 mb-4">Material</h3>
                            <div className="space-y-3">
                                {visibleMaterial.map((item, index) => (
                                    <label key={index} className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                                        />
                                        <span>{item.label}</span>
                                        <span className="text-gray-400">({item.count})</span>
                                    </label>
                                ))}
                            </div>

                            <button
                                onClick={() => setShowMaterial(!showMateril)}
                                className="mt-4 text-purple-600 text-sm font-medium flex items-center space-x-1"
                            >
                                <FaChevronUp className="w-3 h-3" />
                                <span>Show More</span>
                            </button>
                        </div>

                        <hr className="w-[280px] mt-2 bg-gray-400 h-px border-0" />

                        {/* Metal.. */}

                        <div className="w-full max-w-xs text-sm pt-4 ml-5 text-gray-600">
                            <h3 className="font-semibold p-2 mb-4">Metal</h3>
                            <div className="space-y-3">
                                {visibleMetal.map((item, index) => (
                                    <label key={index} className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                                        />
                                        <span>{item.label}</span>
                                        <span className="text-gray-400">({item.count})</span>
                                    </label>
                                ))}
                            </div>

                            <button
                                onClick={() => setshowMetel(!showMetel)}
                                className="mt-4 text-purple-600 text-sm font-medium flex items-center space-x-1"
                            >
                                <FaChevronUp className="w-3 h-3" />
                                <span>Show More</span>
                            </button>
                        </div>
                        <hr className="w-[280px] mt-2 bg-gray-400 h-px border-0" />

                        {/* Ring Size.. */}

                        <div className="w-full max-w-xs text-sm pt-4 ml-5 text-gray-600">
                            <h3 className="font-semibold p-2 mb-4">Ring Size</h3>
                            <div className="space-y-3">
                                {visibleSizes.map((item, index) => (
                                    <label key={index} className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                                        />
                                        <span>{item.size}</span>
                                        <span className="text-gray-400">({item.count})</span>
                                    </label>
                                ))}
                            </div>

                            <button
                                onClick={() => setShowAllRing(!showRing)}
                                className="mt-4 text-purple-600 text-sm font-medium flex items-center space-x-1"
                            >
                                <FaChevronUp className="w-3 h-3" />
                                <span>Show More</span>
                            </button>
                            <button className="w-60 h-9 bg-white border border-pink-400 text-gray-900 font-semibold mt-4  rounded-xl">
                                View More
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}





