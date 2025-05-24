import Image from 'next/image';
import React from 'react';

function Construction() {
  return (
    <Image
      src="/working-on.gif"
      alt="Work in Progress"
      width={300}
      height={200}
      className="rounded-lg shadow-lg"
    />
  );
}

export default Construction;
