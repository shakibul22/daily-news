import { Clock, ThumbsUp } from "lucide-react"
import RightSidebar from "./right-sidebar"
import ArchivePosts from "./tab"
import LatestNewsSection from "./latest-news-section"

export default function NewsSection() {
  return (
    <section className="">
      <div >
        <div className="gap-6 md:gap-8 relative">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
           {/* Technology Card */}
          <div className=" bg-white rounded shadow h-fit">
            <div className="flex items-center mb-4 px-4 md:px-6 pt-4 md:pt-6">
              <span className="w-4 h-4 md:w-5 md:h-5 bg-[#ff3c1a] mr-2 md:mr-3 inline-block"></span>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">Technology</h2>
            </div>
            <div className="relative">
              <img src="/technology.jpg" alt="Technology" className="w-full h-48 md:h-64 object-cover" />
              <span className="absolute top-2 md:top-4 right-2 md:right-4 bg-teal-600 text-white px-2 md:px-4 py-0.5 md:py-1 rounded font-bold text-sm md:text-base">
                Technology
              </span>
            </div>
            <div className="px-4 md:px-6 pb-4 md:pb-6 pt-3 md:pt-4">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                Google is on a journey but we won't really know where it leads until fall
              </h3>
              <p className="text-gray-500 mb-3 md:mb-4 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <div className="flex items-center space-x-2 mb-2">
                <img
                  src="/technology.jpg"
                  alt="asdasd"
                  className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-full"
                />
                <div>
                  <div className="text-sm font-semibold text-gray-700">
                    Google is on a journey but we won't really know
                  </div>
                  <div className="flex items-center text-xs text-gray-400 space-x-2">
                    <span className="flex items-center space-x-1">
                      <Clock size={10} className="md:w-3 md:h-3" />
                      <span>25 Dec, 2016</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <ThumbsUp size={10} className="md:w-3 md:h-3" />
                      <span>20</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* World News Card */}
          <div className=" bg-white rounded shadow h-fit">
            <div className="flex items-center mb-4 px-4 md:px-6 pt-4 md:pt-6">
              <span className="w-4 h-4 md:w-5 md:h-5 bg-[#ff3c1a] mr-2 md:mr-3 inline-block"></span>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">World News</h2>
            </div>
            <div className="relative">
              <img src="/technology.jpg" alt="World News" className="w-full h-48 md:h-64 object-cover" />
              <span className="absolute top-2 md:top-4 right-2 md:right-4 bg-teal-600 text-white px-2 md:px-4 py-0.5 md:py-1 rounded font-bold text-sm md:text-base">
                World
              </span>
            </div>
            <div className="px-4 md:px-6 pb-4 md:pb-6 pt-3 md:pt-4">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                Turkey's Erdogan to drop lawsuits against people who insulted him
              </h3>
              <p className="text-gray-500 mb-3 md:mb-4 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <div className="flex items-center space-x-2 mb-2">
                <img
                  src="/technology.jpg"
                  alt="Related"
                  className="w-8 h-8 md:w-10 md:h-10 object-cover rounded-full"
                />
                <div>
                  <div className="text-sm font-semibold text-gray-700">Turkey's Erdogan to drop lawsuits against</div>
                  <div className="flex items-center text-xs text-gray-400 space-x-2">
                    <span className="flex items-center space-x-1">
                      <Clock size={10} className="md:w-3 md:h-3" />
                      <span>25 Dec, 2016</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <ThumbsUp size={10} className="md:w-3 md:h-3" />
                      <span>20</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </div>
<LatestNewsSection/>
        <ArchivePosts/>

    
        </div>
      </div>
    </section>
  )
}
