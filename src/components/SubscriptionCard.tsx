
import React from 'react';

const SubscriptionCard= () => {
  return (
    <div className="bg-white rounded-[40px] p-0 shadow-sm border border-gray-100 overflow-hidden min-h-[280px] flex flex-col">
      {/* Tabs */}
      <div className="flex border-b border-gray-100 bg-gray-50/50">
        <div className="flex-1 py-4 text-center font-black text-sm bg-[#00BF00] text-white shadow-md">الاشتراكات الحالية</div>
        <div className="flex-1 py-4 text-center font-bold text-sm text-gray-400 hover:bg-white cursor-pointer transition-colors">منافعي</div>
        <div className="flex-1 py-4 text-center font-bold text-sm text-gray-400 hover:bg-white cursor-pointer transition-colors">حاسبة التقاعد</div>
      </div>

      <div className="p-8 flex flex-col flex-1 justify-between">
        <div className="flex items-start justify-between">
           <div className="flex flex-col items-start gap-4">
             <div className="flex items-center gap-2">
               <span className="px-4 py-1.5 bg-[#0070f3] text-white rounded-lg text-xs font-black shadow-md uppercase tracking-wider">اشتراك نشط</span>
             </div>
             <div className="flex flex-col">
                <span className="text-gray-400 text-xs font-bold mb-2">الأجر الخاضع للاشتراك</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-[#0a1e3b]">1,400.00</span>
                  <span className="text-base font-bold text-gray-400 italic">ريال / الشهر</span>
                </div>
             </div>
           </div>

           <div className="text-[#8BC34A] bg-[#f1f8e9] p-4 rounded-3xl mt-2">
              <svg className="w-10 h-10 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 013 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11"/></svg>
           </div>
        </div>

        <div className="flex items-center justify-center gap-1.5 mt-4">
           <div className="h-2 w-2 rounded-full bg-gray-200"></div>
           <div className="h-2 w-6 rounded-full bg-[#8BC34A]"></div>
           <div className="h-2 w-2 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
