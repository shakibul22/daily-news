"use client"

import { useState } from "react"
import { User, Clock, ChevronLeft, ChevronRight } from "lucide-react"

export default function RightSidebar() {
  const [activeTab, setActiveTab] = useState("fixtures")
  const [currentSliderIndex, setCurrentSliderIndex] = useState(0)

  const popularPosts = [
    {
      id: 1,
      title: "Throughout life people will make you mad, disrespect you and treat you bad",
      author: "jessica alex",
      date: "5 Min ago",
      image: "/news-thumbnail.png",
    },
    {
      id: 2,
      title: "Let God deal with the things they do, cause hate in your heart will consume you",
      author: "john doe",
      date: "10 Min ago",
      image: "/news-thumbnail.png",
    },
    {
      id: 3,
      title: "Very little is needed to make a happy life it is all within yourself",
      author: "sarah wilson",
      date: "15 Min ago",
      image: "/news-thumbnail.png",
    },
  ]

  const categories = [
    { name: "fashion", count: 15, color: "bg-green-500" },
    { name: "world", count: 15, color: "bg-red-500" },
    { name: "technology", count: 15, color: "bg-blue-500" },
    { name: "health", count: 15, color: "bg-orange-500" },
    { name: "lifestyle", count: 15, color: "bg-gray-500" },
    { name: "sports", count: 15, color: "bg-purple-500" },
  ]

  const sliderImages = ["/slider-image-1.png", "/slider-image-2.png", "/slider-image-3.png"]

  const nextSliderImage = () => {
    setCurrentSliderIndex((prev) => (prev + 1) % sliderImages.length)
  }

  const prevSliderImage = () => {
    setCurrentSliderIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)
  }

  return (
    <div className="space-y-8">
        <div className="bg-white rounded shadow">
              <div className="flex items-center mb-4 px-4 md:px-6 pt-4 md:pt-6 border-b border-gray-200 pb-2">
                <span className="w-4 h-4 md:w-5 md:h-5 bg-[#ff3c1a] mr-2 md:mr-3 inline-block"></span>
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">Our Authors</h2>
              </div>
              <div className="flex flex-col items-center py-4 md:py-6">
                <div className="flex -space-x-4 md:-space-x-6 mb-3 md:mb-4">
                  <img
                    src="/technology.jpg"
                    alt="Author"
                    className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-full border-4 border-white shadow"
                  />
                  <img
                    src="/technology.jpg"
                    alt="Author"
                    className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full border-4 border-white shadow"
                  />
                  <img
                    src="/technology.jpg"
                    alt="Author"
                    className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full border-4 border-white shadow"
                  />
                </div>
                <div className="text-center px-4">
                  <div className="text-lg md:text-xl font-semibold text-gray-800">James Watson</div>
                  <div className="text-gray-400 text-sm mb-2">Admin, photographer</div>
                  <div className="text-gray-500 text-sm md:text-base">
                    Lorem ipsum dolor sit ameting elit consectetur adipisicing elit, sed eiusmod.
                  </div>
                </div>
              </div>
            </div>

            {/* Social Followers Grid */}
            <div className="grid grid-cols-3 gap-0 rounded overflow-hidden shadow">
              {[
                { bg: "bg-[#3b5998]", icon: "fab fa-facebook-f", name: "Facebook" },
                { bg: "bg-[#dd4b39]", icon: "fab fa-google-plus-g", name: "Google+" },
                { bg: "bg-[#e60023]", icon: "fab fa-pinterest-p", name: "Pinterest" },
                { bg: "bg-[#00acee]", icon: "fab fa-twitter", name: "Twitter" },
                { bg: "bg-[#00aff0]", icon: "fab fa-skype", name: "Skype" },
                { bg: "bg-[#ff0000]", icon: "fab fa-youtube", name: "YouTube" },
              ].map((social, index) => (
                <div
                  key={index}
                  className={`${social.bg} text-white flex flex-col items-center justify-center py-3 md:py-4`}
                >
                  <i className={`${social.icon} text-lg md:text-2xl mb-1`}></i>
                  <div className="text-xs">Followers</div>
                  <div className="font-bold text-sm md:text-lg">100</div>
                </div>
              ))}
            </div>
      {/* Popular Posts Widget */}
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-red-600">Popular Posts</h3>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <article key={post.id} className="flex space-x-4 group">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 group-hover:text-red-600 transition-colors mb-2">
                  <a href="#">{post.title}</a>
                </h4>
                <div className="flex items-center gap-3 text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <User size={12} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Calendar Widget */}
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-red-600">Archive</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800 mb-2">December 2016</div>
            <div className="grid grid-cols-7 gap-1 text-sm">
              {["S", "M", "T", "W", "T", "F", "S"].map((day,idx) => (
                <div key={idx} className="p-2 text-center font-semibold text-gray-600">
                  {day}
                </div>
              ))}
              {Array.from({ length: 31 }, (_, i) => (
                <div
                  key={i + 1}
                  className="p-2 text-center hover:bg-red-600 hover:text-white rounded cursor-pointer transition-colors"
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slider Widget */}
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-red-600">Slider Widget</h3>
        <div className="relative">
          <div className="overflow-hidden rounded-lg mb-4">
            <img
              src={sliderImages[currentSliderIndex] || "/placeholder.svg"}
              alt="Slider"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={prevSliderImage}
              className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex space-x-1">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSliderIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSliderIndex ? "bg-red-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSliderImage}
              className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">
              <a href="#" className="hover:text-red-600 transition-colors">
                Girl yoyo Music listing
              </a>
            </h4>
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
              <div className="flex items-center gap-1">
                <User size={14} />
                <span>jessica alex</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>5 Min ago</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor siting amet consec adipisicing elit, sed do eiusmod.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Widget */}
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-red-600">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.name} className="flex items-center justify-between group">
              <a href="#" className="text-gray-700 hover:text-red-600 transition-colors capitalize font-medium">
                {category.name}
              </a>
              <span className={`${category.color} text-white px-2 py-1 rounded-full text-xs font-semibold`}>
                {category.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Sports News Widget */}
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-red-600">Sports News</h3>
        <div className="mb-4">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("fixtures")}
              className={`px-4 py-2 font-semibold transition-colors ${
                activeTab === "fixtures" ? "text-red-600 border-b-2 border-red-600" : "text-gray-600 hover:text-red-600"
              }`}
            >
              Last Match
            </button>
            <button
              onClick={() => setActiveTab("result")}
              className={`px-4 py-2 font-semibold transition-colors ${
                activeTab === "result" ? "text-red-600 border-b-2 border-red-600" : "text-gray-600 hover:text-red-600"
              }`}
            >
              Upcoming
            </button>
          </div>
        </div>
        <div className="space-y-4">
          {activeTab === "fixtures" ? (
            <div className="text-center py-8 text-gray-600">
              <p>Last match results will be displayed here</p>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-600">
              <p>Upcoming matches will be displayed here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
