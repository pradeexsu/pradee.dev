import { info } from 'data/info';
import Anc from './components/link';
import './styles.scss';

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter animate-intro heading">
        Pradeep Suthar
      </h1>
      <p className="mb-4 animate-intro">
        {info.description.injectMany({
          '@smallcase': (val) => (
            <Anc link="https://smallcase.com" icon="/sc-white.svg">
              {val}
            </Anc>
          ),
          '@upstox': (val) => (
            <Anc link="https://upstox.com" icon="/upstox-white.svg">
              {val}
            </Anc>
          ),
        })}
      </p>
      <div className="my-8 animate-intro"> </div>
    </section>
  );
}
