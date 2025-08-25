import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PlatformData } from '../types';
import DashboardCard from './DashboardCard';
import { TrendingUpIcon } from './icons';

interface PlatformGrowthChartProps {
  data: PlatformData[];
}

const valueFormatter = (value: number) => {
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `${(value / 1000).toFixed(0)}k`;
    return value.toString();
};


const PlatformGrowthChart: React.FC<PlatformGrowthChartProps> = ({ data }) => {
  return (
    <DashboardCard title="經營平台成長趨勢" icon={TrendingUpIcon}>
      <div className="flex flex-col gap-12">
        
        <div>
          <h3 className="text-md font-semibold text-slate-600 dark:text-slate-300 mb-4">官網成效 (Website Performance)</h3>
          <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart 
                data={data} 
                margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                <XAxis dataKey="month" tick={{ fill: '#94a3b8' }} fontSize={12} />
                <YAxis tick={{ fill: '#94a3b8' }} fontSize={12} tickFormatter={valueFormatter} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '0.5rem' }}
                  labelStyle={{ color: '#f1f5f9' }}
                  formatter={(value: number) => value.toLocaleString()}
                />
                <Legend wrapperStyle={{fontSize: "14px"}} />
                <Line type="monotone" dataKey="website_users" name="使用者 (Users)" stroke="#38bdf8" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="website_interactions" name="互動數 (Interactions)" stroke="#6366f1" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <h3 className="text-md font-semibold text-slate-600 dark:text-slate-300 mb-4">社群平台粉絲成長 (Social Media Follower Growth)</h3>
          <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart 
                data={data} 
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                <XAxis dataKey="month" tick={{ fill: '#94a3b8' }} fontSize={12} />
                <YAxis tick={{ fill: '#94a3b8' }} fontSize={12} tickFormatter={valueFormatter} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '0.5rem' }}
                  labelStyle={{ color: '#f1f5f9' }}
                  formatter={(value: number) => value.toLocaleString()}
                />
                <Legend wrapperStyle={{fontSize: "14px"}} />
                <Line type="monotone" dataKey="facebook_followers" name="Facebook" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="instagram_followers" name="Instagram" stroke="#e879f9" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="youtube" name="YouTube" stroke="#ef4444" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="line" name="LINE OA" stroke="#22c55e" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <h3 className="text-md font-semibold text-slate-600 dark:text-slate-300 mb-4">Facebook 成效 (Facebook Performance)</h3>
          <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart 
                data={data.filter(d => d.facebook_impressions > 0)} 
                margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                <XAxis dataKey="month" tick={{ fill: '#94a3b8' }} fontSize={12} />
                <YAxis tick={{ fill: '#94a3b8' }} fontSize={12} tickFormatter={valueFormatter} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '0.5rem' }}
                  labelStyle={{ color: '#f1f5f9' }}
                  formatter={(value: number) => value.toLocaleString()}
                />
                <Legend wrapperStyle={{fontSize: "14px"}} />
                <Line type="monotone" dataKey="facebook_impressions" name="瀏覽" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="facebook_reach" name="觸及" stroke="#60a5fa" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="facebook_interactions" name="互動" stroke="#93c5fd" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div>
          <h3 className="text-md font-semibold text-slate-600 dark:text-slate-300 mb-4">Instagram 成效 (Instagram Performance)</h3>
          <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart 
                data={data.filter(d => d.instagram_impressions > 0)} 
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                <XAxis dataKey="month" tick={{ fill: '#94a3b8' }} fontSize={12} />
                <YAxis tick={{ fill: '#94a3b8' }} fontSize={12} tickFormatter={valueFormatter} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '0.5rem' }}
                  labelStyle={{ color: '#f1f5f9' }}
                  formatter={(value: number) => value.toLocaleString()}
                />
                <Legend wrapperStyle={{fontSize: "14px"}} />
                <Line type="monotone" dataKey="instagram_impressions" name="瀏覽" stroke="#c026d3" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="instagram_reach" name="觸及" stroke="#f97316" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                <Line type="monotone" dataKey="instagram_interactions" name="互動" stroke="#ec4899" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </DashboardCard>
  );
};

export default PlatformGrowthChart;