import React from 'react';
import { DateRange } from '../types';
import { CalendarIcon } from './icons';

interface HeaderProps {
  dateRange: DateRange;
  setDateRange: React.Dispatch<React.SetStateAction<DateRange>>;
}

const Header: React.FC<HeaderProps> = ({ dateRange, setDateRange }) => {
  const years = Array.from({ length: 2025 - 2024 + 1 }, (_, i) => 2024 + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const handleDateChange = (field: keyof DateRange, value: number) => {
    setDateRange(prev => ({ ...prev, [field]: value }));
  };

  return (
    <header className="bg-white dark:bg-slate-800 shadow-md p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center sticky top-0 z-10">
      <h1 className="text-xl sm:text-2xl font-bold text-brand-primary dark:text-sky-400 mb-4 sm:mb-0">
        行銷單位產出與成效儀表板
      </h1>
      <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center">
        <div className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-slate-500 dark:text-slate-400" />
            <select
              value={dateRange.startYear}
              onChange={(e) => handleDateChange('startYear', parseInt(e.target.value))}
              className="bg-slate-100 dark:bg-slate-700 rounded-md p-2 text-sm"
              aria-label="起始年份"
            >
              {years.map(y => <option key={`start-year-${y}`} value={y}>{y}年</option>)}
            </select>
            <select
              value={dateRange.startMonth}
              onChange={(e) => handleDateChange('startMonth', parseInt(e.target.value))}
              className="bg-slate-100 dark:bg-slate-700 rounded-md p-2 text-sm"
              aria-label="起始月份"
            >
              {months.map(m => <option key={`start-month-${m}`} value={m}>{m}月</option>)}
            </select>
        </div>
        <span className="text-slate-500 dark:text-slate-400">-</span>
        <div className="flex items-center gap-2">
            <select
              value={dateRange.endYear}
              onChange={(e) => handleDateChange('endYear', parseInt(e.target.value))}
              className="bg-slate-100 dark:bg-slate-700 rounded-md p-2 text-sm"
              aria-label="結束年份"
            >
              {years.map(y => <option key={`end-year-${y}`} value={y}>{y}年</option>)}
            </select>
            <select
              value={dateRange.endMonth}
              onChange={(e) => handleDateChange('endMonth', parseInt(e.target.value))}
              className="bg-slate-100 dark:bg-slate-700 rounded-md p-2 text-sm"
              aria-label="結束月份"
            >
              {months.map(m => <option key={`end-month-${m}`} value={m}>{m}月</option>)}
            </select>
        </div>
      </div>
    </header>
  );
};

export default Header;