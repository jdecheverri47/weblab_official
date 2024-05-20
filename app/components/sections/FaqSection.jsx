"use client";

import ContactModal from "../ui/ContactModal";
import faqData from "@/app/data/FaqData";
import { Accordion, AccordionItem } from "@nextui-org/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useState, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function FaqSection() {
  const faqs = faqData.map((faq, index) => {
    return (
      <AccordionItem
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              height: "auto",
              transition: {
                height: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  duration: 1,
                },
                opacity: {
                  easings: "ease",
                  duration: 1,
                },
              },
            },
            exit: {
              y: -10,
              opacity: 0,
              height: 0,
              transition: {
                height: {
                  easings: "ease",
                  duration: 0.25,
                },
                opacity: {
                  easings: "ease",
                  duration: 0.3,
                },
              },
            },
          },
        }}
        key={index}
        title={faq.question}
        aria-label={faq.question}
      >
        {faq.answer}
      </AccordionItem>
    );
  });

  const itemClasses = {
    content: "text-gray-500",
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({});

      gsap.from(".faq_text_container h1", {
        y: 250,
        ease: "power4.out",
        duration: 2,
        skewY: 4,
        stagger: {
          amount: 0.3,
        },
        scrollTrigger: {
          trigger: "#Faq",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });

      gsap.from(".description-text-faq", {
        opacity: 0,
        ease: "power4.out",
        delay: 1.5,
        duration: 1,
        scrollTrigger: {
          trigger: "#Faq",
          start: "top center",
          toggleActions: "play none none none",

          // markers: true,
        },
      });

      gsap.from(".button_container_faq", {
        opacity: 0,
        ease: "power4.out",
        delay: 2,
        duration: 1,
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: "#Faq",
          start: "top center",
          toggleActions: "play none none none",

          // markers: true,
        },
      });
      gsap.from(".faq_questions", {
        opacity: 0,
        ease: "power4.out",
        delay: 2.5,
        duration: 1,
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: "#Faq",
          start: "top center",
          toggleActions: "play none none none",

          // markers: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="Faq">
      <div className="faq_container mt-[2rem] lg:mt-[5rem]">
        <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
          <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start text-center lg:text-left">
            <div className="text-4xl lg:text-6xl font-medium faq_text_container pb-2">
              <h1>Have questions?</h1>
            </div>
            <div className="faq_text_container">
              <h1 className="text-4xl lg:text-6xl font-medium bg-gradient-to-b from-[#FF705B] to-[#FFB457] bg-clip-text text-transparent w-full h-auto">
                We have answers.
              </h1>
            </div>
            <div className="mt-2 lg:mb-5 description-text-faq">
              <p className="text-[18px] max-w-lg">
                You are free to make any questions as you need, we&apos;re here
                to help!
              </p>
            </div>
            <div className="button_container_faq mt-5 lg:mt-0">
              <ContactModal
                className="bg-orange-200 text-orange-900 text-[14px] w-[130px] h-[45px] font-medium"
                size="lg"
                radius="full"
                buttonText="Contact us"
              />

            </div>
          </div>
        </div>
        <div className="faq_questions">
          <Accordion variant="splitted" itemClasses={itemClasses}>
            {faqs}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
