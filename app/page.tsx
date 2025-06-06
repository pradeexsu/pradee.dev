'use client';

import './../utils/string';
import './styles.scss';

import { info } from '@/data/info';
import Construction from './components/construction';
import { usethemeStore } from '@/store/store';
import UpstoxLogo from './common/Upstox';
import SmallcaseLogo from './common/Smallcase';
import IconBadge from './components/icon-badge';

export default function Page() {
  const { toggle, dark } = usethemeStore();

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    toggle();
  };

  return (
    <section>
      <h1
        className="text-3xl font-semibold tracking-tighter animate-intro heading"
        onDoubleClick={toggleTheme}
      >
        Pradeep Suthar
      </h1>
      <div className="text-xs font-light animate-intro">
        Building financial systems at scale
      </div>

      <p className="mt-10 my-4 animate-intro dark:text-white ">
        {info.description.injectMany({
          '@smallcase': () => (
            <IconBadge href="https://smallcase.com">
              <SmallcaseLogo />
            </IconBadge>
          ),
          '@upstox': () => (
            <IconBadge href="https://upstox.com">
              <UpstoxLogo />
            </IconBadge>
          ),
        })}
      </p>

      <p className="my-4 animate-intro dark:text-white ">
        Outside of engineering, I enjoy walking in the woods and simply taking
        in the mountains, open sky, and waters.
      </p>
      <div className="my-8 animate-intro">
        {/* <BlogPosts /> */}
        <Construction />
      </div>
    </section>
  );
}
