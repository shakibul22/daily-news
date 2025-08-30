import { User, Clock, ThumbsUp, MessageCircle } from "lucide-react"

export default function LatestNewsSection() {
  return (
    <main className=" py-8 md:py-12 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="p mb-12 md:mb-16">
              <div className="widget-title mb-6 md:mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Sports News</h3>
              </div>

              <div className="flex flex-wrap -mx-4">
                <div className="w-full  px-4">
                  <div className="grid grid-cols-1 gap-6 md:gap-8">
                    {Array.from({ length: 4 }, (_, index) => (
                      <article
                        key={index}
                        className="post bg-white flex rounded-lg border overflow-hidden hov"
                      >
                        <div className="relative">
                          <img
                            src={`/technology.jpg`}
                            alt="News Article"
                            className="w-full h-40 md:h-48 object-cover"
                          />
                          <span className="absolute top-2 md:top-4 left-2 md:left-4 bg-red-500 text-white px-2 md:px-3 py-0.5 md:py-1 rounded text-xs md:text-sm font-medium">
                            Lifestyle
                          </span>
                        </div>

                        <div className="p-4 md:p-6">
                          <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 hover:text-red-500 transition-colors line-clamp-2">
                            <a href="/post-detail">Lorem ipsum dolor a amet comodo in the conseq</a>
                          </h4>
                          <ul className="flex items-center space-x-2 md:space-x-4 text-xs md:text-sm text-gray-500 mb-2 md:mb-3">
                            <li className="flex items-center space-x-1">
                              <User size={12} className="md:w-3.5 md:h-3.5" />
                              <span className="hidden sm:inline">Jessica Alex</span>
                              <span className="sm:hidden">Jessica</span>
                            </li>
                            <li className="flex items-center space-x-1">
                              <Clock size={12} className="md:w-3.5 md:h-3.5" />
                              <span className="hidden sm:inline">25 Dec, 2016</span>
                              <span className="sm:hidden">25 Dec</span>
                            </li>
                            <li className="flex items-center space-x-1">
                              <ThumbsUp size={12} className="md:w-3.5 md:h-3.5" />
                              <span>20</span>
                            </li>
                            <li className="flex items-center space-x-1">
                              <MessageCircle size={12} className="md:w-3.5 md:h-3.5" />
                              <span>20</span>
                            </li>
                          </ul>
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget
                            malesuada. Donec rutrum congue leo eget malesuada.
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                {/* <div className="w-full lg:w-1/3 px-4 mt-8 lg:mt-0">
                  <div className="space-y-6 md:space-y-8">
                    {Array.from({ length: 4 }, (_, index) => (
                      <article
                        key={index}
                        className="post bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className="relative">
                          <img
                            src={`/sidebar-news-.png?key=evx0y&height=150&width=300&query=sidebar news ${index + 1}`}
                            alt="Sidebar News"
                            className="w-full h-24 md:h-32 object-cover"
                          />
                          <span className="absolute top-1 md:top-2 left-1 md:left-2 bg-blue-500 text-white px-1.5 md:px-2 py-0.5 md:py-1 rounded text-xs font-medium">
                            Tech
                          </span>
                        </div>

                        <div className="p-3 md:p-4">
                          <h4 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 hover:text-red-500 transition-colors line-clamp-2">
                            <a href="/post-detail">Lorem ipsum dolor a amet comodo conseq</a>
                          </h4>
                          <ul className="flex items-center space-x-2 md:space-x-3 text-xs text-gray-500">
                            <li className="flex items-center space-x-1">
                              <User size={10} className="md:w-3 md:h-3" />
                              <span>Jessica</span>
                            </li>
                            <li className="flex items-center space-x-1">
                              <Clock size={10} className="md:w-3 md:h-3" />
                              <span>25 Dec</span>
                            </li>
                            <li className="flex items-center space-x-1">
                              <ThumbsUp size={10} className="md:w-3 md:h-3" />
                              <span>20</span>
                            </li>
                          </ul>
                        </div>
                      </article>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
