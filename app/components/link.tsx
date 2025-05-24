import React from 'react';

function Anc({
  label,
  link,
  new_tab,
  children,
}: {
  label?: string;
  link: string;
  new_tab?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <a
      className="link"
      rel="noopener noreferrer"
      target={new_tab ? '_blank' : '_self'}
      href={link}
    >
      {label || children}
    </a>
  );
}

export default Anc;
