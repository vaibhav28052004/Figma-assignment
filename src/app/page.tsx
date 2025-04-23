"use client";
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import Searchbar from '@/components/Searchbar';
import Cards from '@/components/Cards';
import FilterTabs from '@/components/FilterTabs';







export default function Home() {


  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-gray-50 p-0">
        <Topbar />
        <Searchbar />
        <FilterTabs />
        <Cards/>

        {/* Filter Tabs */}

        


      </main>
    </div>
  );
}
