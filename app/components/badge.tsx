import React from 'react';

function Badge({ icon }: { icon: string }) {
  return (
    <img
      src={icon}
      className="h-5 translate-y-1.5 border rounded-sm py-[1px] px-[2px] border-gray-600/50"
    />
  );
}

export default Badge;
