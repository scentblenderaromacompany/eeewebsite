import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-primary text-white shadow-lg">
      <div className="text-2xl font-bold">
        <Link href="/">
          <a>Eternal Elegance Emporium</a>
        </Link>
      </div>
      <div className="space-x-4">
        <Link href="/shop">
          <a className="hover:underline">Shop</a>
        </Link>
        <Link href="/about">
          <a className="hover:underline">About</a>
        </Link>
        <Link href="/contact">
          <a className="hover:underline">Contact</a>
        </Link>
        <Link href="/cart">
          <a className="hover:underline">Cart</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
