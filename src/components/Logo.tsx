import Link from 'next/link';

export default function Logo() {
  return (
    <Link href='#' className='group'>
      <div className='relative size-10 flex items-center justify-center'>
        <div className='absolute inset-0 rotate-45 border-2 border-gray-900 rounded-sm'></div>
        <h1 className='text-gray-900 font-bold text-xl font-mono'>A</h1>
      </div>
    </Link>
  );
}
