import React from 'react'
import { CalendarDays, ListFilter } from 'lucide-react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
const Searchbar = () => {
  return (
    <div>
        <div className="bg-white px-3 py-3 mx-4 shadow-sm border border-gray-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex flex-1 items-center gap-4 relative ml-100">
              <input
                type="text"
                placeholder="Search"
                className="w-full sm:max-w-md rounded-md border border-gray-300 bg-[#F8FAFB] pl-10 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-[0px_0px_4px_2px_rgba(0,0,0,0.1)]"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-600" />
              </div>

              <button className="rounded-md border border-gray-300 bg-[#E7E8EF] p-2 hover:bg-gray-100">
                <CalendarDays
                  width={24}
                  height={24}
                  stroke="#1C1442"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />

              </button>

              <button className="rounded-md border border-gray-300 bg-[#E7E8EF] p-2 hover:bg-gray-100">
                <ListFilter
                  width={24}
                  height={24}
                  stroke="#1C1442"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />

              </button>
            </div>

            <button className="rounded-md bg-[#1c1442] px-2 py-2 text-sm font-medium text-white hover:bg-[#58529e] cursor-pointer transition mr-5">
              Add New Story
            </button>
          </div>
        </div>
    </div>
  )
}

export default Searchbar