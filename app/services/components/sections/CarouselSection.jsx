"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonLayout from "../ui/ButtonLayout";
import CardsCarousel from "../ui/CardsCarousel";
import { useRef, useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function CarouselSection() {
  const cardsContainerRef = useRef(null);
  const scrollWrapperRef = useRef(null);
  const buttonsRef = useRef(null);

  useLayoutEffect(() => {
    const cardsContainer = cardsContainerRef.current;
    const scrollTrigger = scrollWrapperRef.current;
    let ctx = gsap.context(() => {
      gsap.fromTo(
        cardsContainer,
        {
          translateX: 0,
        },
        {
          translateX: "-160dvw",
          scrollTrigger: {
            trigger: scrollTrigger,
            start: "top top",
            end: "3000 bottom",
            pin: true,
            scrub: 2,
            markers: false,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const scrollWrapper = scrollWrapperRef.current;
    const buttons = buttonsRef.current;
    const cardsContainer = cardsContainerRef.current;
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollWrapper,
          start: "top center",
          end: "bottom center",
          scrub: 2,
          markers: false,
          pinSpacing: false,
        },
      });

      gsap.to(buttons, {
        opacity: 1,
        ease: "back.out",
        duration: 2,
      });

      gsap.fromTo(
        cardsContainer,
        {
          opacity: 0,
          translateX: "160dvw",
          ease: "back.out",
          duration: 2,
        },
        {
          opacity: 1,
          translateX: 0,
          ease: "power4.out",
          duration: 2,
          delay: 0.5,
        }
      );
    });
  }, []);

  return (
    <section
      className="w-full h-[100dvh] flex flex-col items-start justify-center p-[5rem] pb-[3rem]"
      ref={scrollWrapperRef}
    >
      <article className="flex flex-col justify-center items-center mt-[5rem] w-full">
        <div className="text-7xl font-medium flex justify-center">
          <h1>Our</h1>
          <span>&nbsp;</span>
          <h1 className="bg-gradient-to-t from-[#4facfe] to-[#00f2fe] text-transparent bg-clip-text ">
            Services
          </h1>
        </div>
        <div className="mt-5 ">
          <p className="text-center max-w-3xl">
            Whether you looking for large-scale custom software development, pro
            UI/UX design, or 24/7 server support, we have the team to meet your
            specific needs.
          </p>
        </div>
      </article>
      <ButtonLayout ref={buttonsRef} />
      <CardsCarousel ref={cardsContainerRef} />
    </section>
  );
}

export default CarouselSection;
