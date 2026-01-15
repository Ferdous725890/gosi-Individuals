
import React from 'react';

const Header= () => {
  return (
    <header className="h-32 px-8 flex flex-col justify-center">
      <div className="flex items-start justify-between">
        
        {/* Right Section: User Identity */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3">
            <div className="flex flex-col text-right">
              <span className="text-sm font-medium text-[#0a1e3b]">مساء الخير MOHAMMAD ALAMIN GOLAP</span>
              <span className="text-[10px] font-bold text-gray-400 self-end">MIA</span>
            </div>
            <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center font-bold text-[#0a1e3b] shadow-sm border border-gray-100 text-lg">
              MIA
            </div>
          </div>
          <span className="text-sm text-[#0070f3] font-bold mt-2">كيف يمكننا مساعدتك اليوم؟</span>
        </div>

        {/* Middle Section: Search Input */}
        <div className="flex-1 max-w-sm mx-8 mt-1">
          <div className="relative">
            <input 
              type="text" 
              placeholder="ابحث هنا"
              className="w-full bg-white border border-gray-200 rounded-full py-2.5 px-10 text-right text-sm focus:outline-none focus:ring-1 focus:ring-[#8BC34A] shadow-sm text-[#0a1e3b]"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
               <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
          </div>
        </div>

        {/* Left Section: Nav Buttons & Icons */}
        <div className="flex items-center gap-3 mt-1">
          <button className="bg-[#e8f5e9] text-[#2e7d32] px-5 py-2 rounded-full text-xs font-bold flex items-center gap-2 border border-[#8BC34A]/30 hover:bg-[#c8e6c9] transition-all whitespace-nowrap">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            العودة للموقع الرئيسي
          </button>

          <button className="bg-white border border-gray-200 px-4 py-2 rounded-full text-xs font-bold text-gray-500 hover:bg-gray-50 flex items-center gap-2 shadow-sm whitespace-nowrap">
             <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
             إخفاء المعلومات
          </button>

          <div className="flex gap-2">
            <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center border border-gray-100 text-gray-400 hover:text-[#0a1e3b] shadow-sm">
               <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </button>
            <button className="h-9 w-9 bg-white rounded-full flex items-center justify-center border border-gray-100 text-gray-400 hover:text-[#0a1e3b] shadow-sm">
               <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
