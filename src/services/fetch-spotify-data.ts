'use server'

import { AccessTokenResponse, SpotifyTrack, CustomError } from '../models/types';

const CLIENT_ID: string = process.env.SPOTIFY_CLIENT_ID as string;
const CLIENT_SECRET: string = process.env.SPOTIFY_SECRET as string;
const API_URL: string = process.env.SPOTIFY_API_URL as string;
const TOKEN_URL: string = process.env.SPOTIFY_TOKEN_URL as string;

export const getAccessToken = async (): Promise<string> => {
  try {
    const response = await fetch(TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    });

    const data: AccessTokenResponse = await response.json();
    return data.access_token;
  } catch (error) {
    const customError: CustomError = error as CustomError;
    throw new Error(`Error searching Spotify: ${customError.message}`);
  }
};

export const searchSpotify = async (query: string): Promise<SpotifyTrack[]> => {
  try {
    const accessToken = await getAccessToken();
    const searchResponse = await fetch(
      `${API_URL}/search?q=${encodeURIComponent(`${query} artist:${query}`)}&type=track`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const searchData = await searchResponse.json();
    return searchData.tracks.items;
  } catch (error) {
    const customError: CustomError = error as CustomError;
    throw new Error(`Error searching Spotify: ${customError.message}`);
  }
};
