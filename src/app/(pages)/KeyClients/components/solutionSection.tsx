import React from 'react';
import SolutionCard from './solutionCard';
import { Item } from './../../../../types/index';

interface SolutionSectionProps {
  title: string;
  iconClass: string;
  items: Item[];
}

const SolutionSection: React.FC<SolutionSectionProps> = ({ title, iconClass, items }) => {
  if (items.length === 0) return null;
  
  return (
    <div className="space-y-4 py-4">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
          <span className={`${iconClass} text-lg font-bold`}>
            {title.charAt(0)}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-purple-700">{title}</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <SolutionCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SolutionSection;