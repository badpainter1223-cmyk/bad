import React, { useState, useMemo } from 'react';
import { DateRange } from './types';
import Header from './components/Header';
import PlatformGrowthChart from './components/PlatformGrowthChart';
import AdPerformance from './components/AdPerformance';
import VideoPerformance from './components/VideoPerformance';
import ShortVideoPerformance from './components/ShortVideoPerformance';
import MedicalEvents from './components/Campaigns';
import PressReleases from './components/PressReleases';

import { platformData, socialAdData, videoData, shortVideoData, medicalEventData, pressReleaseData } from './data/mockData';

const isWithinDateRange = (dateStr: string, range: DateRange): boolean => {
    const year = parseInt(dateStr.substring(0, 4), 10);
    const month = parseInt(dateStr.substring(5, 7), 10);

    const startDate = new Date(range.startYear, range.startMonth - 1);
    const endDate = new Date(range.endYear, range.endMonth, 1);
    const targetDate = new Date(year, month - 1);

    return targetDate >= startDate && targetDate < endDate;
};

const isWithinMonthRange = (monthStr: string, range: DateRange): boolean => {
    const year = parseInt(monthStr.substring(0, 4), 10);
    const month = parseInt(monthStr.substring(5, 7), 10);

    const startDate = new Date(range.startYear, range.startMonth - 1);
    const endDate = new Date(range.endYear, range.endMonth, 1);
    const targetDate = new Date(year, month - 1);

    return targetDate >= startDate && targetDate < endDate;
};


const App: React.FC = () => {
    const [dateRange, setDateRange] = useState<DateRange>({
        startYear: 2024,
        startMonth: 1,
        endYear: 2025,
        endMonth: 8,
    });
    
    const filteredPlatformData = useMemo(() => platformData.filter(d => isWithinMonthRange(d.month, dateRange)), [dateRange]);
    const filteredSocialAdData = useMemo(() => socialAdData.filter(d => isWithinDateRange(d.startDate, dateRange)), [dateRange]);
    const filteredVideoData = useMemo(() => videoData.filter(d => isWithinDateRange(d.date, dateRange)), [dateRange]);
    const filteredShortVideoData = useMemo(() => shortVideoData.filter(d => isWithinDateRange(d.date, dateRange)), [dateRange]);
    const filteredMedicalEventData = useMemo(() => medicalEventData.filter(d => isWithinDateRange(d.date, dateRange)), [dateRange]);
    const filteredPressReleaseData = useMemo(() => pressReleaseData.filter(d => isWithinDateRange(d.date, dateRange)), [dateRange]);

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-900 font-sans text-slate-800 dark:text-slate-200">
            <Header dateRange={dateRange} setDateRange={setDateRange} />
            <main className="p-4 sm:p-6">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    <div className="xl:col-span-3">
                        <PlatformGrowthChart data={filteredPlatformData} />
                    </div>
                    <div className="xl:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <VideoPerformance data={filteredVideoData} />
                        <ShortVideoPerformance data={filteredShortVideoData} />
                    </div>
                    <div className="xl:col-span-3 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        <AdPerformance data={filteredSocialAdData} />
                        <MedicalEvents data={filteredMedicalEventData} />
                        <div className="lg:col-span-2 xl:col-span-1">
                          <PressReleases data={filteredPressReleaseData} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;