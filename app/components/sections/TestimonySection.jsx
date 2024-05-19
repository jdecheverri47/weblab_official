import testimonies from "@/app/data/Testimonies";
import TestimonyCard from "../ui/TestimonyCard";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function TestimonySection() {
const titleRef = useRef(null);
const descriptionRef = useRef(null);

  const colOne = testimonies.slice(0, 3).map((testimony, index) => {
    return (
      <TestimonyCard
        key={testimony.id}
        image={testimony.image}
        name={testimony.name}
        testimony={testimony.testimony}
      />
    );
  });

  const colTwo = testimonies.slice(3, 6).map((testimony, index) => {
    return (
      <TestimonyCard
        key={testimony.id}
        image={testimony.image}
        name={testimony.name}
        testimony={testimony.testimony}
      />
    );
  });

  const colThree = testimonies.slice(6, 9).map((testimony, index) => {
    return (
      <TestimonyCard
        key={testimony.id}
        image={testimony.image}
        name={testimony.name}
        testimony={testimony.testimony}
      />
    );
  });

  const colFour = testimonies.slice(9, 13).map((testimony, index) => {
    return (
      <TestimonyCard
        key={testimony.id}
        image={testimony.image}
        name={testimony.name}
        testimony={testimony.testimony}
      />
    );
  });

  useLayoutEffect(() => {
    const title = titleRef.current;
    const description = descriptionRef.current;
    let ctx = gsap.context(() => {
      gsap.from(title, {
        y: 100,
        ease: "power4.out",
        duration: 2,
        scrollTrigger: {
          trigger: "#TestiSection",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      }, 0);
      gsap.from(description, {
        opacity: 0,
        ease: "power4.out",
        duration: 2,
        delay: 1,
        scrollTrigger: {
          trigger: "#TestiSection",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      }, 2);
    });
    return () => ctx.revert();
  }, []);
  return (
    <section id="TestiSection" className="bg-[#f8f9fa] w-full h-full lg:px-[8.5rem] pt-[3rem] lg:pt-[5rem] pb-[2rem] relative">
      <div className="w-full flex justify-center mb-7 px-[2rem] lg:px-0 pb-[1rem]  flex-col items-center gap-4">
        <div className=" relative h-[5rem] lg:h-[3.5rem] overflow-hidden">
          <h1 className="font-medium text-4xl text-center lg:text-6xl" ref={titleRef}>
            Our customers{" "}
            <strong className="bg-gradient-to-b from-[#FF72E1] to-[#F54C7A] text-transparent bg-clip-text">
              love us
            </strong>{" "}
          </h1>
        </div>
        <div className="lg:max-w-3xl">
          <p
            ref={descriptionRef}
            className="text-center test-description"
          >
            Our success in collaborating with clients is determined by effective
            communication, mutual understanding, and a shared commitment to
            achieving goals.
          </p>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-4 px-[1rem] w-full relative lg:px-[2rem] 2xl:px-[5rem] gap-5">
        <div className="flex flex-col gap-4">{colOne}</div>
        <div className="hidden lg:flex flex-col gap-4 ">{colTwo}</div>
        <div className="hidden lg:flex flex-col gap-4">{colThree}</div>
        <div className="hidden lg:flex flex-col gap-4">{colFour}</div>
      </div>
      <div className="absolute bg-gradient-to-t from-white to-transparent h-[350px] bottom-0 w-screen left-0" />
    </section>
  );
}

export default TestimonySection;