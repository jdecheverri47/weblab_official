"use client";
import CardShowcase from "../ui/CardShowcase";

import "@/app/styles/showcase.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { useLayoutEffect, useRef } from "react";

function ProofSection() {
  const bentoRef = useRef(null);
  const web3Ref = useRef(null);
  const figmaRef = useRef(null);
  const moneymasteryRef = useRef(null);
  const triptrapRef = useRef(null);
  const braqlabRef = useRef(null);
  const titleBox = useRef(null);
  const darkPurpleRef = useRef(null);
  const shoesRef = useRef(null);
  const musicRef = useRef(null);

  useLayoutEffect(() => {
    const bento = bentoRef.current;
    const web3 = web3Ref.current;
    const figma = figmaRef.current;
    const moneymastery = moneymasteryRef.current;
    const triptrap = triptrapRef.current;
    const braqlab = braqlabRef.current;
    const title = titleBox.current;
    const darkPurple = darkPurpleRef.current;
    const shoes = shoesRef.current;
    const music = musicRef.current;


    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#Proof",
          start: "top top",
          end: "+=1200",
          pin: true,
          scrub: 2,
          markers: false,
          pinSpacing: true,
        },
      });
      tl.fromTo(
        bento,
        {
          scale: 0.92,
          yPercent: 30,
          ease: "power4.out",
          duration: 4,
        },
        {
          scale: 0.86,
          yPercent: 0,
          ease: "power4.out",
          duration: 4,
        },
        0
      );

      tl.fromTo(
        web3,
        {
          scale: 0.92,
          yPercent: 20,
          ease: "power4.out",
          duration: 4,
        },
        {
          scale: 0.85,
          yPercent: -10,
          ease: "power4.out",
          duration: 4,
        },
        0
      );

      tl.fromTo(
        figma,
        {
          scale: 0.9,
          yPercent: 80,
          ease: "power4.out",
          duration: 4,
        },
        {
          scale: 1,
          yPercent: -10,
          ease: "power4.out",
          duration: 4,
        },
        0
      );

      tl.fromTo(
        moneymastery,
        {
          scale: 0.9,
          yPercent: 70,
          ease: "power4.out",
          duration: 4,
        },
        {
          scale: 1,
          yPercent: -10,
          ease: "power4.out",
          duration: 4,
        },
        0
      );

      tl.fromTo(
        triptrap,
        {
          scale: 0.92,
          yPercent: 30,
          ease: "power4.out",
          duration: 4,
        },
        {
          scale: 0.85,
          yPercent: 0,
          ease: "power4.out",
          duration: 4,
        },
        0
      );
      tl.fromTo(
        braqlab,
        {
          scale: 0.92,
          yPercent: 30,
          ease: "power4.out",
          duration: 4,
        },
        {
          scale: 0.85,
          yPercent: 0,
          ease: "power4.out",
          duration: 4,
        },
        0
      );

      tl.fromTo(
        darkPurple,
        {
          scale: 0.92,
          yPercent: 30,
          ease: "power4.out",
          duration: 4,
        },
        {
          scale: 0.85,
          yPercent: 0,
          ease: "power4.out",
          duration: 4,
        },
        0
      );

      tl.fromTo(
        shoes,
        {
          scale: 0.9,
          yPercent: 60,
          ease: "power4.out",
          duration: 4,
        },
        {
          scale: 1,
          yPercent: 0,
          ease: "power4.out",
          duration: 4,
        },
        0
      );

      tl.fromTo(
        music,
        {
          scale: 0.92,
          yPercent: 30,
          ease: "power4.out",
          duration: 4,
        },
        {
          scale: 0.82,
          yPercent: 0,
          ease: "power4.out",
          duration: 4,
        },
        0
      );

      tl.fromTo(
        title,
        {
          yPercent: -140,
          scale: 0.75,
          ease: "power4.out",
          duration: 4,
        },
        {
          scale: 1,
          yPercent: -50,
          ease: "power4.out",
          duration: 4,
        },
        0
      );
      
    });
    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <section id="Proof" className="w-screen h-screen relative">
      <div className="bottom-gradient"></div>
      <div className="top-gradient"></div>

      <div ref={bentoRef} className="w-fit h-fit absolute top-[4%] left-[4%] ">
        <CardShowcase
          src="/images/offer/bento.png"
          position="top-[4%] left-[0%] scale-80"
        />
      </div>
      <div className="w-fit h-fit absolute right-[6%] top-[7%]" ref={web3Ref}>
        <CardShowcase
          src="/images/offer/web3.0.png"
          position="right-[4%] top-[7%] z-10 scale-80"
        />
      </div>
      <div
        className="w-fit h-fit absolute left-[8%] top-[34%] z-30"
        ref={figmaRef}
      >
        <CardShowcase
          src="/images/offer/figma.png"
          position="left-[6%] top-[34%] scale-120 z-20"
          shadow="shadow-2xl"
        />
      </div>
      <div
        className="w-fit h-fit absolute right-[10%] top-[35%] z-30"
        ref={moneymasteryRef}
      >
        <CardShowcase
          src="/images/offer/moneymastery.png"
          position="right-[-4%] top-[35%] scale-100 z-0"
          shadow="shadow-2xl"
        />
      </div>
      <div
        className="w-fit h-fit absolute left-[2%] bottom-[3%] z-10"
        ref={triptrapRef}
      >
        <CardShowcase
          src="/images/offer/triptrap.png"
          position="left-[2%] bottom-[3%]"
        />
      </div>
      <div
        className="w-fit h-fit absolute right-[6%] bottom-[3%]"
        ref={braqlabRef}
      >
        <CardShowcase
          src="/images/offer/braqlab.png"
          position="right-[4%] bottom-[3%] z-10"
          shadow="lg"
        />
      </div>
      <div
        className="w-fit h-fit absolute right-[40%] top-[4%] z-10"
        ref={darkPurpleRef}
      >
        <CardShowcase
          src="/images/offer/dark-purple.png"
          position="left-[2%] bottom-[3%]"
        />
      </div>
      <div
        className="w-fit h-fit absolute right-[40%] top-[35%] z-20"
        ref={shoesRef}
      >
        <CardShowcase
          src="/images/offer/shoes.png"
          position="right-[4%] bottom-[3%] z-10"
          shadow="shadow-xl"
        />
      </div>
      <div
        className="w-fit h-fit absolute right-[38%] bottom-[3%]"
        ref={musicRef}
      >
        <CardShowcase
          src="/images/offer/music.png"
          position="right-[4%] bottom-[3%] z-10"
          shadow="lg"
        />
      </div>
      <div
        className="weblabs_container absolute z-40 bg-black w-[fit] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-opacity-75 rounded-[50px] backdrop-blur-sm shadow-2xl border-black border-2"
        ref={titleBox}
      >
        <div className="w-full h-full relative flex flex-col justify-center items-center">
          <div className="w-full text-nowrap py-5">
            <h1 className="showcase_title text-center px-7 tracking-tighter leading-tight lg:leading-normal">
              Made in WebLabs
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProofSection;
