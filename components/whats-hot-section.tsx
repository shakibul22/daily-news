'use client'
import { useRef, useEffect } from "react"
import { User, Clock, ThumbsUp, ChevronLeft, ChevronRight } from "lucide-react"

export default function WhatsHotCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null)

  // Original items
  const items = [1, 2, 3, 4]

  // Duplicate items for infinite scroll
  const carouselItems = [...items, ...items]

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return
    const cardWidth = carouselRef.current.children[0].clientWidth + 16
    if (direction === "left") {
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" })
    } else {
      carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth" })
    }
  }

  const handleScroll = () => {
    if (!carouselRef.current) return
    const scrollLeft = carouselRef.current.scrollLeft
    const scrollWidth = carouselRef.current.scrollWidth / 2
    if (scrollLeft >= scrollWidth) {
      carouselRef.current.scrollLeft = scrollLeft - scrollWidth
    } else if (scrollLeft <= 0) {
      carouselRef.current.scrollLeft = scrollLeft + scrollWidth
    }
  }

  useEffect(() => {
    const ref = carouselRef.current
    if (!ref) return
    ref.addEventListener("scroll", handleScroll)
    return () => ref.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="bg-[#f5f5f5] py-6 md:py-10">
      <div className="max-w-[340px] md:max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <div className="flex items-center">
            <span className="w-4 h-4 md:w-5 md:h-5 bg-[#ff3c1a] mr-2 md:mr-3 inline-block"></span>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
              What's Hot Right Now
            </h2>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 bg-white rounded shadow hover:bg-gray-100 transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 bg-white rounded shadow hover:bg-gray-100 transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-4 overflow-hidden scroll-smooth snap-x snap-mandatory -mx-4 px-4"
        >
          {carouselItems.map((i, index) => (
            <div
              key={index}
              className="
                flex-shrink-0
                max-w-[320px] sm:w-1/2 md:w-1/3 lg:w-1/4
                bg-white rounded shadow overflow-hidden
                snap-start
              "
            >
              <div className="relative">
                <img
                  src="/car.jpg"
                  alt="Hot Post"
                  className=" object-cover rounded-t"
                />
                <span className="absolute top-2 md:top-3 right-2 md:right-3 bg-teal-600 text-white px-2 md:px-3 py-0.5 md:py-1 rounded font-bold text-xs md:text-sm">
                  Post
                </span>
              </div>
              <div className="p-3 md:p-4 flex flex-col justify-between h-40">
                <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  Full Responsive amazing design And Pixel Perfect
                </h3>
                <div className="flex items-center space-x-2 md:space-x-4 text-gray-500 text-xs md:text-sm">
                  <span className="flex items-center space-x-1">
                    <User size={12} className="md:w-4 md:h-4" />
                    <span className="hidden sm:inline text-xs">Jessica Alex</span>
                    <span className="sm:hidden">Jessica</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock size={12} className="md:w-4 md:h-4" />
                    <span className="hidden sm:inline text-xs">25 Dec, 2016</span>
                    <span className="sm:hidden">25 Dec</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <ThumbsUp size={12} className="md:w-4 md:h-4" />
                    <span>20</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
