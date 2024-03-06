import connectDb from '../db/db';
import { ClickedSong } from '@/models/types';

export async function saveClickedSong(song: ClickedSong): Promise<void> {
  const client = await connectDb();

  try {
    await client.query(
      'INSERT INTO ClickedSongs (Name, Artist, Album, Clicked) VALUES ($1, $2, $3, true) ON CONFLICT (Name) DO NOTHING',
      [song.name, song.artist, song.album]
    );
  } catch (error) {
    console.error('Error saving clicked song:', error);
    throw new Error('Internal Server Error');
  } finally {
    client.release();
  }
}

export async function getClickedSongs(): Promise<ClickedSong[]> {
  const client = await connectDb();

  try {
    const result = await client.query<ClickedSong>('SELECT * FROM ClickedSongs WHERE Clicked = true');
    return result.rows;
  } catch (error) {
    console.error('Error getting clicked songs:', error);
    throw new Error('Internal Server Error');
  } finally {
    client.release();
  }
}