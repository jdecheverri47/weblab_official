"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import bento from "@/public/images/offer/bento.png";
import purple from "@/public/images/offer/dark-purple.png";
import shoes from "@/public/images/offer/shoes.png";
import music from "@/public/images/offer/music.png";
import trip from "@/public/images/offer/triptrap.png";
import mobile from "@/public/images/offer/mobile.png";
import web3 from "@/public/images/offer/web3.0.png";
import figma from "@/public/images/offer/figma.png";
import money from "@/public/images/offer/moneymastery.png";
import puremoda from "@/public/images/offer/puremodalong.png";
import pets from "@/public/images/offer/peets.png";
import app from "@/public/images/offer/app.png";
import debt from "@/public/images/offer/debt.png";

gsap.registerPlugin(ScrollTrigger);

function Showcase() {
  const titleRef = useRef(null);
  const columnLeftRef = useRef(null);
  const columnRightRef = useRef(null);
  const columnCenterRef = useRef(null);

  const columnOne = [bento, figma, music, pets];
  const columnTwo = [purple, shoes, puremoda, trip];
  const columnThree = [web3, mobile, money, app, debt];

  const colOneMap = columnOne.map((image, index) => {
    return (
      <div
        key={index}
        className="overflow-hidden rounded-lg card-box-showcase-shadow  "
      >
        <Image src={image} alt="bentogrid" />
      </div>
    );
  });

  const colTwoMap = columnTwo.map((image, index) => {
    return (
      <div
        key={index}
        className="overflow-hidden rounded-lg card-box-showcase-shadow   "
      >
        <Image src={image} alt="bentogrid" />
      </div>
    );
  });

  const colThreeMap = columnThree.map((image, index) => {
    return (
      <div
        key={index}
        className="overflow-hidden rounded-lg card-box-showcase-shadow   "
      >
        <Image src={image} alt="bentogrid" />
      </div>
    );
  });


  useLayoutEffect(() => {
    const title = titleRef.current;

    let mm = gsap.matchMedia(),
      breakPoint = 800;

 
    mm.add("(width <= 768px)",
      (context) => {
        // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: title,
            start: "center center",
            end: "+=2550",
            pin: true,
            scrub: 2,
            markers: false,
            pinSpacing: true,
          },
        });
        gsap.to(title, {
          scale: 1.0,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            end: "bottom center",
            scrub: 2,
            markers: false,
          },
        });
      }
    );

    mm.add("(width > 768px) and (width <= 1024px)", (context) => {
      // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: title,
          start: "center center",
          end: "+=1100",
          pin: true,
          scrub: 2,
          markers: false,
          pinSpacing: true,
        },
      });
      gsap.to(title, {
        scale: 1.0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          end: "bottom center",
          scrub: 2,
          markers: false,
        },
      });
    });

    mm.add("(width > 1024px) and (width <= 1300px) ", (context) => {
      // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: title,
          start: "center center",
          end: "+=1350",
          pin: true,
          scrub: 2,
          markers: false,
          pinSpacing: true,
        },
      });
      gsap.to(title, {
        scale: 1.0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          end: "bottom center",
          scrub: 2,
          markers: false,
        },
      });
    });

    mm.add("(width > 1300px) and (width < 1550px) ", (context) => {
      // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: title,
          start: "center center",
          end: "+=1500",
          pin: true,
          scrub: 2,
          markers: false,
          pinSpacing: true,
        },
      });
      gsap.to(title, {
        scale: 1.0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          end: "bottom center",
          scrub: 2,
          markers: false,
        },
      });
    });

    mm.add("(width > 1550px) ", (context) => {
      // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: title,
          start: "center center",
          end: "+=2000",
          pin: true,
          scrub: 2,
          markers: false,
          pinSpacing: true,
        },
      });
      gsap.to(title, {
        scale: 1.0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: title,
          start: "top 80%",
          end: "bottom center",
          scrub: 2,
          markers: false,
        },
      });
    });

    return () => mm.revert();

  }, []);

  useLayoutEffect(() => {
    const title = titleRef.current;
    const columnLeft = columnLeftRef.current;
    const columnRight = columnRightRef.current;
    const columnCenter = columnCenterRef.current;
    if (window.innerWidth > 1023) {
      const ctx = gsap.context(() => {
        gsap.from(columnLeft, {
          opacity: 0.8,
          xPercent: 30,
          yPercent: 3,
          scale: 0.8,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            end: "bottom center",
            scrub: 2,
            markers: false,
          },
        });
        gsap.from(columnRight, {
          opacity: 0.8,
          xPercent: -30,
          yPercent: 3,
          scale: 0.8,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            end: "bottom center",
            scrub: 2,
            markers: false,
          },
        });
        gsap.from(columnCenter, {
          opacity: 0.8,
          scale: 0.8,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            end: "bottom center",
            scrub: 2,
            markers: false,
          },
        });
      });
      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      id="Process"
      className="w-full h-full p-[1rem] pb-[6rem] lg:py-[8.5rem] lg:px-[4rem] relative"
    >
      <div
        className="w-full flex justify-center absolute  z-30 left-0 scale-75"
        ref={titleRef}
      >
        <div className="bg-white bg-opacity-80 border-2 border-grey-300 p-5 lg:p-10 h-fit w-fit rounded-[35px] lg:rounded-[50px] shadow-box-weblabs backdrop-blur-md">
          <h1 className="text-[42px] lg:text-8xl font-medium tracking-tight relative bg-clip-text bg-gradient-to-b from-indigo-950 to-indigo-900 text-transparent">
            Made in <strong className="font-medium  ">WebLabs</strong>{" "}
          </h1>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-3 relative gap-8 mt-[4rem] lg:mt-[7rem]">
        <div className="gap-8 flex flex-col relative z-10" ref={columnLeftRef}>
          {colOneMap}
        </div>
        <div className="gap-8 flex flex-col mt-5 lg:mt-0" ref={columnCenterRef}>
          {colTwoMap}
        </div>
        <div className="gap-8 hidden lg:flex lg:flex-col" ref={columnRightRef}>
          {colThreeMap}
        </div>
      </div>
    </section>
  );
}

export default Showcase;
