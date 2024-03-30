'use client'
import Image from "next/image";
import logo from "/public/images/logo.png";
import ButtonWeb from "./ButtonWeb";
import '@/app/styles/navbar.css';

import { useState, useEffect } from "react";

function Header() {
  const [scroll, setScroll] = useState(Window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = scroll > currentScrollPos;

      setScroll(currentScrollPos);
      setVisible(isVisible);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scroll]);

  return (
    <header className={visible ? 'navbar navbar-visible' : 'navbar navbar-hidden'}>
      <nav >
        <Image
          alt=""
          src={logo}
          style={{
            width: "4rem",
          }}
          priority={true}
        />
        <ul>
          <li className="li-ben">Benefits</li>
          <li className="li-ser">Services</li>
          <li className="li-pri">Pricing</li>
          <li className="li-ab">About Us</li>
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
