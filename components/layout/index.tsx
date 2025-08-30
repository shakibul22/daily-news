import React from 'react'
import NewsSection from '../news-section'
import RightSidebar from '../right-sidebar'
import LeftSidebar from '../left-sidebar'

export default function Layout() {
  return (
   <main className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              
                    <div >
                 <LeftSidebar/>
              </div>
              <div className="lg:col-span-2">
                <NewsSection />
              </div>
              <div className="">
                <RightSidebar/>              </div>
            </div>
          </div>
        </main>

  )
}
