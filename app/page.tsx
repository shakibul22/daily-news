"use client"

import { useState } from "react"
import Header from "@/components/header"

import BannerSlider from "@/components/banner-slider"
import WhatsHotSection from "@/components/whats-hot-section"

import WidgetsSection from "@/components/widgets-section"
import Footer from "@/components/footer"

import Layout from "@/components/layout"

export default function Home() {
  const [loginModalOpen, setLoginModalOpen] = useState(false)
  const [registerModalOpen, setRegisterModalOpen] = useState(false)
  const [searchModalOpen, setSearchModalOpen] = useState(false)

  return (
    <div className="flex min-h-screen ">
   

      {/* Main Content Area */}
      <div className="flex-1 ">
        <Header
          onLoginClick={() => setLoginModalOpen(true)}
          onRegisterClick={() => setRegisterModalOpen(true)}
          onSearchClick={() => setSearchModalOpen(true)}
        />

        <BannerSlider />
        <WhatsHotSection />
        <Layout/>

       <WidgetsSection />
    
        <Footer />
      </div>

      
    </div>
  )
}
