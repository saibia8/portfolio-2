'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ link }) => {
  const pathName = usePathname();
  return (
    <Link
      className={`rounded p-2 ${
        pathName === link.url && 'bg-[#2F4F4A] text-[#F1EAD8]'
      }`}
      href={link.url}
    >
      {link.label}
    </Link>
  );
};

export default NavLink;
