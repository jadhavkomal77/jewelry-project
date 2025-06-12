
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Rings from './component/HomePage/Rings'
import Earrings from './component/HomePage/Earrings'
import Braceletes_Bangles from './component/HomePage/Braceletes_Bangles'
import Necklaces_Pendants from './component/HomePage/Necklaces_Pendants'
import More_Jwellery from './component/HomePage/More_Jwellery'
import Silverby_Shaya from './component/HomePage/Silverby_Shaya'
import Gifting from './component/HomePage/Gifting'
import Trending from './component/HomePage/Trending'
import Collections from './component/HomePage/Collections'
import ViewFull_Collection from './pages/ViewFull_Collection'
import Layout from './pages/Layout'
import Pages from './pages/Pages'
import Filter_Home from './Filter_page/Filter_Home'
import ProductCard from './Filter_page/ProductCard'
import FilterNavbar from './Filter_page/FilterNavbar'
import Detail_Home from './Details_Pages/Detail_Home'
import DetailNavbar from './Details_Pages/DetailNavbar'
import RateUs from './Details_Pages/RateUs'
import RecentlyViewCard from './Details_Pages/RecentlyViewCard'
import SimilerProduct from './Details_Pages/SimilerProduct'
import FooterDetails from './Details_Pages/FooterDetails'
import RelatedCategories from './Details_Pages/RelatedCategories'


const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Pages />} />
          <Route path='/rings' element={<Rings />} />
          <Route path='/earrings' element={<Earrings />} />
          <Route path='/braceletes' element={<Braceletes_Bangles />} />
          <Route path='/necklaces' element={<Necklaces_Pendants />} />
          <Route path='/morejwellery' element={<More_Jwellery />} />
          <Route path='/necklaces' element={<Necklaces_Pendants />} />
          <Route path='/jwellery' element={<More_Jwellery />} />
          <Route path='/silver' element={<Silverby_Shaya />} />
          <Route path='/gifting' element={<Gifting />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/collections' element={<Collections />} />
          {/* filter pages */}
          <Route path='/filterNavbar' element={<FilterNavbar />} />
          <Route path='/filterhome' element={<Filter_Home />} />
          <Route path='/productcard' element={<ProductCard />} />
          <Route path='/viewCollection' element={<ViewFull_Collection />} />

          {/* Details Page */}
          <Route path='/detailNavbar' element={<DetailNavbar />} />
          <Route path='/detailHome' element={<Detail_Home />} />
          <Route path='/rateUs' element={<RateUs />} />
          <Route path='/recentlyview' element={<RecentlyViewCard />} />
          <Route path='/similerProduct' element={<SimilerProduct />} />
          <Route path='/footerdetail' element={<FooterDetails />} />
          <Route path='/relatedcategories' element={<RelatedCategories />} />

        </Route>
        <Route path='*' element={<h1>Page Not Found</h1>} />


      </Routes>
    </BrowserRouter>
  </>
}

export default App
