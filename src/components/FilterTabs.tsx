import React, { useState } from 'react'
import tabs from '../data/filter'

const FilterTabs = () => {
  const [selectedTab, setSelectedTab] = useState<string>('All');

  return (
    <div>
      <div className="mb-8 mt-4">
        <div className="px-4"> {/* Removed border-b */}
          <nav className="flex gap-6"> {/* Removed -mb-px */}
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setSelectedTab(tab.name)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  selectedTab === tab.name
                    ? 'bg-[#1c1442] text-white'
                    : 'bg-[#E7E8EF] text-gray-600 hover:bg-[#58529e] hover:text-white'
                }`}
              >
                <span
                  className={`transition-colors duration-200 ${
                    selectedTab === tab.name ? 'text-white' : 'hover:text-white'
                  }`}
                >
                  {tab.name}
                </span>
                <span
                  className={`ml-2 transition-colors duration-200 ${
                    selectedTab === tab.name ? 'text-white' : 'hover:text-white'
                  }`}
                >
                  ({tab.count})
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default FilterTabs;
