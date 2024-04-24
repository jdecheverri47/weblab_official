"use client";
import Image from "next/image";
import logo from "/public/images/logo.png";
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
      <nav className="px-[8.5rem]">
        <div className="flex gap-10">
          <Link href="https://weblabs.com.co">
            <Image alt="" src={logo} priority={true} className="w-[2.8rem] " />
          </Link>
          <ul className="ml-10">
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
