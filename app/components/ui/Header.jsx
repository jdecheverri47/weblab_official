"use client";
import Image from "next/image";
import logo from "/public/images/logo.png";
import ButtonWeb from "./ButtonWeb";
import "@/app/styles/navbar.css";

import { useState, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";

import Link from "next/link";

function Header() {
  const [showHeader, setShowHeader] = useState(true);

  const handleRevert = (ctx) => {
    ctx.revert();
    document.querySelector("header").style.transition =
      "transform 1s ease-in-out";

    if (document.querySelector(".navbar-visible")) {
      document.querySelector(".navbar-visible").style.transform =
        "translateY(150%)";
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("header", {
        yPercent: -100,
        ease: "power4.out",
        onComplete: () => handleRevert(ctx),
        duration: 2.5,
      });
    });
    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    let lastScroll = 0;

    const handleMouseMove = (e) => {
      const mouseY = e.clientY;
      if (mouseY <= 200) {
        setShowHeader(true);
      }
    };

    function handleScroll() {
      const currentScroll =
        window.scrollY || document.documentElement.scrollTop;
      const isScrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;

      const isScrollingDown = currentScroll > lastScroll;
      const isScrollingUp = currentScroll < lastScroll;

      const isScrolling = isScrollingDown && !isScrolledToBottom;

      if (isScrolling) {
        setShowHeader(false);
      } else if (isScrollingUp || isScrolledToBottom) {
        setShowHeader(true);
      }

      lastScroll = currentScroll;
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <header
      className={`${
        showHeader ? "navbar-visible" : "navbar-hidden"
      } navbar shadow-lg`}
    >
      <nav>
        <Link href="https://weblabs.com.co">
        <Image
          alt=""
          src={logo}
          priority={true}
          className="w-[3rem] lg:ml-6 "
        />
        </Link>
        <ul className="">
          <Link href="#Benefits">
            <li className="li-ben">Benefits</li>
          </Link>
          <Link href="#Services">
            <li className="li-ser">Services</li>
          </Link>
          {/* <Link href="#Pricing">
            <li className="li-pri">Pricing</li>
          </Link> */}
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
            width="7rem"
            height="2.5rem"
            margin="0 0 0 2.5rem"
            className="button_header"
            shadow="shadow-lg"
            borderParams="2px solid #5c5c5c"
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
