import React from 'react';

function Anc({
  icon,
  label,
  link,
  children,
  newTab = true,
}: {
  label?: string;
  link: string;
  newTab?: boolean;
  children?: React.ReactNode;
  icon?: string;
}) {
  return (
    <span className="inline-flex items-center mx-1">
      {icon ? (
        <img
          src={icon}
          className="h-5 translate-y-1.5 border rounded-sm py-[1px] px-[2px] border-gray-600/50"
        />
      ) : (
        <a
          className="link"
          rel="noopener noreferrer"
          target={newTab ? '_blank' : '_self'}
          href={link}
        >
          {label || children}
        </a>
      )}
    </span>
  );
}

export default Anc;
