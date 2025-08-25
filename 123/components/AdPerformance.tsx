import React from 'react';
import { SocialAdData } from '../types';
import DashboardCard from './DashboardCard';
import { MegaphoneIcon, CalendarIcon, UsersIcon, CursorArrowRaysIcon, CheckCircleIcon, CurrencyDollarIcon } from './icons';

interface AdPerformanceProps {
  data: SocialAdData[];
}

const StatItem = ({ icon: Icon, label, value }: { icon: React.FC<any>, label: string, value: string | number }) => (
    <div className="flex items-start">
        <Icon className="w-5 h-5 mr-2 text-slate-400 flex-shrink-0" />
        <div>
            <p className="text-xs text-slate-500 dark:text-slate-400">{label}</p>
            <p className="font-bold text-slate-700 dark:text-slate-200 text-base">{value}</p>
        </div>
    </div>
);

const AdPerformance: React.FC<AdPerformanceProps> = ({ data }) => {

  const sortedData = [...data].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());

  return (
    <DashboardCard title="社群廣告成效分析" icon={MegaphoneIcon}>
        <div className="overflow-y-auto space-y-4 pr-2" style={{ maxHeight: '30rem' }}>
            {sortedData.length > 0 ? sortedData.map(ad => {
                const ctr = ad.reach > 0 ? ((ad.clicks / ad.reach) * 100).toFixed(2) : '0.00';
                const conversionRate = ad.clicks > 0 ? ((ad.conversions / ad.clicks) * 100).toFixed(2) : '0.00';
                const cpc = ad.clicks > 0 ? (ad.cost / ad.clicks).toFixed(2) : '0.00';
                
                return (
                    <div key={ad.id} className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
                        <h3 className="font-semibold text-brand-primary dark:text-sky-400 mb-1">{ad.campaignName}</h3>
                        <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 mb-3">
                            <CalendarIcon className="w-4 h-4 mr-1.5" />
                            {ad.startDate.replace(/-/g, '/')} ~ {ad.endDate.replace(/-/g, '/')}
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-3 gap-x-4 mb-3 border-b border-slate-200 dark:border-slate-600 pb-3">
                           <StatItem icon={UsersIcon} label="觸及" value={ad.reach.toLocaleString()} />
                           <StatItem icon={CursorArrowRaysIcon} label="點擊" value={ad.clicks.toLocaleString()} />
                           <StatItem icon={CheckCircleIcon} label="完成掛號" value={ad.conversions.toLocaleString()} />
                           <StatItem icon={CurrencyDollarIcon} label="費用" value={`$${ad.cost.toLocaleString()}`} />
                        </div>
                         <div className="grid grid-cols-3 gap-4">
                            <div className="text-center bg-white dark:bg-slate-800 p-2 rounded-md">
                                <p className="text-xs text-slate-500 dark:text-slate-400">點擊率 (CTR)</p>
                                <p className="font-bold text-slate-700 dark:text-slate-200">{ctr}%</p>
                            </div>
                             <div className="text-center bg-white dark:bg-slate-800 p-2 rounded-md">
                                <p className="text-xs text-slate-500 dark:text-slate-400">轉換率 (CVR)</p>
                                <p className="font-bold text-slate-700 dark:text-slate-200">{conversionRate}%</p>
                            </div>
                            <div className="text-center bg-white dark:bg-slate-800 p-2 rounded-md">
                                <p className="text-xs text-slate-500 dark:text-slate-400">單次點擊成本 (CPC)</p>
                                <p className="font-bold text-slate-700 dark:text-slate-200">${cpc}</p>
                            </div>
                        </div>
                    </div>
                );
            }) : (
                <div className="flex items-center justify-center h-full text-slate-500 dark:text-slate-400">
                    <p>此期間沒有廣告資料。</p>
                </div>
            )}
        </div>
    </DashboardCard>
  );
};

export default AdPerformance;