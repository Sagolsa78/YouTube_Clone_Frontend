'use client';

import React, { useState } from 'react';

const categories = [
  'All',
  'Music',
  'Arijit Singh',
  'Dance',
  'Live',
  'Nusrat Fateh Ali Khan',
  'Mixes',
  'Computer Programming',
  'React',
  'Tailwind',
  'YouTube Trending',
  '1990s',
  'Telugu Cinema',
];

function SuggestionBar() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="w-full bg-white  sticky top-14 z-10">
      <div className="overflow-x-auto whitespace-nowrap">
        <div className="flex w-max space-x-3 p-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-200 text-gray-800'
              } hover:bg-gray-800 hover:text-white transition`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SuggestionBar;
