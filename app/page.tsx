import Image from 'next/image';
import { BlogPosts } from './components/posts';
import Anc from './components/link';
import './styles.scss';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter animate-intro heading">
        Pradeep Suthar
      </h1>
      <p className="mb-4 animate-intro">
        I'm a software developer building innovative investing tools at{' '}
        <Anc link="https://smallcase.com" new_tab>
          smallcase
        </Anc>
        , previously crafting investing experiences at{' '}
        <Anc link="https://upstox.com" label="Upstox" new_tab />. I have a .
        Passionate about clean code, product thinking, and shaping the future of
        fintech.
      </p>
      <div className="my-8 animate-intro">
        <Image
          src="/working-on.gif"
          alt="Portfolio"
          width={300}
          height={200}
          className="rounded-lg shadow-lg"
        />
        <BlogPosts />
      </div>
    </section>
  );
}
