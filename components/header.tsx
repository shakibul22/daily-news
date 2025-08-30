"use client"

import { User, UserPlus, ShoppingCart, Search, Clock, MessageCircle, Menu } from "lucide-react"
import { useState } from "react"
import Marquee from "./marque"

interface HeaderProps {
  onLoginClick: () => void
  onRegisterClick: () => void
  onSearchClick: () => void
}

export default function Header({ onLoginClick, onRegisterClick, onSearchClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className=" bg-[#23272b]">
      {/* Top Bar with Logo and Nav */}
      <header className=" bg-[#23272b] shadow-md">
        <div className="w-full md:max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="logo-holder flex items-center">
              <a href="/" className="text-2xl md:text-4xl font-extrabold flex items-center">
                <span className="text-white">News</span>
                <span className="text-[#ff3c1a]">Times</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-8">
                <li>
                  <a href="/" className="text-white hover:text-[#ff3c1a] font-semibold transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/category" className="text-white hover:text-[#ff3c1a] font-semibold transition-colors">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="/post" className="text-white hover:text-[#ff3c1a] font-semibold transition-colors">
                    Post
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-white hover:text-[#ff3c1a] font-semibold transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/404" className="text-white hover:text-[#ff3c1a] font-semibold transition-colors">
                    404
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-[#ff3c1a] font-semibold transition-colors">
                    Pages
                  </a>
                </li>
              </ul>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <button onClick={onLoginClick} className="p-2 text-white hover:text-[#ff3c1a] transition-colors">
                <User size={18} className="md:w-5 md:h-5" />
              </button>
              <button onClick={onRegisterClick} className="p-2 text-white hover:text-[#ff3c1a] transition-colors">
                <UserPlus size={18} className="md:w-5 md:h-5" />
              </button>
              <button className="p-2 text-white hover:text-[#ff3c1a] relative transition-colors">
                <ShoppingCart size={18} className="md:w-5 md:h-5" />
                <span className="absolute -top-1 -right-1 bg-[#ff3c1a] text-white text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                  2
                </span>
              </button>
              <button onClick={onSearchClick} className="p-2 text-white hover:text-[#ff3c1a] transition-colors">
                <Search size={18} className="md:w-5 md:h-5" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:text-[#ff3c1a] transition-colors"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden border-t border-gray-600 py-4">
              <ul className="flex flex-col space-y-2">
                <li>
                  <a href="/" className="block py-2 text-white hover:text-[#ff3c1a] font-semibold transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/category"
                    className="block py-2 text-white hover:text-[#ff3c1a] font-semibold transition-colors"
                  >
                    Categories
                  </a>
                </li>
                <li>
                  <a
                    href="/post"
                    className="block py-2 text-white hover:text-[#ff3c1a] font-semibold transition-colors"
                  >
                    Post
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="block py-2 text-white hover:text-[#ff3c1a] font-semibold transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/404" className="block py-2 text-white hover:text-[#ff3c1a] font-semibold transition-colors">
                    404
                  </a>
                </li>
                <li>
                  <a href="#" className="block py-2 text-white hover:text-[#ff3c1a] font-semibold transition-colors">
                    Pages
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </header>

      {/* Breaking News Ticker */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto flex items-center overflow-hidden h-24">
          <span className="bg-[#ff3c1a] text-black px-2 md:px-3 py-1 hidden md:block font-bold text-xs md:text-base whitespace-nowrap rotate-90">
            JUST NOW
          </span>
         <Marquee/>
        </div>
      </div>
    </div>
  )
}
