import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image alt="logo" src={'/IMG_3535.JPG'} width={100} height={100} />
          <nav>
            <ul>
              <li>
                <Link href="/" passHref>
                    Home
                </Link>
              </li>
              <li>
                <Link href="/events" passHref>
                    Events
                </Link>
              </li>
              <li>
                <Link href="/about-us" passHref>
                    About 
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title">OneKeFish</p>
      </div>
    </header>
  );
};