import React from 'react'
import stories from '@/data/stories'
import { Eye, ChartNoAxesCombined, MoreHorizontal } from 'lucide-react';

const Cards = () => {
  return (
    <div>
        <div className="px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-6">
          {stories.map((story) => (
            <div
              key={story.id}
              className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-md group hover:shadow-lg transition-shadow duration-200"
              style={{
                backgroundImage: `url(${story.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300" />

              {/* Eye + Views in Top Right */}
              <div className="relative flex justify-end gap-2 p-2 z-10">
                <div className="bg-white/70 text-black px-3 py-1 flex items-center text-xs font-medium rounded-sm shadow-sm">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4 text-[#1c1442]" />
                    <span className="text-[#1c1442]">{story.views}</span>
                  </div>
                </div>
                <div className="bg-white/70 text-black px-3 py-1 flex items-center text-xs font-medium rounded-sm shadow-sm">
                  <ChartNoAxesCombined className="w-4 h-4 text-[#1c1442]" />
                </div>
              </div>

              {/* Text Content + Actions */}
              <div className="absolute bottom-0 left-0 w-full p-4 z-10 flex flex-col bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                {/* Title */}
                <h3 className="text-lg font-bold text-white">{story.title}</h3>

                {/* Category, Date & Status */}
                <div className="mt-1 flex items-center justify-between text-white">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-sm">{story.category}</span>
                    <span className="text-xs text-gray-200">{story.date}</span>
                  </div>
                  <span
                    className={`text-xs font-semibold px-4 py-2 rounded-md border
              ${story.status === 'Published' && 'text-green-800 bg-green-100 border-green-800'}
              ${story.status === 'Created' && 'text-blue-800  bg-blue-100  border-blue-800'}
              ${story.status === 'Draft' && 'text-gray-700  bg-gray-200  border-gray-700'}
            `}
                  >
                    {story.status}
                  </span>
                </div>

                {/* ←–– Action Buttons ––→ */}
                <div className="mt-4 flex gap-2">
                  {/* View Button */}
                  <button
                    className="flex-1 py-2 text-sm font-semibold rounded-lg
                       bg-[#E1E3FD] text-[#0F0E0E] hover:opacity-90
                       transition-opacity duration-150"
                  >
                    View
                  </button>

                  {/* More (•••) Button */}
                  <button
                    className="w-10 h-10 flex items-center justify-center rounded-lg
                       bg-white/90 text-[#0F0E0E] hover:bg-white/75
                       transition-colors duration-150"
                  >
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Cards