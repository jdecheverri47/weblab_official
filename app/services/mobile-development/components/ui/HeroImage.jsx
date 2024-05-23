'use client'
import { useLayoutEffect } from "react";

import Image from "next/image";
import web from "@/public/images/lady-web.jpg";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HeroImage() {

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {

      gsap.to("#courtain", {
        height: "0%",
        duration: 2,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".courtain-container",
          start: "top bottom",
          toggleActions: "play none none none",
        }
      }, 0);

      gsap.fromTo(".courtain-container", {
        scale: 0.8,
        duration: 2,
        ease: "power4.inOut",
      }, {
        scale: 1,
        delay: 0.5,
        duration: 2,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".courtain-container",
          start: "top bottom",
          // markers: true,
          toggleActions: "play none none none",
        }
      }, 0);
    })

    return () => ctx.revert();
    
  }, []);
  return (
    <div className="w-[75%] mt-10 flex items-center justify-center  rounded-[40px] relative courtain-container">
      <div id="courtain" className="absolute w-full h-full bottom-0 left-0 bg-white z-40" />
      <div className="absolute w-full h-full top-0 left-0  z-30 rounded-[40px] shadow-inner-web" />
      <div className="absolute z-20 max-w-md top-[10%] left-[5%]">
        <h2 className="text-4xl text-white">
          Enhance your online presence and make your business grow...
        </h2>
      </div>
      <div className="absolute z-20 max-w-md bottom-[15%] right-[5%]">
        <h2 className="text-4xl text-white">
          Make the right choice and pick WebLabs.
        </h2>
      </div>
      <Image
        alt=""
        src={web}
        className="object-cover rounded-[40px]"
        priority
      />
    </div>
  );
}

export default HeroImage;
