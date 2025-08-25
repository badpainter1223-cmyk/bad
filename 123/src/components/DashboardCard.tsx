import React from 'react';
import { IconType } from './icons';

interface DashboardCardProps {
  title: string;
  icon?: IconType;
  children: React.ReactNode;
  className?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, icon: Icon, children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-slate-800 rounded-xl shadow-md p-4 sm:p-6 flex flex-col h-full ${className}`}>
      <div className="flex items-center mb-4">
        {Icon && <Icon className="h-6 w-6 mr-3 text-brand-primary" />}
        <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-200">{title}</h2>
      </div>
      <div className="flex-grow">
        {children}
      </div>
    </div>
  );
};

export default DashboardCard;