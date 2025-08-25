import React, { useState, useMemo } from 'react';
import { VideoData } from '../types';
import DashboardCard from './DashboardCard';
import { VideoIcon, EyeIcon, HeartIcon, ChartBarIcon, TrophyIcon, ChevronUpIcon, ChevronDownIcon } from './icons';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';


interface VideoPerformanceProps {
  data: VideoData[];
}

const StatCard = ({ title, value, icon: Icon }: { title: string, value: string, icon: React.FC<any> }) => (
    <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg flex items-center">
        <div className="bg-brand-primary/10 text-brand-primary p-2 rounded-full mr-4">
            <Icon className="w-6 h-6" />
        </div>
        <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">{title}</p>
            <p className="text-xl font-bold text-slate-800 dark:text-slate-100">{value}</p>
        </div>
    </div>
);

const TabButton = ({ title, isActive, onClick }: { title: string, isActive: boolean, onClick: () => void }) => (
    <button
      onClick={onClick}
      className={`${
        isActive
          ? 'border-brand-primary text-brand-primary dark:border-sky-400 dark:text-sky-400'
          : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-300 dark:hover:border-slate-600'
      } whitespace-nowrap py-2 px-3 border-b-2 font-medium text-sm transition-colors focus:outline-none`}
      aria-current={isActive ? 'page' : undefined}
    >
      {title}
    </button>
);


