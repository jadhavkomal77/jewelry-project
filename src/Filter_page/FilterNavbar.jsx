import React, { useEffect, useState } from 'react'
import { MdOutlineStorefront } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { FaStore } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { ImHome } from "react-icons/im";
import Flag from 'react-world-flags';
import { MdAccountBox } from "react-icons/md";
import { FaHeart, FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useNavigate } from 'react-router-dom';
import Rings from '../component/HomePage/Rings';
import Earrings from '../component/HomePage/Earrings';
import Braceletes_Bangles from '../component/HomePage/Braceletes_Bangles';
import Solitaires from '../component/HomePage/Solitaires';
import Mangalsutras from '../component/HomePage/Mangalsutras';
import Necklaces_Pendants from '../component/HomePage/Necklaces_Pendants';
import More_Jwellery from '../component/HomePage/More_Jwellery';
import Silverby_Shaya from '../component/HomePage/Silverby_Shaya';
import Gifting from '../component/HomePage/Gifting';
import Trending from '../component/HomePage/Trending';
import Collections from '../component/HomePage/Collections';


const rotatingIcons = [
    { icon: <FaStore size={120} className="text-blue-500" />, label: "Nearest Store", textColor: "text-blue-500" },
    { icon: <FaStore size={120} className="text-orange-400" />, label: "In Store Design", textColor: "text-orange-400" },
    { icon: <TbTruckDelivery size={120} className="text-pink-400" />, label: "Fastest Delivery Date", textColor: "text-pink-400" },
    { icon: <ImHome size={120} className="text-indigo-500" />, label: "Try at Home Availability", textColor: "text-indigo-400" },
];

