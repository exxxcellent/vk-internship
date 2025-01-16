'use client';
// next
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// contsants
import { links } from '@/contsants/links';

export default function Navbar() {
    const path = usePathname();

    return (
        <nav className="w-full bg-blue-500">
            <ul className="flex h-full flex-wrap">
                {links.map((link) => {
                    const isActive = link.path === path;
                    const className = `p-5 hover:bg-blue-600 duration-200 ${
                        isActive ? 'bg-blue-700' : ''
                    }`;

                    return (
                        <li
                            key={link.path}
                            className={className}>
                            <Link
                                href={link.path}
                                className={`text-white h-full w-full`}>
                                {link.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
