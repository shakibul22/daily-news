"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, User, Clock, ThumbsUp, MessageCircle } from "lucide-react"

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
const [hoveredMain, setHoveredMain] = useState<number | null>(null);
const [hoveredSide, setHoveredSide] = useState<number | null>(null);


  const mainSlides = [
    {
      id: 1,
      image: "/lifestyle-news-banner.png",
      category: "lifestyle",
      title: "Throughout life people will make you mad...",
      author: "jessica alex",
      date: "25 dec, 2016",
      likes: 20,
      comments: 20,
    },
    {
      id: 2,
      image: "/technology-news-banner.png",
      category: "technology",
      title: "Innovation and technology are reshaping our world...",
      author: "john doe",
      date: "26 dec, 2016",
      likes: 35,
      comments: 15,
    },
    {
      id: 3,
      image: "/world-news-banner.png",
      category: "world",
      title: "Global events continue to shape our understanding...",
      author: "sarah wilson",
      date: "27 dec, 2016",
      likes: 28,
      comments: 12,
    },
       { id: 4, image: "/fashion-news.png", category: "fashion", title: "Very little is needed...", author: "jessica alex", date: "25 dec, 2016", likes: 20 },
  ]

  const sideNews = [
    { id: 1, image: "/corporate-news.png", category: "corporate", title: "Very little is needed...", author: "jessica alex", date: "25 dec, 2016", likes: 20 },
    { id: 2, image: "/glamour-news.png", category: "glamour", title: "Very little is needed...", author: "jessica alex", date: "25 dec, 2016", likes: 20 },
    { id: 3, image: "/world-news-collage.png", category: "world", title: "Very little is needed...", author: "jessica alex", date: "25 dec, 2016", likes: 20 },
    { id: 4, image: "/fashion-news.png", category: "fashion", title: "Very little is needed...", author: "jessica alex", date: "25 dec, 2016", likes: 20 },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mainSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [mainSlides.length])



  return (
    <div className="bg-gray-100">
      <div className="container mx-auto md:max-w-none md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Main Slider */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {mainSlides.map((slide, index) => (
                <div key={slide.id} className="w-full flex-shrink-0 relative">
                  <img
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    onMouseEnter={() => setHoveredMain(index)}
                    onMouseLeave={() => setHoveredMain(null)}
                    className={`w-full h-96 lg:h-[700px] object-cover transform transition-transform duration-500 ${
                      hoveredMain === index ? "scale-110" : "scale-100"
                    }`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <span className="inline-block bg-red-600 px-3 py-1 text-sm font-semibold rounded mb-3">
                        {slide.category}
                      </span>
                      <h3 className="text-xl lg:text-2xl font-bold mb-4 line-clamp-3">
                        <a href="#" className="hover:text-red-400 transition-colors">
                          {slide.title}
                        </a>
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <div className="flex items-center gap-1"><User size={16} /><span>{slide.author}</span></div>
                        <div className="flex items-center gap-1"><Clock size={16} /><span>{slide.date}</span></div>
                        <div className="flex items-center gap-1"><ThumbsUp size={16} /><span>{slide.likes}</span></div>
                        <div className="flex items-center gap-1"><MessageCircle size={16} /><span>{slide.comments}</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows & Dots */}
            
          </div>

          {/* Side News */}
          <div className="grid grid-cols-2 gap-0">
            {sideNews.map((news, index) => (
              <div key={news.id} className={`relative overflow-hidden ${index >= 3 ? "hidden lg:block" : ""}`}>
                <img
                  src={news.image || "/placeholder.svg"}
                  alt={news.title}
                  onMouseEnter={() => setHoveredSide(index)}
                  onMouseLeave={() => setHoveredSide(null)}
                  className={`w-full h-48 lg:h-[350px] object-cover transform transition-transform duration-500 ${
                    hoveredSide === index ? "scale-110" : "scale-100"
                  }`}
                />
                <span className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 text-xs font-semibold rounded">{news.category}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h5 className="text-sm font-bold mb-2 line-clamp-2">
                      <a href="#" className="hover:text-red-400 transition-colors">{news.title}</a>
                    </h5>
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <div className="flex items-center gap-1"><User size={12} /><span>{news.author}</span></div>
                      <div className="flex items-center gap-1"><Clock size={12} /><span>{news.date}</span></div>
                      <div className="flex items-center gap-1"><ThumbsUp size={12} /><span>{news.likes}</span></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