const FilterNavbar = () => {
    const navigate = useNavigate()

    const [index, setIndex] = useState(0);

    const [isOpen, setIsOpen] = useState();
    const [open, setOpen] = useState(false)


    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % rotatingIcons.length);
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const current = rotatingIcons[index]

    return (
        <div>

            <div className="w-full px-4 py-4 bg-white ">
                <div className="flex flex-wrap items-center">
                    <img
                        className="w-10"
                        src="https://media.istockphoto.com/id/1408777900/photo/gold-letter-c.jpg?s=612x612&w=0&k=20&c=U1MNQPlxODwsOytlLr3cOP7GLpzSkOuVsJuEJ5r4Ino="
                        alt="Logo"
                    />

                    <div className="relative ml-5 w-full sm:w-[100px] md:w-[600px]">
                        <input
                            onClick={() => setOpen(!open)}
                            name="myInput"
                            placeholder="Search"
                            className="w-full px-4 py-2  pr-12 border border-pink-400  text-black rounded-lg"
                        />
                        <div className="absolute right-0 rounded-r-md top-1/2 transform -translate-y-1/2 bg-purple-800 w-10 h-10 flex items-center justify-center">
                            <FaSearch className="text-white" />
                        </div>
                    </div>


                    <div className="border border-pink-400 rounded-xl h-10 w-16 ml-5 flex items-center justify-center">
                        <img
                            className="h-6"
                            src="https://caratlane-live-product-images.s3.ap-south-1.amazonaws.com/media/static/images/discovery/responsive-hamburger-menu/products-and-services/pop-1x.png"
                            alt="icon"
                        />
                    </div>

                    <div className="flex items-center gap-1 border border-red-400 rounded-xl h-10 px-4 ml-5">
                        <MdOutlineStorefront size={20} className="text-red-500" />
                        <p className="text-sm whitespace-nowrap">Store Locator</p>
                    </div>

                    <div className="flex items-center gap-2 border border-pink-400 bg-amber-100 rounded-xl h-10 px-2 ml-5">
                        <img
                            className="h-6"
                            src="https://cdn.caratlane.com/static/images/discovery/responsive-hamburger-menu/egold-1x.png"
                            alt=""
                        />
                    </div>

                    <div className="relative group ml-35">
                        <p className="text-sm text-center">Delivery & Store</p>
                        <p className="text-pink-400 text-sm font-semibold cursor-pointer text-center">
                            Enter Pincode
                        </p>

                        <div className="absolute top-full left-0 w-80 bg-white rounded-xl p-6 shadow-2xl opacity-0 translate-y-[-10px] pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500 ease-in-out z-50 ">
                            <p className="text-lg text-center font-medium text-gray-700">
                                Your PinCode Unblock
                            </p>
                            <p className="mt-2 text-xs text-center">
                                Fastest delivery date, Try-at-Home availability,<br />
                                Nearest store and In-store design!
                            </p>

                            <div className="flex justify-center mt-4">
                                <div className="flex flex-col items-center text-center p-2">
                                    {current.icon}
                                    <p className={`font-semibold ${current.textColor}`}>
                                        {current.label}
                                    </p>
                                </div>
                            </div>

                            <div className="relative w-full max-w-xs mx-auto mt-4">
                                <FaLocationCrosshairs className="absolute left-3 top-4 text-gray-500 text-sm" />
                                <input
                                    type="text"
                                    placeholder="Enter pincode"
                                    className="w-full border border-gray-300 rounded-md py-3.5 pl-10 pr-10 text-sm"
                                />
                                <span className="absolute right-3 top-3.5 font-bold text-sm text-pink-300 cursor-pointer">
                                    CHANGE
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 mt-2 md:mt-0 ml-6">
                        <Flag code="IN" style={{ width: 32, height: 20 }} className="rounded ml-2" />
                        <MdAccountBox size={25} className="text-violet-900 ml-2" />
                        <FaHeart size={22} className="text-violet-900 ml-2" />
                        <FaCartPlus size={22} className="text-violet-900 ml-2" />
                    </div>
                </div>
            </div>

            {/* navbar component */}

            <div className='bg-purple-950 flex justify-between p-2'>
                <div className='flex flex-col md:flex-row items-center justify-between text-white w-full '>
                    <div
                        className="relative"
                        onMouseEnter={() => setIsOpen("ring")}
                        onMouseLeave={() => setIsOpen("")}
                    >
                        {isOpen === "ring" ? (
                            <div className="absolute left-0 right-0 top-full z-50 bg-white shadow-lg p-4 w-screen">
                                <Rings />
                            </div>
                        ) :
                            isOpen === "earring" ? (
                                <div className="absolute left-0 right-0 top-full z-50 bg-white shadow-lg p-4 w-screen">
                                    <Earrings />
                                </div>
                            ) :
                                isOpen === "braceletes" ? (
                                    <div className="absolute left-0 right-0 top-full z-50 bg-white shadow-lg p-4 w-screen">
                                        <Braceletes_Bangles />
                                    </div>
                                ) :
                                    isOpen === "solitaires" ? (
                                        <div className="absolute left-0 right-0 top-full z-50 bg-white shadow-lg p-4 w-screen">
                                            <Solitaires />
                                        </div>
                                    ) :
                                        isOpen === "mangalsutras" ? (
                                            <div className="absolute left-0 right-0 top-full z-50 bg-white shadow-lg p-4 w-screen">
                                                <Mangalsutras />
                                            </div>
                                        ) :
                                            isOpen === "necklaces" ? (
                                                <div className="absolute left-0 right-0 top-full z-50 bg-white shadow-lg p-4 w-screen">
                                                    <Necklaces_Pendants />
                                                </div>
                                            ) :
                                                isOpen === "jwellery" ? (
                                                    <div className="absolute left-0 right-0 top-full z-50 bg-white shadow-lg p-4 w-screen">
                                                        <More_Jwellery />
                                                    </div>
                                                ) :
                                                    isOpen === "silverbyshaya" ? (
                                                        <div className="absolute left-0 right-0 top-full z-50 bg-white shadow-lg p-4 w-screen">
                                                            <Silverby_Shaya />
                                                        </div>
                                                    ) :
                                                        isOpen === "gifting" ? (
                                                            <div className="absolute left-0 right-0 top-full z-50 bg-white shadow-lg p-4 w-screen">
                                                                <Gifting />
                                                            </div>
                                                        ) :
                                                            isOpen === "gifting" ? (
                                                                <div className="absolute left-0 right-0 top-full z-50 bg-white shadow-lg p-4 w-screen">
                                                                    <Gifting />
                                                                </div>
                                                            ) :
                                                                isOpen === "trending" ? (
                                                                    <div className="absolute left-0 right-0 top-full z-50 bg-white shadow-lg p-4 w-screen">
                                                                        <Trending />
                                                                    </div>
                                                                ) :
                                                                    isOpen === "collection" ? (
                                                                        <div className="absolute left-0 right-0 top-full z-50 bg-white shadow-lg p-4 w-screen">
                                                                            <Collections />
                                                                        </div>
                                                                    ) :
                                                                        <></>

                        }
                        <p onClick={() => navigate("/filterhome")} className="pl-5  cursor-pointer hover:underline hover:decoration-fuchsia-400 hover:text-fuchsia-500">
                            Rings
                        </p>
                    </div>
                    <div
                        className="relative"
                        onMouseEnter={() => setIsOpen("earring")}
                        onMouseLeave={() => setIsOpen(false)}
                    >
                        <p onClick={() => navigate("/detailHome")} className="cursor-pointer hover:underline hover:decoration-fuchsia-400 hover:text-fuchsia-500">
                            Details
                        </p>
                    </div>
                    <div
                        className="relative"
                        onMouseEnter={() => setIsOpen("earring")}
                        onMouseLeave={() => setIsOpen(false)}
                    >
                        <p className="cursor-pointer hover:underline hover:decoration-fuchsia-400 hover:text-fuchsia-500">
                            Earings
                        </p>

                    </div>

                    <div
                        className="relative"
                        onMouseEnter={() => setIsOpen("braceletes")}
                        onMouseLeave={() => setIsOpen("")}>

                        <p className='hover:underline hover:decoration-fuchsia-500 hover:text-fuchsia-500' >
                            Braceletes & Bangles
                        </p>
                    </div>

                    <div
                        className='relative'
                        onMouseEnter={() => setIsOpen("solitaires")}
                        onMouseLeave={() => setIsOpen("")}>
                        <p className='hover:underline hover:decoration-fuchsia-500 hover:text-fuchsia-500' >Solitaires</p>
                    </div>

                    <div
                        className='relative'
                        onMouseEnter={() => setIsOpen("mangalsutras")}
                        onMouseLeave={() => setIsOpen("")}>
                        <p className='hover:underline hover:decoration-fuchsia-500 hover:text-fuchsia-500' >Mangalsutras</p>
                    </div>
                    <div
                        className='relative'
                        onMouseEnter={() => setIsOpen("necklaces")}
                        onMouseLeave={() => setIsOpen("")}>
                        <p className='hover:underline hover:decoration-fuchsia-500 hover:text-fuchsia-500' >NecKlaces & Pendants</p>
                    </div>
                    <div
                        className='relative'
                        onMouseEnter={() => setIsOpen("jwellery")}
                        onMouseLeave={() => setIsOpen("")}>
                        <p className='hover:underline hover:decoration-fuchsia-500 hover:text-fuchsia-500' >More Jwellery</p>
                    </div>
                    <div
                        className='relative'
                        onMouseEnter={() => setIsOpen("silverbyshaya")}
                        onMouseLeave={() => setIsOpen("")}>
                        <p className='hover:underline hover:decoration-fuchsia-500 hover:text-fuchsia-500' >Silver By Shaya</p>
                    </div>
                    <div
                        className='relative'
                        onMouseEnter={() => setIsOpen("gifting")}
                        onMouseLeave={() => setIsOpen("")}>
                        <p className='hover:underline hover:decoration-fuchsia-500 hover:text-fuchsia-500' >Gifting</p>
                    </div>
                    <div
                        className='relative'
                        onMouseEnter={() => setIsOpen("trending")}
                        onMouseLeave={() => setIsOpen("")}>
                        <p className='hover:underline hover:decoration-fuchsia-500 hover:text-fuchsia-500' >Trending</p>
                    </div>
                    <div
                        className='relative'
                        onMouseEnter={() => setIsOpen("collection")}
                        onMouseLeave={() => setIsOpen("")}>
                        <p className='hover:underline hover:decoration-fuchsia-500 hover:text-fuchsia-500' >Collections</p>
                    </div>


                    {/* Select box */}
                </div>
                <select className=' flex flex-col md:flex-row border rounded-xl text-white w-25' >
                    <option className='text-black p-5'>Services</option>
                    <option className='text-black p-5'>Try at Home</option>
                    <option className='text-black p-5'>Video Call</option>
                </select>
            </div>
        </div >
    )
}

export default FilterNavbar

