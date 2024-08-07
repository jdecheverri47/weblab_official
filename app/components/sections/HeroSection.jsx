"use client";

import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Background from "../ui/Background";

import "../../styles/heroanim.scss";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import ContactModal from "../ui/ContactModal";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".title.hero",
        {
          y: 250,
          ease: "power4.out",
          duration: 1.5,
          skewY: 12,
          stagger: {
            amount: 0.3,
          },
          scrollTrigger: {
            trigger: "#Hero",
            start: "top center",
            toggleActions: "play none none none",
            // markers: true,
          },
        },
        {
          y: 0,
          skewY: 0,
          opacity: 1,
          duration: 1.5,
        }
      );
      gsap.fromTo(
        ".subtitle",
        {
          opacity: 0,
          ease: "power4.out",
          delay: 1.5,
          duration: 2.5,
          stagger: {
            amount: 0.3,
          },
          scrollTrigger: {
            trigger: "#Hero",
            start: "top center",
            toggleActions: "play none none none",
            // markers: true,
          },
        },
        {
          opacity: 1,
          delay: 1.5,
          duration: 2.5,
        }
      );

      gsap.fromTo(
        ".button_container",
        {
          opacity: 0,
          ease: "power4.out",
          delay: 2,
          duration: 2.5,
          scrollTrigger: {
            trigger: "#Hero",
            start: "top center",
            toggleActions: "play none none none",
            // markers: true,
          },
        },
        {
          opacity: 1,
          delay: 2,
          duration: 2.5,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="Hero" ref={heroRef}>
      <Background />
      <div className="flex flex-col justify-center items-center w-fit lg:flex-row">
        <div className="title_container py-2 flex w-fit">
          <h1 className="title hero prueba text-7xl font-medium tracking-tight ">
            Designing the
          </h1>
        </div>
        <div className="title_container lg:py-2 flex md:ml-5">
          <h1 className="title hero prueba text-7xl font-medium tracking-tight ">
            Future
          </h1>
        </div>
      </div>
      <div className="title_container">
        <h1 className="title hero text-7xl font-medium tracking-tight px-2 ">
          of the Web
        </h1>
      </div>

      <div className="subtitle_container mt-4">
        <p className="subtitle text-gray-500 text-lg lg:text-2xl text-center px-8 lg:px-0">
          We build the best websites and apps for your startups.
        </p>
      </div>

      <div className="button_container flex gap-8 opacity-0">
        <Link href="#Benefits" className="hover:opacity-60 transition-all duration-300 ease-in-out">
          <span className="px-6 lg:text-[16px] lg:h-[40px] relative z-30 flex items-center justify-center">
            See perks
            <ChevronRightIcon className="text-indigo-950 ml-4 w-6 h-6" />
          </span>
        </Link>
        <ContactModal
          className="bg-gradient-to-r from-fuchsia-400 to-sky-400  text-white lg:text-[16px] lg:h-[40px] pl-4 pr-3 group hover:scale-105 "
          size="md"
          radius="full"
          buttonText="Contact us"
          endcontent={<ChevronRightIcon className="text-white w-6 h-6 group-hover:translate-x-1 transition-all duration-300 ease-in-out" />}
        />
      </div>

      {/* <Circle color="orange" left="120px" bottom="-200px" zIndex="-1" />
      <Circle color="blue" bottom="-200px" zIndex="-1" />
      <Circle color="purple" bottom="-200px" zIndex="-1" right="120px" /> */}
      <span className="absolute bottom-0 left-35 opacity-[3%] text-sm">
        For God so loved the world that he gave his one and only Son, that
        whoever believes in him shall not perish but have eternal life. Jn 3:16
        NIV
      </span>
      <div className="absolute bottom-0 left-0 h-[2.5rem] w-full bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

export default HeroSection;
