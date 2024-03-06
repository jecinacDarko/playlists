'use client';

import { FC } from 'react';
import { SongCardProps } from '@/models/types';

const SongCard: FC<SongCardProps> = ({ song, onClick }) => {
  const isClicked = song.isClicked || false;

  return (
    <div className={`song-card ${isClicked ? 'clicked' : ''}`} onClick={onClick}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={song.album.images[0].url}
        alt={`${song.name} cover`}
        className="w-full h-auto rounded-[10px]"
      />
      <div className="text-center py-4 font-bold">
        <h3 className="text-white text-lg">{song.name}</h3>
        <p className="text-gray-300 text-sm">{song.artists[0].name}</p>
      </div>
    </div>
  );
};

export default SongCard;
