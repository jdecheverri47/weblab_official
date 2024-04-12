"use client";

import dynamic from "next/dynamic";
import { useLayoutEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene from "../ui/Scene";
import SceneMobile from "../ui/SceneMobile";

gsap.registerPlugin(ScrollTrigger);

function HookSection() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#Hook",
          start: "top 80%",
          end: "+=1500",
          scrub: 2,
          markers: false,
          pinSpacing: false,
        },
      });

      tl.fromTo(
        ".title_container_hook",
        {
          yPercent: 0,
          ease: "none",
          duration: 1,
        },
        {
          yPercent: 20,
          ease: "none",
          duration: 1,
        },
        0
      );

      tl.from(
        ".description.left",
        {
          yPercent: 20,
          opacity: 0,
          duration: 0.3,
        },
        0.5
      );
      tl.to(
        ".description.left",
        {
          yPercent: -140,
          ease: "none",
          duration: 1,
        },
        1
      );

      tl.from(
        ".description.right",
        {
          yPercent: 20,
          opacity: 0,
          duration: 0.3,
        },
        0.5
      );

      tl.to(
        ".description.right",
        {
          yPercent: -140,
          ease: "none",
          duration: 1,
        },
        1
      );
    });

    return () => ctx.revert();
  }, []);

  
  return (
    <section id="Hook">
      <div className="title_container_hook flex justify-center items-center">
        <h1 className="text-4xl mt-[2rem] lg:mt-0 lg:text-7xl leading-tighter text-center tracking-tight  lg:max-w-[800px]">
          The highest quality for software production in the market
        </h1>
      </div>
      <div className="description left">
        <p className="max-w-[250px] md:max-w-sm text-gray-500">
          Break the rules of modern websites with beautiful 3D animations on your web.
        </p>
      </div>
      <div className="description right">
        <p className="max-w-[250px] md:max-w-sm text-gray-500">
          Catch the eye of your customers with the best animations on the web. Say no to boring websites!
        </p>
      </div>

      <div className="h-[80%]">
        <Scene />
        {/* <SceneMobile /> */}
      </div>
    </section>
  );
}

export default HookSection;
