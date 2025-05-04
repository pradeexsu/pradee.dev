import Image from 'next/image';

export default function NotFound() {
  return (
    <section>
      <Image
        src="/not-found.gif"
        alt="Not Found"
        width={300}
        height={170}
        className="rounded-lg shadow-lg animate-intro"
      />
      {/* <h1 className="mb-8 text-2xl font-semibold tracking-tighter animate-intro">
        404 - Page Not Found
      </h1> */}
      <p className="mb-4">The page you are looking for does not exist.</p>
      <a className="link" href="/">
        Go back to the homepage
      </a>
    </section>
  );
}
