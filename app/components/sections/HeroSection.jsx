"use client";

import { useLayoutEffect, useRef } from "react";

import ButtonWeb from "../ui/ButtonWeb";
import Circle from "../ui/Circle";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Background from "../ui/Background";

import "../../styles/heroanim.scss";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import ContactModal from "../ui/ContactModal";

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

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "#Hero",
        start: () =>
          heroRef.offsetHeight < window.innerHeight
            ? "top top"
            : "bottom bottom",
        end: () =>
          heroRef.offsetHeight < window.innerHeight
            ? "bottom bottom"
            : "bottom top",
        pin: true,
        pinSpacing: false,
        scrub: 4,
        markers: false,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="Hero" ref={heroRef}>
      <Background />
      <div className="flex flex-col justify-center items-center w-fit lg:flex-row">
        <div className="title_container py-2 flex w-fit">
          <h1 className="title hero prueba text-8xl font-medium tracking-tight ">
            Designing the
          </h1>
        </div>
        <div className="title_container py-2 flex md:ml-5">
          <h1 className="title hero prueba text-8xl font-medium tracking-tight ">
            Future
          </h1>
        </div>
      </div>
      <div className="title_container">
        <h1 className="title hero text-8xl font-medium tracking-tight px-2">
          of the Web
        </h1>
      </div>

      <div className="subtitle_container mt-4">
        <p className="subtitle text-gray-500 text-lg lg:text-3xl text-center px-8 lg:px-0">
          We build the best websites and apps for your startups.
        </p>
      </div>

      <div
        style={{
          marginTop: "1.2rem",
          display: "flex",
        }}
        className="button_container flex gap-8 opacity-0"
      >
        <Link href="#Services">
          <Button
            className="bg-white lg:w-[160px] lg:text-[18px] lg:h-[55px] border-gray-300 border-1 block"
            size="lg"
            radius="full"
            variant="bordered"
          >
            See perks
          </Button>
        </Link>
        <ContactModal
          className="bg-black text-white lg:w-[160px] lg:text-[18px] lg:h-[55px]"
          size="lg"
          radius="full"
          buttonText="Contact us"
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
    </section>
  );
}

export default HeroSection;
