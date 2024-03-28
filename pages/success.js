import React from 'react';
import Link from 'next/link';

const Success = () => {
  return (
    <div>
      <h1>Thanks for your message!</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
};

export default Success;
