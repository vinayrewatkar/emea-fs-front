"use client";

import { useState, useEffect, useMemo } from 'react';
import { Item } from './../../../types/index';

interface Categories {
  BANKING: Item[];
  "CAP MKTS": Item[];
  INSURANCE: Item[];
  GCC: Item[];
}

export default function BankingSolutionsPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('BANKING');

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const endpoint = query 
          ? `http://localhost:5000/api/items/search?query=${encodeURIComponent(query)}`
          : 'http://localhost:5000/api/items';
        
        const response = await fetch(endpoint);
        
        if (!response.ok) {
          throw new Error('Failed to fetch items');
        }
        
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.error('Error fetching items:', err);
        setError('Failed to load banking solutions');
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchItems, 300);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  // Group items by category
  const categorizedItems = useMemo(() => {
    const initialCategories: Categories = {
      'BANKING': [],
      'CAP MKTS': [],
      'INSURANCE': [],
      'GCC': [],
    };

    return items.reduce((acc, item) => {
      // Simple categorization logic - in a real app, this would come from your database
      let category = 'BANKING'; // Default category
      
      if (item.title.toLowerCase().includes('market') || 
          item.description.toLowerCase().includes('market')) {
        category = 'CAP MKTS';
      } else if (item.title.toLowerCase().includes('insurance') || 
                item.description.toLowerCase().includes('insurance')) {
        category = 'INSURANCE';
      } else if (item.title.toLowerCase().includes('uae') || 
                item.description.toLowerCase().includes('gulf') ||
                item.title.toLowerCase().includes('saudi')) {
        category = 'GCC';
      }
      
      acc[category].push(item);
      return acc;
    }, initialCategories);
  }, [items]);

  // Get recommendations (simple implementation - just showing a few items)
  const recommendations = useMemo(() => {
    return items.slice(0, 3);
  }, [items]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Bar */}
      <div className="w-full max-w-3xl mx-auto mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full py-3 pl-12 pr-4 text-base text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search for banking solutions..."
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <svg
                className="w-5 h-5 text-gray-500 hover:text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          )}
        </div>
      </div>
      
      {/* Category Navigation */}
      <div className="flex justify-center overflow-x-auto border-b mb-8">
        {Object.keys(categorizedItems).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 text-lg font-medium transition-colors duration-200 ease-in-out ${
              activeCategory === category
                ? 'text-red-500 border-b-2 border-red-500'
                : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center py-8">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 py-3 px-4 rounded-md">
          {error}
        </div>
      )}

      {/* Solution Categories with Cards */}
      <div className="space-y-12">
        {!loading && (
          <>
            {/* Cost Optimization Section */}
            <SolutionSection 
              title="Cost Optimisation" 
              iconClass="text-purple-600"
              items={categorizedItems[activeCategory].slice(0, 3)} 
            />
            
            {/* Digital Core Section */}
            <SolutionSection 
              title="Digital Core" 
              iconClass="text-purple-600"
              items={categorizedItems[activeCategory].slice(3, 6)} 
            />
            
            {/* Revenue Upliftment Section */}
            <SolutionSection 
              title="Revenue Upliftment" 
              iconClass="text-purple-600"
              items={categorizedItems[activeCategory].slice(6, 9)} 
            />
            
            {/* Regulations Section */}
            <SolutionSection 
              title="Regulations" 
              iconClass="text-purple-600"
              items={categorizedItems[activeCategory].slice(9, 12)} 
            />
          </>
        )}
        
        {/* No Results */}
        {!loading && categorizedItems[activeCategory]?.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="text-gray-400 mb-4">
              <svg
                className="w-16 h-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-700">No solutions found</h3>
            <p className="text-gray-500 mt-2">
              Try adjusting your search or browse our recommendations.
            </p>
          </div>
        )}
        
        {/* Recommendations */}
        {query && recommendations.length > 0 && (
          <div className="space-y-4 mt-12">
            <h2 className="text-xl font-semibold text-gray-900">Recommendations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendations.map((item) => (
                <SolutionCard key={`rec-${item._id}`} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Solution Section Component
function SolutionSection({ title, iconClass, items }: { title: string; iconClass: string; items: Item[] }) {
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
}

// Solution Card Component
function SolutionCard({ item }: { item: Item }) {
  // Map of bank names to their logo paths
  const bankLogoMap: Record<string, string> = {
    'Sabadell': '/images/logos/sabadell.png',
    'NatWest': '/images/logos/natwest.png',
    'OP-Pohjola': '/images/logos/op-pohjola.png',
    'Barclays': '/images/logos/barclays.png',
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
}