"use client"
import { useState, useEffect, useMemo } from 'react';
import { Item } from './../../../types/index';
import SolutionCard from './components/solutionCard';
import SolutionSection from './components/solutionSection';

// Define the categories based on the schema
type CategoryType = 'BANKING' | 'CAP MKTS' | 'INSURANCE' | 'GCC';

export default function BankingSolutionsPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryType>('BANKING');

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const endpoint = query 
          ? `http://localhost:5000/api/items/search?query=${encodeURIComponent(query)}`
          : 'http://localhost:5000/api/items';
        
        console.log("Fetching from endpoint:", endpoint);
        const response = await fetch(endpoint);
        
        if (!response.ok) {
          throw new Error('Failed to fetch items');
        }
        
        const data = await response.json();
        console.log("Received data:", data);
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

  // Group items by their actual type property from the schema
  const categorizedItems = useMemo(() => {
    const initialCategories: Record<CategoryType, Item[]> = {
      'BANKING': [],
      'CAP MKTS': [],
      'INSURANCE': [],
      'GCC': [],
    };

    // Log items for debugging
    console.log("Fetched items:", items);
    
    return items.reduce((acc, item) => {
      // Use the item's type property for categorization
      console.log(`Processing item: ${item.title}, type: ${item.type}`);
      
      if (item.type && initialCategories[item.type as CategoryType]) {
        acc[item.type as CategoryType].push(item);
      } else {
        // Fallback in case the type is missing or invalid
        console.log(`Using fallback category for item: ${item.title}`);
        acc['BANKING'].push(item);
      }
      return acc;
    }, initialCategories);
  }, [items]);

  // Get recommendations (items from the active category with highest relevance)
  const recommendations = useMemo(() => {
    // In a real app, you might have a relevance score or recently added items
    // For now, just take the first 3 items from the active category
    return categorizedItems[activeCategory].slice(0, 3);
  }, [categorizedItems, activeCategory]);

  // Solution types for different categories
  const solutionTypes = {
    'BANKING': ['Cost Optimisation', 'Digital Core', 'Revenue Upliftment', 'Regulations'],
    'CAP MKTS': ['Trading Solutions', 'Risk Management', 'Market Analysis', 'Compliance'],
    'INSURANCE': ['Claims Processing', 'Risk Assessment', 'Customer Portals', 'Fraud Detection'],
    'GCC': ['Islamic Banking', 'Regional Compliance', 'Digital Transformation', 'Customer Experience']
  };

  // Split category items into subcategories based on solution types
  const getSectionItems = (category: CategoryType, sectionTitle: string) => {
    // Instead of slicing by index, display items that match certain criteria
    // For simplicity in this demo, we'll just return all items in the category
    // In a real app, you'd have a smarter filter based on item properties
    
    console.log(`Getting items for ${category} - ${sectionTitle}. Total items: ${categorizedItems[category].length}`);
    
    // Return all items for the first section, none for others to avoid duplicates
    if (sectionTitle === solutionTypes[category][0]) {
      return categorizedItems[category];
    }
    return [];
  };

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
            onClick={() => setActiveCategory(category as CategoryType)}
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
            {/* Debug information */}
            <div className="bg-gray-100 p-4 mb-6 rounded-md">
              <p className="font-semibold">Debug Info - Active Category: {activeCategory}</p>
              <p>Items in this category: {categorizedItems[activeCategory]?.length || 0}</p>
              {categorizedItems[activeCategory]?.length > 0 && (
                <div className="mt-2">
                  <p>First item: {categorizedItems[activeCategory][0]?.title} (Type: {categorizedItems[activeCategory][0]?.type})</p>
                </div>
              )}
            </div>
            
            {solutionTypes[activeCategory].map((solutionType, index) => (
              <SolutionSection 
                key={`${activeCategory}-${solutionType}`}
                title={solutionType} 
                iconClass="text-purple-600"
                items={getSectionItems(activeCategory, solutionType)} 
              />
            ))}
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