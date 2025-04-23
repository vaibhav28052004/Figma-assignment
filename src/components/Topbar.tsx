import React from 'react'
import Image from 'next/image';



const Topbar = () => {
  return (
    <div className="bg-white px-3 py-5 shadow-sm border border-gray-300 mb-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Back Button and Heading */}
        <div className="flex items-center gap-3">
          <button className="rounded-lg bg-white p-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className="h-7 w-7">
              <path
                style={{ fill: '#212121', stroke: '#212121', strokeWidth: '0.5' }}
                d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z"
                data-name="Left"
              />
            </svg>
          </button>
          <h1 className="text-xl font-semibold text-[#212121]">Stories</h1>
        </div>

        {/* Profile Section */}
        <div className="bg-white shadow-sm border border-gray-300 rounded-md w-full sm:w-[180px] h-[42px] px-4 py-2 flex justify-between items-center cursor-pointer">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 flex-shrink-0 -ml-1">
              <Image
                src="/girlimage.png"
                alt="Profile"
                width={28} // You can adjust the width and height
                height={28} // You can adjust the height as well
                className="object-cover rounded-sm"
              />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-[10px] text-gray-500">Welcome back,</span>
              <span className="text-sm font-bold text-gray-700">Akshita</span>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1E2875" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
    </div>


  )
}

export default Topbar