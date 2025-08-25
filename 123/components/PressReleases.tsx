
import React, { useState, useMemo } from 'react';
import { PressReleaseData } from '../types';
import DashboardCard from './DashboardCard';
import { NewspaperIcon } from './icons';

interface PressReleasesProps {
  data: PressReleaseData[];
}

const PressReleases: React.FC<PressReleasesProps> = ({ data }) => {
  const authors = useMemo(() => ['總覽', ...Array.from(new Set(data.map(d => d.author)))], [data]);
  const [activeAuthor, setActiveAuthor] = useState(authors[0] || '總覽');

  const filteredAndSortedData = useMemo(() => {
    const filtered = activeAuthor === '總覽'
      ? data
      : data.filter(release => release.author === activeAuthor);
    return filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [data, activeAuthor]);
  
  const summary = useMemo(() => {
    return {
      totalReleases: filteredAndSortedData.length,
      totalMediaCount: filteredAndSortedData.reduce((sum, item) => sum + item.mediaCount, 0)
    };
  }, [filteredAndSortedData]);

  return (
    <DashboardCard title="新聞稿發布成效" icon={NewspaperIcon}>
      <div className="flex flex-col h-full">
        <div className="border-b border-slate-200 dark:border-slate-700 mb-4">
          <nav className="-mb-px flex space-x-4" aria-label="Tabs">
            {authors.map(author => (
              <button
                key={author}
                onClick={() => setActiveAuthor(author)}
                className={`${
                  activeAuthor === author
                    ? 'border-brand-primary text-brand-primary dark:border-sky-400 dark:text-sky-400'
                    : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 dark:text-slate-400 dark:hover:text-slate-300 dark:hover:border-slate-600'
                } whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm transition-colors`}
                aria-current={activeAuthor === author ? 'page' : undefined}
              >
                {author}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">總稿件數</p>
            <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">{summary.totalReleases}</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg text-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">總刊登數</p>
            <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">{summary.totalMediaCount.toLocaleString()}</p>
          </div>
        </div>

        <div className="overflow-auto flex-grow" style={{maxHeight: '24rem'}}>
          <table className="w-full text-sm text-left text-slate-500 dark:text-slate-400">
            <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-300 sticky top-0">
              <tr>
                <th scope="col" className="px-4 py-3">發布日期</th>
                <th scope="col" className="px-4 py-3">主題</th>
                <th scope="col" className="px-4 py-3">科別</th>
                <th scope="col" className="px-4 py-3">醫師</th>
                <th scope="col" className="px-4 py-3 text-right">刊登家數</th>
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedData.length > 0 ? filteredAndSortedData.map(release => (
                <tr key={release.id} className="bg-white dark:bg-slate-800 border-b dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600/50">
                  <td className="px-4 py-3 whitespace-nowrap">{release.date}</td>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">{release.topic}</td>
                  <td className="px-4 py-3">{release.department}</td>
                  <td className="px-4 py-3">{release.doctor}</td>
                  <td className="px-4 py-3 text-right font-semibold">{release.mediaCount}</td>
                </tr>
              )) : (
                <tr>
                    <td colSpan={5} className="text-center py-8 text-slate-500 dark:text-slate-400">
                        沒有資料
                    </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardCard>
  );
};

export default PressReleases;
