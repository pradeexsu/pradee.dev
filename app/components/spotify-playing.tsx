'use client';

import useSWR from 'swr';
import SpotifyIcon from '../common/Spotify';

export default function SpotifyPlaying() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());

  // Set refreshInterval to 3000ms (3 seconds)
  const { data, isLoading } = useSWR('/api/spotify', fetcher, { refreshInterval: 3000 });

  // Show shimmer only if loading and not sure about playing state yet
  const showShimmer = isLoading && !data?.isPlaying;

  return (
    <main className="flex items-center justify-start group">
      <a
        target="_blank"
        rel="noopener noreferer"
        href={
          data?.isPlaying
            ? data.songUrl
            : 'https://open.spotify.com/user/erence21?si=yTsrZT5JSHOp7tn3ist7Ig'
        }
        className="relative flex w-64 sm:w-80 items-start space-x-4 rounded-md p-5 transition-shadow hover:shadow-md"
      >
        <div className="w-12 shadow-xl grayscale group-hover:grayscale-0">
          {showShimmer ? (
            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 rounded w-12 h-12" />
          ) : data?.isPlaying ? (
            <img
              src={data?.albumImageUrl}
              alt={data?.album}
              className="w-12 h-12 object-cover rounded"
            />
          ) : (
            <SpotifyIcon />
          )}
        </div>

        <div className="flex-1">
          <p className="component font-bold" title={data?.title}>
            {showShimmer
              ? <span className="inline-block h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              : data?.isPlaying
                ? data.title
                : 'Not Listening'}
          </p>
          <p className="font-dark text-xs" title={data?.artist}>
            {showShimmer
              ? <span className="inline-block h-3 w-16 bg-gray-100 dark:bg-gray-800 rounded animate-pulse" />
              : data?.isPlaying
                ? data.artist
                : 'Spotify'}
          </p>
        </div>
      </a>
    </main>
  );
}
