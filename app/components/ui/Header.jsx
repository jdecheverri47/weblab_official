"use client";
import Image from "next/image";
import logo from "/public/images/WebLabs-logo.png";
import "@/app/styles/navbar.css";
import { useState, useEffect, useLayoutEffect } from "react";

import Link from "next/link";
import ContactModal from "./ContactModal";

function Header() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10); // Adjust threshold as needed (e.g., higher for a later change)
    };

    window.addEventListener("scroll", handleScroll); // Add event listener

    return () => {
      window.removeEventListener("scroll", handleScroll); // Remove listener on unmount
    };
  }, []); 

  return (
    <header  className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <nav className="px-[1rem] lg:px-[8.5rem]">
        <div className="flex gap-10 items-center">
          <Link href="https://weblabs.com.co">
            {/* <Image alt="" src={logo} priority={true} className="w-[7rem] " /> */}
            <h1 className="font-bold text-2xl tracking-tighter bg-gradient-to-t from-black to-gray-500 text-transparent bg-clip-text px-2">WebLabs</h1>
          </Link>
          <ul className="ml-10 mt-2">
            <Link href="#Benefits">
              <li className="li-ben">Benefits</li>
            </Link>
            <Link href="#Services">
              <li className="li-ser">Services</li>
            </Link>
            <Link href="#Faq">
              <li className="li-ab">FAQ</li>
            </Link>
          </ul>
        </div>
        <div>
          <ContactModal
            className="bg-black text-white shadow-lg"
            size="md"
            radius="lg"
            variant="shadow"
            buttonText="Contact us"
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
