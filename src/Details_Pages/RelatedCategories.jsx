import React from 'react'

const RelatedCategories = () => {
    return (
        <div>
            <div className="space-y-10">
                {/* Related Categories page... */}
                <div className="bg-blue-50 rounded-xl py-10 px-4 sm:px-10 text-center mx-4 sm:mx-16">
                    <h2 className="text-sm sm:text-base font-semibold mb-6 text-gray-800">Related Categories</h2>
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                        <span className="bg-white px-3 py-1 rounded-full text-xs sm:text-sm text-gray-700">couple wedding rings</span>
                        <span className="bg-white px-3 py-1 rounded-full text-xs sm:text-sm text-gray-700">engagement rings for couples</span>
                        <span className="bg-white px-3 py-1 rounded-full text-xs sm:text-sm text-gray-700">men ring design</span>
                        <span className="bg-white px-3 py-1 rounded-full text-xs sm:text-sm text-gray-700">pukhraj stone ring</span>
                        <span className="bg-white px-3 py-1 rounded-full text-xs sm:text-sm text-gray-700">ring design</span>
                        <span className="bg-white px-3 py-1 rounded-full text-xs sm:text-sm text-gray-700">princess cut diamond ring</span>
                        <span className="bg-white px-3 py-1 rounded-full text-xs sm:text-sm text-gray-700">solitaire ring designs</span>
                        <span className="bg-white px-3 py-1 rounded-full text-xs sm:text-sm text-gray-700">solitaire ring for women</span>
                        <span className="bg-white px-3 py-1 rounded-full text-xs sm:text-sm text-gray-700">boys ring design</span>
                        <span className="bg-white px-3 py-1 rounded-full text-xs sm:text-sm text-gray-700">band rings</span>
                        <span className="bg-white px-3 py-1 rounded-full text-xs sm:text-sm text-gray-700">rings for girlfriend</span>
                        <span className="bg-white px-3 py-1 rounded-full text-xs sm:text-sm text-gray-700">gents ring design</span>
                        <span className="bg-white px-3 py-1 rounded-full text-xs sm:text-sm text-gray-700">mens engagement rings</span>
                        <span className="bg-white px-3 py-1 rounded-full text-xs sm:text-sm text-gray-700">platinum rings for men</span>
                        <span className="bg-white px-3 py-1 rounded-full text-xs sm:text-sm text-gray-700">gold heart ring</span>
                    </div>
                </div>

                {/* Shop by Products */}
                <div className="bg-rose-50 rounded-xl py-10 px-4 sm:px-10 text-center mx-4 sm:mx-16">
                    <h2 className="text-base sm:text-lg font-semibold mb-6 text-gray-800">Shop by Products</h2>
                    <div className="flex justify-center gap-6 sm:gap-10 flex-wrap">
                        <div className="flex flex-col items-center">
                            <img
                                src="https://cdn.caratlane.com/media/catalog/product/K/R/KR01962-2Y0000_4_lar.jpg"
                                alt="All rings"
                                className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-xl object-cover shadow-md mb-2"
                            />
                            <p className="text-xs sm:text-sm text-purple-900 font-medium">All rings</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img
                                src="https://cdn.caratlane.com/media/catalog/product/K/R/KR01958-2Y0000_3_lar.jpg"
                                alt="All Earrings"
                                className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-xl object-cover shadow-md mb-2"
                            />
                            <p className="text-xs sm:text-sm text-purple-900 font-medium">All Earrings</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img
                                src="https://cdn.caratlane.com/media/catalog/product/J/R/JR09750-8YP900_3_lar.jpg"
                                alt="All bangles"
                                className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-xl object-cover shadow-md mb-2"
                            />
                            <p className="text-xs sm:text-sm text-purple-900 font-medium">All bangles</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img
                                src="https://cdn.caratlane.com/media/catalog/product/U/R/UR00065-PT0000_1_lar.jpg"
                                alt="All pendants"
                                className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-xl object-cover shadow-md mb-2"
                            />
                            <p className="text-xs sm:text-sm text-purple-900 font-medium">All pendants</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <img
                                src="https://cdn.caratlane.com/media/catalog/product/K/R/KR01963-2Y0000_4_lar.jpg"
                                alt="All necklaces"
                                className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-xl object-cover shadow-md mb-2"
                            />
                            <p className="text-xs sm:text-sm text-purple-900 font-medium">All necklaces</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelatedCategories
