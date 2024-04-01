'use client';

import { FC, useState } from 'react';
import { SearchBarProps } from '../models/types'

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    if (!query) {
      console.error('Query is undefined or empty');
      return;
  }
    try {
      const response = await fetch('api/spotify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }), 
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      
      const results = await response.json();
      onSearch(results);
    } catch (error) {
      console.error('Error searching Spotify:', error);
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="mt-8 text-center font-bold">
      <h1 className="text-5xl py-5">Search The Spotify</h1>
      <div className='searchbar flex justify-center gap-5 p-10'>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="rounded-lg m-0 h-auto w-500 text-lg p-1 border border-gray-400 font-normal"
        />
        <button onClick={handleSearch} className='rounded-lg border border-transparent px-3 py-2 text-base font-medium text-white bg-gray-800 hover:border-indigo-600 focus:outline-none focus-visible:outline-none focus-visible:border-indigo-600 transition-border duration-250'>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
