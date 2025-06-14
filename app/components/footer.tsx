import { footerLinks } from '@/data/info';
import AnchorLink from './link';
import SpotifyPlaying from './spotify-playing';

export default function Footer() {
  return (
    <footer className="mb-16 animate-intro sticky bottom-0 backdrop-blur-lg  flex flex-col-reverse sm:flex-row justify-between  border-t-[.1px] border-black/10 dark:border-white/10 gap-4 px-2 md:px-0 pt-2">
      <ul className="font-sm flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        {footerLinks.map((link, idx) => (
          <li key={idx}>
            <AnchorLink link={link.link}>{link.label}</AnchorLink>
          </li>
        ))}
      </ul>
      <SpotifyPlaying />
    </footer>
  );
}
