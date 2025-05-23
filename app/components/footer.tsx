import { footerLinks } from 'data/info';
import AnchorLink from './link';

export default function Footer() {
  return (
    <footer className="mb-16 animate-intro sticky bottom-0 bg-black/80 backdrop-blur-lg">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        {footerLinks.map((link, idx) => (
          <li key={idx}>
            <AnchorLink link={link.link}>{link.label}</AnchorLink>
          </li>
        ))}
      </ul>
    </footer>
  );
}
