"use client";

import dynamic from "next/dynamic";
import { useLayoutEffect, useState, useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene from "../ui/Scene";
import SceneMobile from "../ui/SceneMobile";

gsap.registerPlugin(ScrollTrigger);

function HookSection() {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#Hook",
          start: "top center",
          end: "bottom center",
          scrub: 2,
          markers: false,
          pinSpacing: false,
        },
      });

      tl.fromTo(
        ".title_container_hook",
        {
          yPercent: 0,
          duration: 1,
        },
        {
          yPercent: 20,
          duration: 1,
        },
        0
      );

     tl.from(".description.left", {
      opacity: 0,
      yPercent: 100,
      ease: "power4.out",
      duration: 5,
     }, 1)

     tl.from(".description.right", {
      opacity: 0,
      yPercent: 100,
      ease: "power4.out",
      duration: 5,
     }, 1)
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);
  
  return (
    <section id="Hook">
      <div className="title_container_hook flex justify-center items-center">
        <h1 className="lg:text-6xl text-3xl px-5 lg:mt-[2rem] lg:leading-[4rem] text-center tracking-tight font-medium lg:max-w-[700px]">
          The <strong className="bg-gradient-to-b from-cyan-400 to-indigo-600 text-transparent bg-clip-text font-medium ">highest quality</strong> for software production in the market
        </h1>
      </div>
      <div className="description left">
        <p className="max-w-[250px] md:max-w-sm">
          Break the rules of modern websites with beautiful 3D animations on your web.
        </p>
      </div>
      <div className="description right">
        <p className="max-w-[250px] md:max-w-md">
          Catch the eye of your customers with the best animations on the web. Say no to boring websites!
        </p>
      </div>

      <div className="h-[80%]">
        {isMobile ? <SceneMobile /> : <Scene />}
      </div>
    </section>
  );
}

export default HookSection;
