import Link from 'next/link';
import Image from 'next/image';

import { HeartButton } from '.';

const Navbar = () => {
  return (
    <header className="w-full ansolute z-10">
      <nav className="max-w-[1440px] max-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="charity logo"
            width={100}
            height={5}
            className="object-contain"
          />
        </Link>

        <HeartButton />
      </nav>
    </header>
  );
};

export default Navbar;
