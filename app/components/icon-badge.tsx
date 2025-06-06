import React from 'react';
import { cx } from '../../utils/class';

function IconBadge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cx(
        'mx-1 px-1 py-0.5 border-[.5px] border-black/40 dark:border-white/40 rounded inline-block -mb-1',
        className,
      )}
    >
      {children}
    </span>
  );
}

export default IconBadge;
