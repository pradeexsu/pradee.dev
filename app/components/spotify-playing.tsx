'use client';

import useSWR from 'swr';
import SpotifyIcon from '../common/Spotify';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const MAX_TITLE_CHARS = 24;

const truncate = (text: string, max: number) =>
  text.length > max ? text.slice(0, max - 1) + '…' : text;

export default function SpotifyPlaying() {
  const { data, isLoading } = useSWR('/api/spotify', fetcher, {
    refreshInterval: 3000,
  });

  const isPlaying = data?.isPlaying;

  if (isLoading) {
    return (
      <div className="group dark:text-white text-black relative flex w-72 items-start space-x-2 rounded-md transition-shadow select-none">
        <div className="w-12 h-12 shadow-xl rounded overflow-hidden">
          <div className="animate-pulse w-full h-full bg-gray-100/20 rounded" />
        </div>

        <div className="flex-1">
          <p className="component font-bold whitespace-nowrap overflow-hidden relative block">
            <span className="inline-block h-3 w-full rounded animate-pulse bg-gray-100/20" />
          </p>
          <p className="font-dark text-xs">
            <span className="inline-block h-2 w-16 rounded animate-pulse bg-gray-100/10" />
          </p>
        </div>
      </div>
    );
  }

  if (!isPlaying) {
    return (
      <div className="group dark:text-white text-black relative flex w-72 items-start space-x-2 rounded-md transition-shadow grayscale hover:grayscale-0 select-none">
        <div className="flex-1">
          <p className="component font-bold whitespace-nowrap overflow-hidden relative block">
            Not Listening
          </p>  
          <p className="font-dark text-xs">Spotify</p>
        </div>
      </div>
    );
  }

  const title = isPlaying
    ? truncate(data?.title, MAX_TITLE_CHARS)
    : 'Not Listening';

  return (
    <div className="group w-72 space-x-2 rounded-md select-none">
      <a
        href={data.songUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer flex items-start gap-2 "
      >
        <div className="w-12 h-12 shadow-xl  rounded overflow-hidden">
          <img
            src={data.albumImageUrl}
            alt={data.album}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0"
          />
        </div>
        <div className="flex-1 group-hover:animate-pulse">
          <span className=" font-bold overflow-hidden relative block">
            {title}
          </span>
          <span className="font-dark text-xs">{data.artist}</span>
        </div>
      </a>
    </div>
  );
}
