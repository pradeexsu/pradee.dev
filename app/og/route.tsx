import { ImageResponse } from 'next/og';

export function GET(request: Request) {
  let url = new URL(request.url);
  let title = url.searchParams.get('title') || 'Pradeep Suthar';
  const avatar = url.searchParams.get('avatar');
  const description =
    url.searchParams.get('description') ||
    'Engineering Experience at @samllcase | Technology Enthusiast';

  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-start justify-between py-10 antialiased pl-10 bg-black">
        {avatar && (
          <img
            src={avatar}
            width={96}
            height={96}
            style={{
              borderRadius: '9999px',
              border: '6px solid #fff',
              alignSelf: 'flex-start',
            }}
          />
        )}
        <div tw="flex flex-col w-full items-start justify-between">
          <h2 tw="flex flex-col text-4xl font-bold tracking-tight text-left antialiased text-white">
            {title}
          </h2>
          {description && (
            <div tw="text-lg text-left text-neutral-200">{description}</div>
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
