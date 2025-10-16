import { Copyright } from 'lucide-react';

export default function Footer() {
  return (
    <div className='flex items-center py-4 justify-center gap-x-1'>
      Copyright {new Date().getFullYear()} <Copyright size={20} /> Yusuf
      Adeyemi.
    </div>
  );
}
