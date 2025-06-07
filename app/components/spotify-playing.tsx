'use client';

import useSWR from 'swr';

export default function SpotifyPlaying() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());

  // Set refreshInterval to 3000ms (3 seconds)
  const { data, isLoading } = useSWR('/api/spotify', fetcher, {
    refreshInterval: 3000,
  });

  // Show shimmer only if loading and not sure about playing state yet
  const showShimmer = isLoading && !data?.isPlaying;

  // Limit title length for layout stability
  const MAX_TITLE_CHARS = 32;
  const getTitle = (title: string) =>
    title.length > MAX_TITLE_CHARS
      ? title.slice(0, MAX_TITLE_CHARS - 1) + '…'
      : title;

  return (
    <main className="flex justify-start group">
      <a
        target="_blank"
        rel="noopener noreferer"
        href={
          data?.isPlaying
            ? data.songUrl
            : 'https://open.spotify.com/user/erence21?si=yTsrZT5JSHOp7tn3ist7Ig'
        }
        className="relative flex w-72 items-start space-x-2 rounded-md transition-shadow hover:shadow-md"
      >
        <div className="w-12 shadow-xl grayscale group-hover:grayscale-0">
          {showShimmer ? (
            <div className="animate-pulse bg-gray-300 dark:bg-white/10 rounded w-12 h-12" />
          ) : (
            data?.isPlaying && (
              <img
                src={data?.albumImageUrl}
                alt={data?.album}
                className="w-12 h-12 object-cover rounded"
              />
            )
          )}
        </div>

        <div className="flex-1">
          <p
            className="component font-bold  whitespace-nowrap overflow-hidden relative block"
            title={data?.title}
          >
            {showShimmer ? (
              <span className="inline-block h-4 w-full bg-gray-200 dark:bg-white/10 rounded animate-pulse" />
            ) : data?.isPlaying ? (
              <span
                className="block overflow-hidden text-ellipsis pr-6"
                style={{
                  background:
                    'linear-gradient(to right, currentColor 80%, transparent 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {getTitle(data.title)}
              </span>
            ) : (
              'Not Listening'
            )}
            {/* Fade effect using Tailwind */}
            {data?.isPlaying && (
              <span className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-white dark:from-black to-transparent" />
            )}
          </p>
          <p className="font-dark text-xs">
            {showShimmer ? (
              <span className="inline-block h-3 w-16 bg-gray-100/50 dark:bg-white/10 rounded animate-pulse" />
            ) : data?.isPlaying ? (
              data.artist
            ) : (
              'Spotify'
            )}
          </p>
        </div>
      </a>
    </main>
  );
}
