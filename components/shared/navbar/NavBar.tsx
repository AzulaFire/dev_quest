import { SignedIn, UserButton } from '@clerk/nextjs';

import Image from 'next/image';
import Link from 'next/link';
import Theme from './Theme';
import MobileNav from './MobileNav';
import GlobalSearch from './search/GlobalSearch';

const NavBar = () => {
  return (
    <nav className='flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12'>
      <Link href={'/'} className='flex items-center gap-1'>
        <Image
          src={'/assets/images/code.png'}
          alt='DevQuest'
          width={45}
          height={45}
        />
        <p className='h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden'>
          Techno<span className='text-primary-500'>Flow</span>
        </p>
      </Link>
      <GlobalSearch />
      <div className='flex-between gap-5'>
        <Theme />
        <SignedIn>
          <UserButton
            afterSignOutUrl='/'
            appearance={{
              elements: {
                avatarBox: 'h-10 w-10',
              },
              variables: {
                colorPrimary: '#ff7000',
              },
            }}
          />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};
export default NavBar;
