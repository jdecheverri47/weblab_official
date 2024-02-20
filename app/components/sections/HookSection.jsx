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
          end: "+=1000",
          scrub: 2,
          markers: false,
        },
      });

      tl.to(
        "#Hook",
        {
          yPercent: -50,
          ease: "none",
          duration: 1,
        },
        0
      );

      tl.fromTo(
        ".title_container_hook",
        {
          yPercent: -10,
          ease: "none",
          duration: 1,
        },
        {
          yPercent: 45,
          ease: "none",
          duration: 1,
        },
        0
      );

      tl.from(
        ".description.left",
        {
          opacity: 0,
          duration: 0.5,
        },
        0.5
      );
      tl.to(
        ".description.left",
        {
          yPercent: -100,
          ease: "none",
          duration: 1,
        },
        1
      );

      tl.from(
        ".description.right",
        {
          opacity: 0,
          duration: 0.5,
        },
        0.5
      );

      tl.to(
        ".description.right",
        {
          yPercent: -100,
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
        <h1 className="title_hook lg:max-w-[800px]">
          The highest quality for software production in the market
        </h1>
      </div>
      <div className="description left">
        <p>
          We care the most about <br /> deliver top products with <br />
          great aesthetics combined <br /> with functionalities
        </p>
      </div>
      <div className="description right">
        <p>
          Custom solutions for each
          <br /> project with AI tools <br />
          implementations
        </p>
      </div>

      <div className="h-[130%]">
        <Scene />
        {/* <SceneMobile /> */}
      </div>
    </section>
  );
}

export default HookSection;
