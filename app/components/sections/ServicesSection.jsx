"use client";

import { useLayoutEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

import { Services } from "@/app/data/Services";
import ServicesCards from "../ui/ServicesCards";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import BackgroundSecond from "../ui/BackgroundSecond";

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

      gsap.from(".services-description", {
        opacity: 0,
        ease: "power4.out",
        duration: 2,
        delay: 2,
        scrollTrigger: {
          trigger: "#Services",
          start: "top center",
          toggleActions: "play none none none",
        },
      });
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
          link={service.link}
        />
      </SwiperSlide>
    );
  });

  const cards = Services.map((service) => {
    return (
      <ServicesCards
        key={service.id}
        title={service.title}
        description={service.description}
        item={item}
        link={service.link}
      >
        <service.svg className="w-8 h-8 text-gray-300 group-hover/card:text-indigo-600 group/card:transition-all group/card:duration-300 group/card:ease-in-out group-hover/card:transition-all group-hover/card:duration-300 group-hover/card:ease-in-out " />
      </ServicesCards>
    );
  });
  return (
    <section id="Services" className="lg:py-10">
      <div className="services_container z-30 relative">
        <div className="services_container_text lg:pt-[2rem] lg:pl-[2.5rem] justify-center items-center">
          <div className="services_title text-4xl lg:text-6xl">
            <h1 className="text-4xl lg:text-6xl ">No matter the situation,</h1>
          </div>
          <div className="services_title">
            <h1 className="text-4xl bg-gradient-to-b from-cyan-400 to-indigo-600 text-transparent bg-clip-text lg:text-6xl">
              We have a solution.
            </h1>
          </div>
          <div className="flex justify-center items-center ">
            <p className="mt-2 max-w-2xl text-center services-description">
              Whatever your unique idea or needs, we’ve got the tools and know
              how to build your custom solution from discovery to deployment.
            </p>
          </div>
        </div>
        <motion.div
          className="w-[70%] h-full mt-2 lg:mt-0 shadow-none gap-10  flex-wrap justify-center items-start lg:flex hidden media-services"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {cards}
        </motion.div>
        <motion.div
          className="w-full h-[80%] mt-2 lg:mt-0 shadow-none flex lg:hidden gap-4 lg:flex-wrap justify-center items-start "
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

      <BackgroundSecond />
    </section>
  );
}

export default ServicesSection;
