"use client";

import ScrollDownIcon from "../ui/ScrollDownIcon";
import Circle from "../ui/Circle";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function SecondHook() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      gsap.fromTo(".second_hook_container h1", {
        opacity: 0,
        ease: "power4.out",
        duration: 3,
        stagger: {
          amount: 0.3,
        },
        scrollTrigger: {
          trigger: "#SecondHook",
          start: "top center",
          // markers: true,
        },
      }, {
        opacity: 1,
        ease: "power4.out",
        duration: 3,
        stagger: {
          amount: 0.3,
        },
        scrollTrigger: {
          trigger: "#SecondHook",
          start: "top center",
          // markers: true,
        },

      });

      gsap.fromTo(
        ".icon_container",
        {
          opacity: 0,
          ease: "power4.out",
          duration: 3,
          scrollTrigger: {
            trigger: "#SecondHook",
            start: "top center",
            toggleActions: "play none none none",
            // markers: true,
          },
        },
        {
          opacity: 1,
          ease: "power4.out",
          duration: 3,
          scrollTrigger: {
            trigger: "#SecondHook",
            start: "top center",
            toggleActions: "play none none none",
            // markers: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#SecondHook",
          start: "top center",
          end: "+=1000",
          scrub: 1,
          markers: false,
        },
      });

      tl.fromTo(
        ".second_hook_container",
        {
          yPercent: -25,
          ease: "none",
          duration: 4,
        },
        {
          yPercent: 25,
          ease: "none",
          duration: 4,
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="SecondHook" >
      <Circle color="orange" left="0" bottom="80%" zIndex="0" />
      <Circle color="blue" bottom="50%" zIndex="0" right="10%"/>
      {/* <Circle color="purple" bottom="0" zIndex="-1" /> */}

      <div className="second_hook_container flex justify-center items-center">
        <div className="second_hook_title_container">
          <h1>
            Do you want to upscale <br /> your competitors?
          </h1>
        </div>
        <div className="icon_container">
          <p>Scroll Down</p>
          <ScrollDownIcon />
        </div>
      </div>
    </section>
  );
}

export default SecondHook;
