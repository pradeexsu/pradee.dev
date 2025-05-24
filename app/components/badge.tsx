import React from 'react';
import { cx } from 'utils/class';

function Badge({ icon, className }: { icon: string; className?: string }) {
  return (
    <span className={cx('inline-flex items-center mx-1')}>
      <img
        src={icon}
        className={cx(
          'translate-y-1.5 border rounded-sm py-[1px] px-[2px] border-gray-600/50 h-5',
          className,
        )}
      />
    </span>
  );
}

export default Badge;
