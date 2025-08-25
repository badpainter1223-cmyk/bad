import React, { useState, useMemo } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { MedicalEventData, MedicalEventDataSource, MedicalEventAudience } from '../types';
import DashboardCard from './DashboardCard';
import { MegaphoneIcon, ChevronDownIcon, ChevronUpIcon } from './icons';

interface MedicalEventsProps {
  data: MedicalEventData[];
}

const COLORS_SOURCES = ['#0ea5e9', '#6366f1', '#f472b6', '#fbbf24', '#34d399'];
const COLORS_AUDIENCE = ['#818cf8', '#a78bfa', '#f87171'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

    if (percent < 0.05) return null; // Don't render label for small slices

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" fontSize={12} fontWeight="bold">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};


const BreakdownChart = ({ data, colors, title }: { data: (MedicalEventDataSource | MedicalEventAudience)[], colors: string[], title: string }) => (
    <div className="flex-1 min-w-[200px]">
        <h4 className="text-sm font-semibold text-center text-slate-600 dark:text-slate-300 mb-2">{title}</h4>
        <div className="w-full h-48">
             <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={70}
                        fill="#8884d8"
                        dataKey="percentage"
                        nameKey="name"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '0.5rem' }}
                        formatter={(value: number, name: string) => [`${value}%`, name]}
                    />
                    <Legend iconSize={10} wrapperStyle={{ fontSize: '12px', lineHeight: '1.2' }} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    </div>
);


const MedicalEvents: React.FC<MedicalEventsProps> = ({ data }) => {
    const [expandedId, setExpandedId] = useState<number | null>(data.length > 0 ? data[0].id : null);

    const toggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const sortedData = useMemo(() => {
        return [...data].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }, [data]);
    
    return (
        <DashboardCard title="醫療主題活動" icon={MegaphoneIcon}>
            <div className="overflow-y-auto" style={{ maxHeight: '30rem' }}>
                <div className="space-y-2 pr-2">
                    {sortedData.map(event => {
                        const isExpanded = expandedId === event.id;
                        const attendanceRate = event.registered > 0 ? (event.attended / event.registered) * 100 : 0;
                        return (
                            <div key={event.id} className="bg-slate-50 dark:bg-slate-700/50 rounded-lg transition-all duration-300">
                                <button
                                    onClick={() => toggleExpand(event.id)}
                                    className="w-full p-4 text-left flex items-center justify-between"
                                    aria-expanded={isExpanded}
                                >
                                    <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                                        <div className="md:col-span-2">
                                            <p className="font-semibold text-brand-primary dark:text-sky-400">{event.theme}</p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">{event.date} | {event.speaker}</p>
                                        </div>
                                        <div className="text-xs text-slate-600 dark:text-slate-300">
                                            <p>報名: {event.registered}</p>
                                            <p>實到: {event.attended}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2.5">
                                                <div
                                                    className="bg-sky-500 h-2.5 rounded-full"
                                                    style={{ width: `${attendanceRate.toFixed(0)}%` }}
                                                ></div>
                                            </div>
                                            <span className="font-bold text-sm text-slate-700 dark:text-slate-200">{attendanceRate.toFixed(0)}%</span>
                                        </div>
                                    </div>
                                    {isExpanded ? <ChevronUpIcon className="w-5 h-5 ml-4 text-slate-500" /> : <ChevronDownIcon className="w-5 h-5 ml-4 text-slate-500" />}
                                </button>
                                {isExpanded && (
                                    <div className="px-4 pb-4 border-t border-slate-200 dark:border-slate-600">
                                        <div className="flex flex-wrap gap-4 justify-around pt-4">
                                            <BreakdownChart data={event.sources} colors={COLORS_SOURCES} title="報名來源" />
                                            <BreakdownChart data={event.audience} colors={COLORS_AUDIENCE} title="聽眾輪廓" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </DashboardCard>
    );
};

export default MedicalEvents;