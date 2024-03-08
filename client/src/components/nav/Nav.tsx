import Link from 'next/link';

interface NavProps {
  user?: string;
}

const Nav: React.FC<NavProps> = ({ user }) => {
  return (
    <ul>
      <li>
        <Link href="/" passHref>
          Home
        </Link>
      </li>
      <li>
        <Link href="/profile" passHref>
          Profile
        </Link>
      </li>
      <li>
        <Link href="/messages" passHref>
          Messages
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
