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
        'px-2 py-0.5 bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200/30 dark:border-gray-600/30 rounded-full inline-block align-middle shadow-sm select-none',
        className,
      )}
    >
      {children}
    </a>
  );
}

export default IconBadge;
