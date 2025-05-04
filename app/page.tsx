// import { BlogPosts } from "app/components/posts";
import Image from 'next/image';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter animate-intro">
        Pradeep Suthar
      </h1>
      <p className="mb-4 animate-intro">
        I'm a software developer building innovative investing tools at{' '}
        <a className="link" target="_blank" href="https:/smallcase.com">
          Smallcase
        </a>
        , previously crafting investing experiences at{' '}
        <a className="link" target="_blank" href="https://upstox.com">
          Upstox
        </a>
        . Passionate about clean code, product thinking, and shaping the future
        of fintech.
      </p>
      <div className="my-8 animate-intro">
        <Image
          src="/working-on.gif"
          alt="Portfolio"
          width={300}
          height={200}
          className="rounded-lg shadow-lg"
        />
        {/* <BlogPosts /> */}
      </div>
    </section>
  );
}
