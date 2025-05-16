import React from 'react';
import { Item } from './../../../../types/index';

interface SolutionCardProps {
  item: Item;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ item }) => {
  // Get the first letter to use as fallback icon
  const getInitial = () => {
    return item.title ? item.title.charAt(0).toUpperCase() : 'S';
  };
  
  // Get appropriate icon color based on item type
  const getTypeColor = () => {
    const colorMap: Record<string, string> = {
      'BANKING': 'bg-blue-100 text-blue-600',
      'CAP MKTS': 'bg-green-100 text-green-600',
      'INSURANCE': 'bg-purple-100 text-purple-600',
      'GCC': 'bg-amber-100 text-amber-600'
    };
    
    return colorMap[item.type as string] || 'bg-gray-200 text-gray-600';
  };
  
  return (
    <a href={item.pdfUrl} className="block" target="_blank" rel="noopener noreferrer">
      <div className="h-full border border-gray-200 rounded-lg p-5 flex flex-col hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center mb-3">
          {/* Item Icon with appropriate color based on type */}
          <div className="w-8 h-8 relative mr-3">
            <div className={`w-8 h-8 ${getTypeColor()} rounded-full flex items-center justify-center text-sm font-bold`}>
              {getInitial()}
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {item.title}
          </h3>
        </div>
        
        {/* Type badge */}
        <div className="mb-2">
          <span className={`inline-block px-2 py-1 text-xs rounded-full ${getTypeColor()}`}>
            {item.type}
          </span>
        </div>
        
        <p className="text-sm text-gray-600 flex-grow">
          {item.description}
        </p>
        <div className="mt-4 text-xs text-blue-600">View Details</div>
      </div>
    </a>
  );
};

export default SolutionCard;