"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

import logo from "@/public/gold-logo.png";
import Book from "./Book";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="font-raleway sticky top-0 w-full flex  items-center md:items-start  justify-around md:justify-between bg-[#F5F5F3] px-4 py-2  z-10 text-md  h-20">
      <div className="flex-1 text-center md:hidden">
        <Book />
      </div>
      <div className="hidden md:block flex-1"></div>
      <Link className="flex-1 mx-auto " href="/">
        <Image src={logo} alt="logo" className="mx-auto w-20" />
      </Link>
      <button
        onClick={() => setIsMenuOpen(true)}
        className="md:hidden flex-1 text-[#C29C5B]"
      >
        MENU
      </button>
      <div className="text-lg hidden flex-1 md:flex md:flex-col overflow-visible items-end mt-6 ">
        <div className="flex flex-col uppercase text-sm font-medium space-y-1  lg:mr-10 md:mr-5 bg-[#F5F5F3]">
          <Link href="/" className="px-4  hover:text-[#C29C5B]">
            home
          </Link>
          <Link href="/service" className="px-4  hover:text-[#C29C5B]">
            service
          </Link>
          <Link href="/pricing" className="px-4  hover:text-[#C29C5B]">
            Pricing
          </Link>
          <Link href="/portfolio" className="px-4  hover:text-[#C29C5B]">
            portfolio
          </Link>
          <Link href="/about" className="px-4  hover:text-[#C29C5B]">
            about
          </Link>
          <Link href="/contact" className="px-4  hover:text-[#C29C5B]">
            contact
          </Link>
          <Link href="/book" className="px-4  hover:text-[#C29C5B]">
            Book
          </Link>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-white z-20  flex flex-1 flex-col items-center justify-center  duration-500 ${
          isMenuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-8 right-4 "
        >
          CLOSE
        </button>
        {/* Full-Screen mobile Menu Items */}
        <div className="flex flex-col items-center space-y-4 uppercase ">
          <Link
            onClick={() => setIsMenuOpen(false)}
            href="/"
            className="px-4 py-2  hover:text-[#C29C5B]"
          >
            home
          </Link>
          <Link
            onClick={() => setIsMenuOpen(false)}
            href="/about"
            className="px-4 py-2  hover:text-[#C29C5B]"
          >
            service
          </Link>
          <Link
            onClick={() => setIsMenuOpen(false)}
            href="/pricing"
            className="px-4 py-2  hover:text-[#C29C5B]"
          >
            Pricing
          </Link>
          <Link
            onClick={() => setIsMenuOpen(false)}
            href="/about"
            className="px-4 py-2  hover:text-[#C29C5B]"
          >
            portfolio
          </Link>
          <Link
            onClick={() => setIsMenuOpen(false)}
            href="/about"
            className="px-4 py-2  hover:text-[#C29C5B]"
          >
            about
          </Link>
          <Link
            onClick={() => setIsMenuOpen(false)}
            href="/contact"
            className="px-4 py-2  hover:text-[#C29C5B]"
          >
            contact
          </Link>
          <Link
            onClick={() => setIsMenuOpen(false)}
            href="/book"
            className="px-4 py-2  hover:text-[#C29C5B]"
          >
            Book
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