const VideoPerformance: React.FC<VideoPerformanceProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState('overview');
  type SortKeys = keyof VideoData | 'videoCount' | 'totalViews' | 'totalLikes' | 'name';
  type SortDirection = 'asc' | 'desc';
  const [sortConfig, setSortConfig] = useState<{ key: SortKeys; direction: SortDirection }>({ key: 'views', direction: 'desc' });
  
  const analytics = useMemo(() => {
    if (data.length === 0) {
      return {
        summary: { totalVideos: 0, totalViews: 0, totalLikes: 0, avgViews: 0 },
        topVideos: [],
        departmentData: [],
        doctorData: []
      };
    }

    const summary = {
      totalVideos: data.length,
      totalViews: data.reduce((sum, v) => sum + v.views, 0),
      totalLikes: data.reduce((sum, v) => sum + v.likes, 0),
      avgViews: Math.round(data.reduce((sum, v) => sum + v.views, 0) / data.length),
    };

    const topVideos = [...data].sort((a, b) => b.views - a.views).slice(0, 3);
    
    const departmentMap = new Map<string, { name: string, views: number }>();
    data.forEach(video => {
        const dept = departmentMap.get(video.department) || { name: video.department, views: 0 };
        dept.views += video.views;
        departmentMap.set(video.department, dept);
    });
    const departmentData = Array.from(departmentMap.values()).sort((a, b) => b.views - a.views);

    const doctorMap = new Map<string, { name: string, videoCount: number, totalViews: number, totalLikes: number }>();
    data.forEach(video => {
        const doc = doctorMap.get(video.doctor) || { name: video.doctor, videoCount: 0, totalViews: 0, totalLikes: 0 };
        doc.videoCount += 1;
        doc.totalViews += video.views;
        doc.totalLikes += video.likes;
        doctorMap.set(video.doctor, doc);
    });
    const doctorData = Array.from(doctorMap.values());

    return { summary, topVideos, departmentData, doctorData };
  }, [data]);

  const sortedData = useMemo(() => {
    let sortableItems = [...data];
    if (activeTab === 'doctors') {
        sortableItems = analytics.doctorData as any;
    }
    
    sortableItems.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    return sortableItems;
  }, [data, analytics.doctorData, activeTab, sortConfig]);

  const requestSort = (key: SortKeys) => {
    let direction: SortDirection = 'desc';
    if (sortConfig.key === key && sortConfig.direction === 'desc') {
      direction = 'asc';
    }
    setSortConfig({ key, direction });
  };
  
  const SortableHeader = ({ title, sortKey }: { title: string; sortKey: SortKeys }) => {
    const isSorted = sortConfig.key === sortKey;
    return (
        <th scope="col" className="px-4 py-3 cursor-pointer" onClick={() => requestSort(sortKey)}>
            <div className="flex items-center justify-start">
                {title}
                {isSorted ? (sortConfig.direction === 'desc' ? <ChevronDownIcon className="w-3 h-3 ml-1"/> : <ChevronUpIcon className="w-3 h-3 ml-1"/>) : <div className="w-3 h-3 ml-1"/>}
            </div>
        </th>
    );
  };

  return (
    <DashboardCard title="衛教長影片一覽" icon={VideoIcon}>
      <div className="flex flex-col h-full">
        <div className="border-b border-slate-200 dark:border-slate-700">
            <nav className="-mb-px flex space-x-2" aria-label="Tabs">
                <TabButton title="總覽" isActive={activeTab === 'overview'} onClick={() => { setActiveTab('overview'); setSortConfig({ key: 'views', direction: 'desc' }) }} />
                <TabButton title="科別分析" isActive={activeTab === 'departments'} onClick={() => setActiveTab('departments')} />
                <TabButton title="醫師分析" isActive={activeTab === 'doctors'} onClick={() => { setActiveTab('doctors'); setSortConfig({ key: 'totalViews', direction: 'desc' }) }} />
            </nav>
        </div>
        
        <div className="pt-4 flex-grow overflow-y-auto">
            {activeTab === 'overview' && (
                <div className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <StatCard title="總影片數" value={analytics.summary.totalVideos.toLocaleString()} icon={VideoIcon} />
                        <StatCard title="總觀看次數" value={analytics.summary.totalViews.toLocaleString()} icon={EyeIcon} />
                        <StatCard title="總按讚數" value={analytics.summary.totalLikes.toLocaleString()} icon={HeartIcon} />
                        <StatCard title="平均觀看" value={analytics.summary.avgViews.toLocaleString()} icon={ChartBarIcon} />
                    </div>
                    
                    <div>
                        <h3 className="text-md font-semibold text-slate-600 dark:text-slate-300 mb-2">熱門影片 Top 3</h3>
                        <div className="space-y-2">
                            {analytics.topVideos.map((video, index) => (
                                <div key={video.id} className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg">
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center truncate">
                                            <TrophyIcon className={`w-5 h-5 mr-2 ${index === 0 ? 'text-yellow-400' : index === 1 ? 'text-slate-400' : 'text-yellow-600'}`}/>
                                            <span className="font-medium text-slate-800 dark:text-slate-100 truncate pr-2">{video.title}</span>
                                            <span className="text-slate-500 dark:text-slate-400 hidden sm:inline">{video.doctor}</span>
                                        </div>
                                        <div className="font-bold text-slate-700 dark:text-slate-200 whitespace-nowrap">{video.views.toLocaleString()} 次觀看</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="overflow-y-auto" style={{ maxHeight: '20rem' }}>
                         <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
                            <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-300 sticky top-0">
                                <tr>
                                    <th scope="col" className="px-4 py-3">影片主題</th>
                                    <th scope="col" className="px-4 py-3">科別</th>
                                    <th scope="col" className="px-4 py-3">合作醫師</th>
                                    <SortableHeader title="觀看次數" sortKey="views"/>
                                    <SortableHeader title="按讚數" sortKey="likes"/>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedData.map(video => (
                                <tr key={video.id} className="bg-white dark:bg-slate-800 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600/50">
                                    <td className="px-4 py-3 font-medium text-slate-900 dark:text-white whitespace-nowrap">{video.title}</td>
                                    <td className="px-4 py-3">{video.department}</td>
                                    <td className="px-4 py-3">{video.doctor}</td>
                                    <td className="px-4 py-3 text-left">{video.views.toLocaleString()}</td>
                                    <td className="px-4 py-3 text-left">{video.likes.toLocaleString()}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
            
            {activeTab === 'departments' && (
                 <div className="w-full h-96 pr-4">
                    <ResponsiveContainer width="100%" height="100%">
                       <BarChart layout="vertical" data={analytics.departmentData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                           <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2}/>
                           <XAxis type="number" tick={{ fill: '#94a3b8' }} fontSize={12} tickFormatter={(value) => new Intl.NumberFormat('en-US', { notation: 'compact', compactDisplay: 'short' }).format(value as number)}/>
                           <YAxis type="category" dataKey="name" width={80} tick={{ fill: '#94a3b8' }} fontSize={12}/>
                           <Tooltip
                              contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '0.5rem' }}
                              labelStyle={{ color: '#f1f5f9' }}
                              formatter={(value: number) => value.toLocaleString()}
                           />
                           <Legend wrapperStyle={{fontSize: "14px"}}/>
                           <Bar dataKey="views" name="總觀看次數" fill="#0284c7" />
                       </BarChart>
                    </ResponsiveContainer>
                 </div>
            )}
            
            {activeTab === 'doctors' && (
                <div className="overflow-y-auto" style={{ maxHeight: '30rem' }}>
                    <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
                        <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-300 sticky top-0">
                            <tr>
                                <SortableHeader title="合作醫師" sortKey="name"/>
                                <SortableHeader title="影片數" sortKey="videoCount"/>
                                <SortableHeader title="總觀看" sortKey="totalViews"/>
                                <SortableHeader title="總按讚" sortKey="totalLikes"/>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedData.map((doc: any) => (
                                <tr key={doc.name} className="bg-white dark:bg-slate-800 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600/50">
                                    <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">{doc.name}</td>
                                    <td className="px-4 py-3">{doc.videoCount.toLocaleString()}</td>
                                    <td className="px-4 py-3">{doc.totalViews.toLocaleString()}</td>
                                    <td className="px-4 py-3">{doc.totalLikes.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
      </div>
    </DashboardCard>
  );
};

export default VideoPerformance;