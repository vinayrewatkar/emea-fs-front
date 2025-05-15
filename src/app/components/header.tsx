'use client';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" aria-label="Eureeca">
          <Image
            src="/emea-logo-gray-blue.png"
            alt="logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/LeadershipTeam" className="text-gray-700 hover:text-blue-600">Leadership</Link>
          <Link href="/KeyClients" className="text-gray-700 hover:text-blue-600">Key-Clients</Link>
          <Link href="/hrcorner" className="text-gray-700 hover:text-blue-600">HR Corner</Link>
          <Link href="/GenAI" className="text-gray-700 hover:text-blue-600">GenAI</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {/* Mobile menu icon can be added here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
