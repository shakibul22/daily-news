'use client'
import { useState } from "react"
import { Clock, Heart, MessageCircle, User } from "lucide-react"


interface NewsPost {
  id: string
  title: string
  author: string
  timeAgo: string
  likes: number
  comments: number
  image: string
}

interface RelatedPost {
  id: string
  title: string
}

interface MonthData {
  posts: NewsPost[]
  relatedPosts: RelatedPost[]
}

const months: string[] = [
  "january", "february", "march", "april", 
  "may", "june", "july", "august"
]

// Example data for each month
const monthsData: Record<string, MonthData> = {
  january: {
    posts: [
      {
        id: "1",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        author: "Jessica Alex",
        timeAgo: "10 Min Ago",
        likes: 20,
        comments: 15,
        image: '/news1.jpg',
      },
    ],
    relatedPosts: [
      { id: "r1", title: "Related news 1" },
      { id: "r2", title: "Related news 2" },
    ],
  },
  february: {
    posts: [
      {
        id: "2",
        title: "Winter sports coverage and analysis highlights",
        author: "Michael Johnson",
        timeAgo: "2 Hours Ago",
        likes: 35,
        comments: 12,
         image: '/news2.jpg',
      },
    ],
    relatedPosts: [
      { id: "r1", title: "Winter Olympics updates" },
      { id: "r2", title: "Skiing championship results" },
    ],
  },
  march: {
    posts: [
      {
        id: "3",
        title: "Spring training begins with new roster changes",
        author: "Sarah Wilson",
        timeAgo: "1 Day Ago",
        likes: 50,
        comments: 20,
        image: '/news3.jpg',
      },
    ],
    relatedPosts: [
      { id: "r1", title: "Baseball season preview" },
      { id: "r2", title: "New player signings" },
    ],
  },
  april: {
    posts: [
      {
        id: "4",
        title: "Championship series kicks off with fan excitement",
        author: "David Chen",
        timeAgo: "3 Days Ago",
        likes: 45,
        comments: 30,
        image: '/news4.jpg',
      },
    ],
    relatedPosts: [
      { id: "r1", title: "Playoff bracket predictions" },
      { id: "r2", title: "Star player injury update" },
    ],
  },
  may: {
    posts: [
      {
        id: "5",
        title: "Mid-season analysis shows surprising team performance",
        author: "Lisa Rodriguez",
        timeAgo: "5 Days Ago",
        likes: 25,
        comments: 18,
        image: '/news3.jpg',
      },
    ],
    relatedPosts: [
      { id: "r1", title: "MVP candidate discussions" },
      { id: "r2", title: "Trade deadline approaches" },
    ],
  },
  june: {
    posts: [
      {
        id: "6",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        author: "Jessica Alex",
        timeAgo: "10 Min Ago",
        likes: 20,
        comments: 15,
         image: '/news4.jpg',
      },
    ],
    relatedPosts: [
      { id: "r1", title: "James blake fires officer" },
      { id: "r2", title: "Prison incident follows earlier" },
    ],
  },
  july: {
    posts: [
      {
        id: "7",
        title: "Summer league showcases emerging talent",
        author: "Tom Anderson",
        timeAgo: "1 Week Ago",
        likes: 55,
        comments: 22,
       image: '/news2.jpg',
      },
    ],
    relatedPosts: [
      { id: "r1", title: "Draft picks performing well" },
      { id: "r2", title: "Summer training programs" },
    ],
  },
  august: {
    posts: [
      {
        id: "8",
        title: "Season finale approaches with intense competition",
        author: "Emma Thompson",
        timeAgo: "2 Weeks Ago",
        likes: 75,
        comments: 40,
        image: '/news1.jpg',
      },
    ],
    relatedPosts: [
      { id: "r1", title: "Final standings predictions" },
      { id: "r2", title: "Playoff scenarios explained" },
    ],
  },
}

const ArchivePosts: React.FC = () => {
  const [activeMonth, setActiveMonth] = useState<string>("june")

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="w-4 h-4 bg-accent rounded-sm"></div>
        <h2 className="text-2xl font-bold text-gray-900">Archive Posts</h2>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap mb-8 gap-2">
        {months.map((month, idx) => (
          <button
            key={idx}
            onClick={() => setActiveMonth(month)}
            className={`capitalize px-3 py-1 rounded ${
              activeMonth === month
                ? "bg-accent text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {month}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Post */}
          <div className="lg:col-span-2 space-y-6">
            {monthsData[activeMonth]?.posts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded shadow overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
                    16
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.timeAgo}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Related Posts */}
          <div className="lg:col-span-1 space-y-3">
            {monthsData[activeMonth]?.relatedPosts.map((relatedPost) => (
              <div
                key={relatedPost.id}
                className="flex items-start gap-2 cursor-pointer group"
              >
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 group-hover:text-blue-600 transition-colors text-sm leading-relaxed">
                  {relatedPost.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArchivePosts
