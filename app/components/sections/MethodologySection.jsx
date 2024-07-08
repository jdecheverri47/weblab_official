"use client";
import processData from "@/app/data/ProcessData";
import PlanningComponent from "../ui/PlanningComponent";

import { ChevronRightIcon } from "@heroicons/react/20/solid";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useEffect } from "react";
import ContactModal from "../ui/ContactModal";
import { useScroll, motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

function MethodologySection() {
  const progressBarRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: progressBarRef,
    offset: ["start center", "end center"],
  });

  const process = processData.map((process, index) => {
    return (
      <PlanningComponent
        icon={process.icon}
        key={process.id}
        title={process.title}
        number={process.number}
        text={process.text}
      />
    );
  });

  const titleRef = useRef(null);
  useLayoutEffect(() => {
    const title = titleRef.current;
    if (window.innerWidth > 1024) {
      const ctx = gsap.context(() => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: title,
            start: "center center",
            end: "+=1870",
            pin: true,
            scrub: 2,
            markers: false,
            pinSpacing: true,
          },
        });
      });
      return () => ctx.revert();
    }
  }, []);

  const textScrollElements = useRef(null);
  useLayoutEffect(() => {
    const title = titleRef.current;
    const elements = document.querySelectorAll(".text-scroll");
    textScrollElements.current = elements;
    const ctx = gsap.context(() => {
      elements.forEach((element) => {
        gsap.to(element, {
          opacity: 1, // Target color
          duration: 1, // Animation duration
          scrollTrigger: {
            trigger: element, // Use the element itself as the trigger
            start: "top center",
            end: "bottom center",
            toggleActions: "play none none none",
            scrub: 1,
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="Process"
      className="w-full h-full lg:p-[8.5rem] py-[3rem] p-[1.5rem]"
      ref={progressBarRef}
    >
      <div className="lg:grid lg:grid-cols-12 w-full flex flex-col justify-center">
        <div className="lg:col-start-2 lg:col-end-7">
          <div
            className="lg:ml-12 flex flex-col items-center justify-center lg:items-start lg:justify-start"
            ref={titleRef}
          >
            <h1 className="text-4xl lg:text-6xl font-medium tracking-tight text-center lg:text-left">
              Our{" "}
              <strong className="font-medium bg-gradient-to-b from-cyan-400 to-indigo-600 text-transparent bg-clip-text">
                essential
              </strong>{" "}
              <br /> process
            </h1>
            <div className="mt-5">
              <ContactModal
                className="bg-indigo-500 text-white text-[16px] w-[160px] h-[40px] pl-4 pr-2"
                size="md"
                radius="full"
                buttonText="Work With Us!"
                endcontent={<ChevronRightIcon className="text-white w-6 h-6" />}
              />
            </div>
          </div>
        </div>
       <div className="lg:col-span-5 flex flex-row-reverse lg:flex-row gap-3">
       <div className="flex flex-col gap-[2rem] lg:gap-[5rem] justify-start lg:justify-center items-start mt-8">
          {process}
        </div>
        <div className="col-span-1 h-[200vh] lg:h-[96%] bg-[#f0f4f9] w-5 rounded-full overflow-hidden relative justify-center items-start mt-10">
          <motion.div
            style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
            className="w-full bg-gradient-to-b from-cyan-400 to-indigo-600 h-full"
          />
        </div>
       </div>
      </div>
    </section>
  );
}

export default MethodologySection;
