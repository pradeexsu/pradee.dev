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
        className="mb-8 text-2xl font-semibold tracking-tighter animate-intro heading"
        onDoubleClick={toggleTheme}
      >
        Pradeep Suthar
      </h1>
      <p className="mb-4 animate-intro dark:text-white">
        {info.description.injectMany({
          '@smallcase': () => (
            <IconBadge>
              <SmallcaseLogo />
            </IconBadge>
          ),
          '@upstox': () => (
            <IconBadge>
              <UpstoxLogo />
            </IconBadge>
          ),
        })}
      </p>
      <div className="my-8 animate-intro">
        {/* <BlogPosts /> */}
        <Construction />
      </div>
    </section>
  );
}
