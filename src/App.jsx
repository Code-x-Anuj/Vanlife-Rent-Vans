import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home.jsx"
import About from "./Pages/About.jsx"
import Vans from "./Pages/Vans/Vans.jsx"
import Layout from "./components/Layout.jsx"

import "./server.js"
import VanDetails from "./Pages/Vans/VanDetails.jsx"
import Dashboard from "./Pages/Host/Dashboard.jsx"
import Income from "./Pages/Host/Income.jsx"
import Reviews from "./Pages/Host/Reviews.jsx"
import HostLayout from "./components/HostLayout.jsx"
import HostVans from "./Pages/Host/HostVans.jsx"
import HostVanDetail from "./Pages/Host/HostVanDetail.jsx"

import HostVanInfo from "./Pages/Host/HostVanInfo.jsx"
import HostVanPhotos from "./Pages/Host/HostVanPhotos.jsx"
import HostVanPricing from "./Pages/Host/HostVanPricing.jsx"

function App() {


  return (
    <>
    
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home/>} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetails />} />

            <Route path="host" element={<HostLayout />} >
              <Route index element={<Dashboard />} />
              <Route path  ="income" element={<Income />} />
              <Route path ="reviews" element={<Reviews />} />
              <Route path ="vans" element={<HostVans />} />
              <Route path ="vans/:id" element={<HostVanDetail />} >
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>

            </Route>
          </Route>
        </Routes>
      
      </BrowserRouter>  
                   
    
    </>
  )
}

export default App
