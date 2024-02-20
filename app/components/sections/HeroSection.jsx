"use client";

import { useLayoutEffect } from "react";

import ButtonWeb from "../ui/ButtonWeb";
import Circle from "../ui/Circle";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".title.hero", {
        y: 250,
        ease: "power4.out",
        duration: 2.5,
        skewY: 4,
        stagger: {
          amount: 0.3,
        },
        scrollTrigger: {
          trigger: "#Hero",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });
      gsap.from(".subtitle", {
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
      });

      gsap.from(".button_container", {
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
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="Hero">
      <div className="title_container">
        <h1 className="title hero">Designing the Future</h1>
      </div>
      <div className="title_container">
        <h1 className="title hero ">of the Web</h1>
      </div>

      <div className="subtitle_container">
        <p className="subtitle">
          We build the best websites and apps for your business.
        </p>
      </div>

      <div
        style={{
          marginTop: "2rem",
          display: "flex",
        }}
        className="button_container"
      >
        <ButtonWeb
          href="#Pricing"
          text="See plans"
          color="black"
          backgroundColor="white"
          width="10rem"
          height="3.5rem"
          margin="0 1rem 0 0"
        />

        <ButtonWeb
        href="#Contact"
          text="Contact us"
          color="white"
          backgroundColor="black"
          width="10rem"
          height="3.5rem"
          margin="0 0 0 1rem"
        />
      </div>

      <Circle color="orange" left="120px" bottom="-200px" zIndex="-1" />
      <Circle color="blue" bottom="-200px" zIndex="-1" />
      <Circle color="purple" bottom="-200px" zIndex="-1" right="120px" />
    </section>
  );
}

export default HeroSection;
