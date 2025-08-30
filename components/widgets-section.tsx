import { Facebook, Twitter, Linkedin, Rss } from "lucide-react"

export default function WidgetsSection() {
  return (
    <div className="bg-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Full-width row: Trending, Categories, Recent Posts */}
        <div className="w-full mb-6 md:mb-8">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
            {/* Trending Widget */}
            <div className="widget bg-white rounded-lg shadow-md p-4 md:p-6 flex-1">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-800">Trending</h3>
              <div className="space-y-3 md:space-y-4">
                {Array.from({ length: 3 }, (_, index) => (
                  <div key={index} className="flex space-x-3">
                    <img
                      src={`/trending-topic.png?key=hko55&height=60&width=80&query=trending ${index + 1}`}
                      alt="Trending"
                      className="w-16 h-12 md:w-20 md:h-15 object-cover rounded flex-shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Post</span>
                      <h4 className="text-sm font-medium mt-1 hover:text-red-500 transition-colors line-clamp-2">
                        <a href="/post-detail">Lorem ipsum dolor a amet comodo</a>
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories Widget */}
            <div className="widget bg-white rounded-lg shadow-md p-4 md:p-6 flex-1">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-800">Categories</h3>
              <ul className="space-y-2">
                {[
                  { name: "Lifestyle", count: 12 },
                  { name: "Travel", count: 22 },
                  { name: "Fashion", count: 37 },
                  { name: "Music", count: 42 },
                  { name: "Branding", count: 5 },
                ].map((category, index) => (
                  <li key={index}>
                    <a
                      href={`/category/${category.name.toLowerCase()}`}
                      className="flex justify-between items-center text-gray-600 hover:text-red-500 transition-colors text-sm md:text-base"
                    >
                      <span>{category.name}</span>
                      <span className="text-sm">({category.count})</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts Widget */}
            <div className="widget bg-white rounded-lg shadow-md p-4 md:p-6 flex-1">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-800">Recent Posts</h3>
              <div className="space-y-3 md:space-y-4">
                {Array.from({ length: 3 }, (_, index) => (
                  <div key={index} className="flex space-x-3">
                    <img
                      src={`/recent-post-.png?key=j73v2&height=50&width=70&query=recent post ${index + 1}`}
                      alt="Recent Post"
                      className="w-12 h-10 md:w-16 md:h-12 object-cover rounded flex-shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <a
                        href="/post-detail"
                        className="text-sm font-medium hover:text-red-500 transition-colors block line-clamp-2"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </a>
                      <span className="text-xs text-gray-500">25 Dec, 2016</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Full-width row: Follow Us */}
        <div className="w-full mb-6 md:mb-8">
          <div className="widget bg-white rounded-lg shadow-md p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-800">Follow Us</h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-blue-600 text-white rounded flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-400 text-white rounded flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-blue-700 text-white rounded flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-orange-500 text-white rounded flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <Rss size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
