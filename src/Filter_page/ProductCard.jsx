import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import React, { useState } from "react";
import { FaHeart, FaRegCopy, FaVideo } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
const ProductCard = () => {
    const [ProImage, setProImage] = useState(1)
    const data = [
        {
            id: 1,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹19,894",
            text: "Check delivery date",
            title: "Whale Wink 22KT Gold Stud Earrings",
        },
        {
            id: 2,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
            ],
            latest: "Latest",
            price: "₹84,570",
            text: "Check delivery date",
            title: "Royal Imprint 22KT Gold Ring For Men",
        },
        {
            id: 3,
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE09260-1YP9A0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹55,950",
            text: "Check delivery date",
            title: "Heritage Glimmer 22KT Gold Ring ",
        },
        {
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/L/JL05588-RGS300_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE09546-1YP9A0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/T/JT02532-1YP9A0_11_listfront.jpg",
                // "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10246-1YS300_11_listfront.jpg"
            ],
            latest: "Latest",
            price: "₹69,240",
            text: "Check delivery date",
            title: "Rewrite Your Future Gemstone Ring",
        },
        {
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10305-RGS3OO_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹62,500",
            text: "Check delivery date",
            title: "Nebula Spark Gemstone Ring",
        },
        {
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/E/KE07344-2Y0000_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/X/KX00032-2Y0000_3_lar.jpg",
            ],
            latest: "Latest",
            price: "₹50,280",
            text: "Check delivery date",
            title: "Eternal Harvest 22KT Gold Ring",
        },
        {
            img: ["https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10305-RGS3OO_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/T/JT02532-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹76,500",
            text: "Check delivery date",
            title: "Braceleef 22KT Gold Ring",
        },
        {
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/L/JL05588-RGS300_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE09546-1YP9A0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/T/JT02532-1YP9A0_11_listfront.jpg",
                // "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10246-1YS300_11_listfront.jpg"
            ],
            latest: "Latest",
            price: "₹28,560",
            text: "Check delivery date",
            title: "Auric Bloom 22KT Gold Ring",
        },
        {
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10211-YGS3P0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/X/KX00032-2Y0000_3_lar.jpg",
            ]
            ,
            latest: "Latest",
            price: "₹85,900",
            text: "Check delivery date",
            title: " Hey veil 22KT Gold Ring",
        },
        {
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "495,900",
            text: "Check delivery date",
            title: "Fit & Flutter Diamond Rng",
        },
        {
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
            ],
            latest: "Latest",
            price: "₹95,760",
            text: "Check delivery date",
            title: "Life of Hearts Diamond Band",
        },
        {
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/E/KE07344-2Y0000_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/X/KX00032-2Y0000_3_lar.jpg",
            ],
            latest: "Latest",
            price: "₹19,894",
            text: "Check delivery date",
            title: "Whale Wink 22KT Gold Stud Earrings",
        },
        {
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE09260-1YP9A0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹84,570",
            text: "Check delivery date",
            title: "Royal Imprint 22KT Gold Ring For Men",
        },
        {
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/M/S/MS00083-PTP900_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/M/S/MS00083-PTP900_2_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/E/KE07045-2Y0000_4_lar.jpg"
            ],
            latest: "Latest",
            price: "₹55,950",
            text: "Check delivery date",
            title: "Heritage Glimmer 22KT Gold Ring ",
        },
        {
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/P/JP06462-8YP9RS_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/E/KE07045-2Y0000_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/S/N/SN00003-YGP900_4_lar.jpg",
                // "https://cdn.caratlane.com/media/catalog/product/J/P/JP06462-8YP9RS_3_lar.jpg"
            ],
            latest: "Latest",
            price: "₹69,240",
            text: "Check delivery date",
            title: "Rewrite Your Future Gemstone Ring",
        },
        {
            img: [
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/X/KX00032-2Y0000_3_lar.jpg",
            ],
            latest: "Latest",
            price: "₹62,500",
            text: "Check delivery date",
            title: "Nebula Spark Gemstone Ring",
        },
        {
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/M/S/MS00083-PTP900_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/M/S/MS00083-PTP900_2_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/E/KE07045-2Y0000_4_lar.jpg"
            ],
            latest: "Latest",
            price: "₹50,280",
            text: "Check delivery date",
            title: "Eternal Harvest 22KT Gold Ring",
        },
        {
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹76,500",
            text: "Check delivery date",
            title: "Braceleef 22KT Gold Ring",
        },

        {
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/E/KE07344-2Y0000_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/X/KX00032-2Y0000_3_lar.jpg",
            ],
            latest: "Latest",
            price: "₹19,894",
            text: "Check delivery date",
            title: "Whale Wink 22KT Gold Stud Earrings",
        },
        {
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10211-YGS3P0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/X/KX00032-2Y0000_3_lar.jpg",
            ],
            latest: "Latest",
            price: "₹84,570",
            text: "Check delivery date",
            title: "Royal Imprint 22KT Gold Ring For Men",
        },
        {
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹55,950",
            text: "Check delivery date",
            title: "Heritage Glimmer 22KT Gold Ring ",
        },
        {
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10305-RGS3OO_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹76,500",
            text: "Check delivery date",
            title: "Braceleef 22KT Gold Ring",
        },
        {
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "₹28,560",
            text: "Check delivery date",
            title: "Auric Bloom 22KT Gold Ring",
        },
        {
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/E/KE07344-2Y0000_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/X/KX00032-2Y0000_3_lar.jpg",
            ], latest: "Latest",
            price: "₹85,900",
            text: "Check delivery date",
            title: " Hey veil 22KT Gold Ring",
        },
        {
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/E/JE09260-1YP9A0_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
            ],
            latest: "Latest",
            price: "495,900",
            text: "Check delivery date",
            title: "Fit & Flutter Diamond Rng",
        },
        {
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/R/KR01929-2Y0000_6_lar.jpg",
                "https://images.unsplash.com/photo-1531995811006-35cb42e1a022?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR08870-1YP9A0_11_listfront.jpg",
            ], latest: "Latest",
            price: "₹69,240",
            text: "Check delivery date",
            title: "Rewrite Your Future Gemstone Ring",
        },
        {
            img: [
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/J/R/JR10305-RGS3OO_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
            ], latest: "Latest",
            price: "₹62,500",
            text: "Check delivery date",
            title: "Nebula Spark Gemstone Ring",
        },
        {
            img: [
                "https://cdn.caratlane.com/media/catalog/product/K/E/KE07344-2Y0000_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/J/R/JR10246-1YS300_4_lar.jpg",
                "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95/K/P/KP01768-2Y0000_11_listfront.jpg",
                "https://cdn.caratlane.com/media/catalog/product/K/X/KX00032-2Y0000_3_lar.jpg",
            ],
            latest: "Latest",
            price: "₹50,280",
            text: "Check delivery date",
            title: "Eternal Harvest 22KT Gold Ring",
        },
        // {
        //     img: "https://cdn.caratlane.com/media/catalog/product/K/R/KR01958-2Y0000_5_lar.jpg",
        //     latest: "Latest",
        //     price: "₹76,500",
        //     text: "Check delivery date",
        //     title: "Braceleef 22KT Gold Ring",
        // },

    ];

    return (
        <div>

            <div className="pl-250">

                <select className=' flex flex-col md:flex-row  rounded-xl text-black w-40 ' >
                    <option className='text-black p-5'>Sort By : Feactured</option>
                    <option className='text-black p-5'>Latest</option>
                    <option className='text-black p-5'>Discount</option>
                    <option className='text-black p-5'>Feacture</option>
                    <option className='text-black p-5'>Price: Low to High</option>
                    <option className='text-black p-5'>Price: High to Low</option>
                    <option className='text-black p-5'>Customer Rating</option>
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="max-w-xs bg-white rounded-md border border-gray-200 shadow-md p-4 relative transition-transform duration-300 hover:scale-105 group"
                    >
                        <div className="absolute top-4 left-4 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-md">
                            {item.latest}
                        </div>

                        <div className="absolute top-4 right-4 text-gray-500 hidden group-hover:flex">
                            <FaHeart className="text-xl" />
                        </div>

                        <div className="flex items-center justify-center py-6 relative">
                            {item?.img?.map((photo, i) => ProImage === i + 1 && <img
                                src={photo}
                                alt="Product"
                                className="h-40 object-contain"
                            />)}

                            <button onClick={() => { item.img.length === ProImage ? setProImage(ProImage - 1) : setProImage(1) }} className="absolute left-2 bottom-2 bg-white rounded-full p-1 shadow">
                                <IoChevronBack className="text-gray-500 text-sm" />
                            </button>
                            <div onClick={() => { item.img.length === ProImage ? setProImage(1) : setProImage(ProImage + 1) }} className="absolute left-8 bottom-2 bg-white rounded-full p-1 shadow">
                                <IoChevronForward className="text-gray-500 text-sm" />
                            </div>
                            <div className="absolute right-2 bottom-2 bg-white rounded-full p-1 shadow">
                                <FaRegCopy className="text-pink-500 text-sm" />
                            </div>
                        </div>

                        <div className="text-gray-900 font-semibold text-lg">{item.price}</div>
                        <div className="text-pink-400 text-xm  font-medium mt-1">
                            {item.text}
                        </div>
                        <div className="text-gray-400 text-sm   mt-1">{item.title}</div>

                        <div className="mt-4 hidden group-hover:flex items-center justify-between border border-purple-500 rounded-xl px-4 py-2 transition-all duration-300">
                            <span className="text-purple-700 text-sm font-medium">TRY AT HOME</span>
                            <div className="bg-green-100 p-1 rounded-full">
                                <FaVideo className="text-green-600 text-sm" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCard