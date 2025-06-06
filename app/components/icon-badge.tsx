import React from 'react';
import { cx } from '../../utils/class';

function IconBadge({
  className,
  children,
  href = '#',
}: {
  className?: string;
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cx(
        'px-1 py-0.5 border-[.5px] border-black/40 dark:border-white/40 rounded inline-block align-middle',
        className,
      )}
    >
      {children}
    </a>
  );
}

export default IconBadge;
