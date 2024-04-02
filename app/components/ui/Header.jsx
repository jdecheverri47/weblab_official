"use client";
import Image from "next/image";
import logo from "/public/images/logo.png";
import ButtonWeb from "./ButtonWeb";
import "@/app/styles/navbar.css";

import { useState, useEffect } from "react";
import Link from "next/link";

function Header() {
  const [scroll, setScroll] = useState(() => {
    if (typeof window !== "undefined") {
      return window.scrollY;
    }
    return 0;
  });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseY = e.clientY;
      if (mouseY <= 200) {
        setVisible(true);
      }
    };
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = scroll > currentScrollPos;

      setScroll(currentScrollPos);
      setVisible(isVisible);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [scroll]);

  return (
    <header
      className={visible ? "navbar navbar-visible" : "navbar navbar-hidden"}
    >
      <nav>
        <Image
          alt=""
          src={logo}
          priority={true}
          className="w-[3rem] md:w-[4rem]"
        />
        <ul>
          <Link href="#Benefits">
            <li className="li-ben">Benefits</li>
          </Link>
          <Link href="#Services">
            <li className="li-ser">Services</li>
          </Link>
          <Link href="#Pricing">
            <li className="li-pri">Pricing</li>
          </Link>
          <Link href="#Faq">
            <li className="li-ab">FAQ</li>
          </Link>
        </ul>
        <div>
          <ButtonWeb
            href="#Contact"
            text="Contact Us"
            color="white"
            backgroundColor="black"
            width="9rem"
            height="3rem"
            margin="0 0 0 1.5rem"
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
