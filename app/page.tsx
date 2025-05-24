import './styles.scss';

import { info } from 'data/info';
import Badge from './components/badge';
import { BlogPosts } from './components/posts';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter animate-intro heading">
        Pradeep Suthar
      </h1>
      <p className="mb-4 animate-intro">
        {info.description.injectMany({
          '@smallcase': (val) => <Badge icon="/sc-white.svg">{val}</Badge>,
          '@upstox': (val) => <Badge icon="/upstox-white.svg">{val}</Badge>,
        })}
      </p>
      <div className="my-8 animate-intro">
        <BlogPosts />
      </div>
    </section>
  );
}
