import React from 'react';

function Anc({
  label,
  link,
  children,
  newTab = true,
}: {
  label?: string;
  link: string;
  newTab?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center mx-1">
      <a
        className="link"
        rel="noopener noreferrer"
        target={newTab ? '_blank' : '_self'}
        href={link}
      >
        {label || children}
      </a>
    </span>
  );
}

export default Anc;
