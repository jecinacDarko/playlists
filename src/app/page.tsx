'use client'

import { FC, useState } from 'react';
import { Song } from '../models/types';
import SearchBar from '../components/SearchBar';
import SongCard from '../components/SongCard';

const SongPortal: FC = () => {
  const [searchResults, setSearchResults] = useState<Song[]>([]);

  const handleSearch = (results: Song[]) => {
    setSearchResults(results);
  };

  const handleSongClick = (index: number) => {
    const updatedResults = [...searchResults];
    updatedResults[index].isClicked = !updatedResults[index].isClicked;
    setSearchResults(updatedResults);
  };

  return (
    <section className="w-full">
      <SearchBar onSearch={handleSearch} />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 p-10'>
        {searchResults.map((song, index) => (
          <SongCard
            key={index}
            song={song}
            onClick={() => handleSongClick(index)}
            isClicked={song.isClicked || false}
          />
        ))}
      </div>
    </section>
  );
};

export default SongPortal;
