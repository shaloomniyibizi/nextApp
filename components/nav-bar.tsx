import Link from 'next/link';
import { ThemeToggle } from './dark-button';

function NavBar() {
  return (
    <nav className='flex justify-between items-center px-32 py-4 bg-blue-800/10 shadow-sm'>
      <Link href='/'>UserAuth-App</Link>
      <ThemeToggle />
    </nav>
  );
}

export default NavBar;
