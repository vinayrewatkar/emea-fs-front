import React from 'react';
import { Item } from './../../../../types/index';

interface SolutionCardProps {
  item: Item;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ item }) => {
  // Map of bank names to their logo paths - in a real app you'd use real images
  const bankLogoMap: Record<string, string> = {
    'Sabadell': '/images/logos/sabadell.png',
    'NatWest': '/images/logos/natwest.png',
    'OP-Pohjola': '/images/logos/op-pohjola.png',
    'Barclays': '/images/logos/barclays.png',
    'Nationwide': '/images/logos/nationwide.png',
    'Central Bank of UAE': '/images/logos/uae.png',
    'Deutsche Bank': '/images/logos/db.png',
    'Nordea': '/images/logos/nordea.png',
    'Lloyds Bank': '/images/logos/lloyds.png',
  };
  
  // Extract bank name from title or description
  const getBankName = () => {
    const bankNames = Object.keys(bankLogoMap);
    for (const name of bankNames) {
      if (item.title.toLowerCase().includes(name.toLowerCase())) {
        return name;
      }
    }
    return '';
  };
  
  const bankName = getBankName();
  
  return (
    <a href={item.pdfUrl} className="block" target="_blank" rel="noopener noreferrer">
      <div className="h-full border border-gray-200 rounded-lg p-5 flex flex-col hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center mb-3">
          {/* Bank Logo */}
          <div className="w-8 h-8 relative mr-3">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold">
              {bankName ? bankName.charAt(0) : 'B'}
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {bankName || 'Bank'}
          </h3>
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