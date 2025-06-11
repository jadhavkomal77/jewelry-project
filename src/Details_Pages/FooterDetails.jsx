import React from 'react'
import { IoCall } from "react-icons/io5";
import { IoMdChatbubbles } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const FooterDetails = () => {
    return <>
        <div>
            <footer className="bg-gray-100 text-gray-800 px-4 py-10 mt-10 ">
                <div className="max-w-7xl mx-auto grid md:grid-cols-6 gap-8 text-sm">
                    {/* Column 1 */}
                    <div>
                        <h4 className="font-semibold mb-2">Know Your Jewellery</h4>
                        <ul className="space-y-1 text-[#5f5f71]">
                            <li>Diamond guide</li>
                            <li>Jewellery guide</li>
                            <li>Gemstones guide</li>
                            <li>Gold rate</li>
                            <li>Plan of purchase</li>
                            <li>Glossary</li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h4 className="font-semibold mb-2">CaratLane Advantage</h4>
                        <ul className="space-y-1 text-[#5f5f71]">
                            <li>15-day returns</li>
                            <li>Free shipping</li>
                            <li>Postcards</li>
                            <li>Gold exchange</li>
                            <li>#Wearyourwins</li>
                            <li>Gift cards</li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h4 className="font-semibold mb-2">Customer Service</h4>
                        <ul className="space-y-1 text-[#5f5f71]">
                            <li>Return policy</li>
                            <li>Order status</li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h4 className="font-semibold mb-2">About Us</h4>
                        <ul className="space-y-1 text-[#5f5f71]">
                            <li>Our story</li>
                            <li>Press</li>
                            <li>Blog</li>
                            <li>Careers</li>
                        </ul>
                    </div>

                    {/* Column 5 - Contact */}
                    <div className="col-span-2">
                        <h4 className="font-semibold mb-2">Contact Us</h4>
                        <p className="text-sm font-semibold">CaratLane Trading Pvt Ltd</p>
                        <p className="text-[#5f5f71]">No:727, 1st Floor, TIL Park Anna Salai, Pathari Road, Thousand Lights, Chennai, Tamil Nadu 600006.</p>

                        <div className="mt-3 text-sm text-[#5f5f71] space-y-1">
                            <p className="font-semibold text-gray-700">24x7 ENQUIRY SUPPORT ( ALL DAYS )</p>
                            <p>General: <a className="text-pink-600" href="#">contactus@caratlane.com</a></p>
                            <p>Corporate: <a className="text-pink-600" href="#">b2b@caratlane.com</a></p>
                            <p>Hr: <a className="text-pink-600" href="#">careers@caratlane.com</a></p>
                            <p>Grievance: <a className="text-pink-600" href="#">click here</a></p>
                        </div>

                        {/* Contact Icons.  */}
                        <div className="mt-4 flex gap-6 text-sm text-center ">
                            <div className="flex flex-col items-center">
                                <IoCall size={20} />
                                <span>Call Us</span>

                            </div>
                            <div className="flex flex-col items-center">
                                <IoMdChatbubbles size={20} />
                                <span>Chat</span>

                            </div>
                            <div className="flex flex-col items-center">
                                <FaWhatsapp size={20} />
                                <span>Whatsapp</span>

                            </div>
                            <div className="flex flex-col items-center">
                                <MdEmail size={20} />
                                <span>Email</span>

                            </div>
                        </div>
                    </div>
                </div>

                {/* App Download card. */}
                <div className="max-w-sm  mt-12 ml-25 right-12 bg-gradient-to-l bg-gray-400 to-gray-50 rounded-xl p-4 text-center shadow-sm">
                    <p className="font-semibold text-lg mb-1">Download the CaratLane App</p>
                    <p className="text-sm text-[#5f5f71] mb-4">Shop & Save more on app by redeeming xCLusive points</p>
                    <div className="flex justify-center gap-4">
                        <img src="https://freelogopng.com/images/all_img/1664287128google-play-store-logo-png.png" alt="Play Store" className="h-12" />
                        <img src="https://freelogopng.com/images/all_img/1664287128google-play-store-logo-png.png" alt="Play Store" className="h-12" />
                    </div>
                </div>

                {/* Bottom Icons */}
                <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#5f5f71]">
                    <div className="flex gap-6 text-2xl ml-32">
                        <div className="flex gap-4">
                            <div className="bg-purple-900 text-white p-2 rounded-full   ">
                                <FaInstagram size={20} />
                            </div>
                            <div className="bg-purple-900 p-2 rounded-full text-white">
                                <FaFacebook size={20} />
                            </div>
                            <div className="bg-purple-900 p-2 rounded-full transition text-white">
                                <FaLinkedinIn size={20} />
                            </div>
                        </div>
                        <p className='bg-purple-900 text-white rounded-full w-9 ml-3 text-center'>P</p>
                        <p className='bg-purple-900 text-white rounded-full w-9 ml-3 text-center'>X</p>

                    </div>
                    <div className="flex items-center pr-30 gap-4 text-sm text-gray-600">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_uUQ7EGpOTbssuERiCxuAjOho5lMjnBFMA&s" className="h-5" alt="visa" />
                        <img src="https://pngimg.com/d/mastercard_PNG16.png" className="h-5" alt="mastercard" />
                        <img src="https://www.pngplay.com/wp-content/uploads/8/Paypal-PNG-Clipart-Background.png" className="h-7" alt="paypal" />
                        <img src="https://www.pngplay.com/wp-content/uploads/5/American-Express-Logo-Download-Free-PNG.png" className="h-5" alt="amex" />
                        <img src="https://icon2.cleanpng.com/lnd/20241213/pz/74d97a469873774f841633779c982d.webp" className="h-5" alt="amazon" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx5CKM8SY5X0cMrLdb27pamwUiaVqaeRyDHg&s" className="h-5" alt="bizrate" />
                    </div>
                </div>
            </footer>
        </div>
    </>
}

export default FooterDetails
