"use client";

import { useLayoutEffect, useEffect, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import Services from "@/app/data/Services";
import ServicesCards from "../ui/ServicesCards";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

gsap.registerPlugin(ScrollTrigger);

function ServicesSection() {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.5,
        duration: 2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({});

      gsap.from(".services_title h1", {
        y: 250,
        ease: "power4.out",
        duration: 2.5,
        skewY: 4,
        stagger: {
          amount: 0.3,
        },
        scrollTrigger: {
          trigger: "#Services",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });
      gsap.from(".services_container_card_text h1", {
        y: 150,
        ease: "power4.out",
        delay: 1.5,
        duration: 2,
        skewY: 4,
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: "#Services",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });

      gsap.from(".services_container_card_text p", {
        opacity: 0,
        ease: "power4.out",
        delay: 2,
        duration: 2,
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: "#Services",
          start: "top center",
          toggleActions: "play none none none",

          // markers: true,
        },
      });
      gsap.from(".services_container_card_text h2", {
        opacity: 0,
        ease: "power4.out",
        delay: 2,
        duration: 2,
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: "#Services",
          start: "top center",
          toggleActions: "play none none none",

          // markers: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#Services",
          start: "top center",
          end: "+=1000",
          scrub: 1,
          markers: false,
        },
      });

      tl.to(".services_container_cards", {
        yPercent: -15,
        ease: "none",
        duration: 4,
      });

      tl.to(
        ".services_container_text",
        {
          yPercent: -25,
          ease: "none",
          duration: 4,
        },
        0
      );
    });
    return () => ctx.revert();
  }, []);

 
  const cardsMobile = Services.map((service) => {
    return (
      <SwiperSlide key={service.id} className="w-full h-full">
        <ServicesCards
          icon={service.id}
          title={service.title}
          description={service.description}
          svg={service.svg}
          item={item}
        />
      </SwiperSlide>
    );
  });

  const cards = Services.map((service) => {
    return (
      <ServicesCards
        key={service.id}
        icon={service.id}
        title={service.title}
        description={service.description}
        svg={service.svg}
        item={item}
      />
    );
  });
  return (
    <section id="Services" className="lg:p-10">
      <div className="services_container">
        <div className="services_container_text lg:pt-[2rem] lg:pl-[2.5rem]">
          <div className="services_title">
            <h1>No matter the situation,</h1>
          </div>
          <div className="services_title">
            <h1 className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text ">
              We have a solution.
            </h1>
          </div>
        </div>
          <motion.div
            className="w-full h-full mt-4 lg:mt-0 shadow-none gap-4 flex-wrap justify-center items-center lg:flex hidden"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {cards}
          </motion.div>
          <motion.div
            className="w-full h-[80%] mt-4 lg:mt-0 shadow-none flex lg:hidden gap-4 lg:flex-wrap justify-center items-center "
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Swiper
              spaceBetween={270}
              slidesPerView={2}
              loop
              className="h-full w-full !overflow-visible"
            >
              {cardsMobile}
            </Swiper>
          </motion.div>
      </div>
    </section>
  );
}

export default ServicesSection;
