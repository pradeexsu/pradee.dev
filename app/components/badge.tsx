import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`px-2 py-1 bg-white/80 dark:bg-black/80 text-gray-800 dark:text-gray-200 text-xs rounded-full backdrop-blur-sm border border-gray-200/30 dark:border-gray-600/30 shadow-sm select-none ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;
