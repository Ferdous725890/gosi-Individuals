
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Banner from './components/Banner';
import CertificatesCard from './components/CertificatesCard';
import SubscriptionCard from './components/SubscriptionCard';
import TimelineCard from './components/TimelineCard';

function App() {
  return (
    <div className="min-h-screen flex bg-[#f4f7f9] text-right" dir="rtl">
      {/* Right Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col mr-64 relative">
        {/* Floating Sidebar Toggle Button */}
        <button className="fixed right-60 top-[55%] -translate-y-1/2 bg-[#8BC34A] h-10 w-8 rounded-l-full flex items-center justify-center text-white shadow-lg z-[60] cursor-pointer hover:bg-[#7cb342] transition-colors border-r-0">
           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 5l7 7-7 7M5 5l7 7-7 7"/></svg>
        </button>

        <Header />
        
        <main className="px-8 pb-10 space-y-8">
          <div className="flex gap-6 items-stretch">
            <div className="w-[70%]">
              <Banner />
            </div>
            <div className="w-[30%]">
              <CertificatesCard />
            </div>
          </div>

          <div className="flex gap-6 items-stretch">
            <div className="flex-1">
              <SubscriptionCard />
            </div>
            <div className="flex-1">
              <TimelineCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
