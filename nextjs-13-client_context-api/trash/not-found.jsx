import React from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/router';

function NotFound() {
  return (
    <main className='min-h-screen bg-blue-50 pt-40 text-center text-gray-400 text-[20px]'>
      <p className='mb-12'>
        You're lost buddy... <br /> so sorry we don't see, to have the page
        you're looking for.
      </p>
      <Link href='/' className='underline text-blue-500 text-center'>
        Please return home
      </Link>
    </main>
  );
}

export default NotFound;
