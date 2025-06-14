'use client';

import './../utils/string';
import './styles.scss';

import { info } from '@/data/info';
import Projects from './components/projects';
import { usethemeStore } from '@/store/store';
import UpstoxLogo from './common/Upstox';
import SmallcaseLogo from './common/Smallcase';
import IconBadge from './components/icon-badge';
import { SunIcon } from './common/motion/SunIcon';
import { MoonIcon } from './common/motion/MoonIcon';

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
      <div className="flex justify-between items-end">
        <h1 className="text-3xl font-semibold tracking-tighter animate-intro heading">
          Pradeep Suthar
        </h1>
        <div onClick={toggleTheme} className="animate-intro select-none">
          {dark ? <SunIcon /> : <MoonIcon />}
        </div>
      </div>
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
      <p className="my-4 animate-intro ">
        Beyond engineering, I enjoy downhill skateboarding. I've stayed curious
        about defense and tech developments.
      </p>
      <div className="my-8 animate-intro">
        {/* <BlogPosts /> */}
        <Projects />
      </div>
    </section>
  );
}
