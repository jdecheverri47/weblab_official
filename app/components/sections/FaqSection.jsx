"use client";

import FaqAccordion from "../ui/FaqAccordion";
import ButtonWeb from "../ui/ButtonWeb";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function FaqSection() {
  const faqData = [
    {
      question:
        "What is the difference between the simple and the dynamic animations?",
      answer:
        "Simple animations are animations that are created using only CSS. Dynamic animations are animations that are created using CSS and JavaScript.",
    },
    {
      question: "Do you do refunds?",
      answer:
        "Simple animations are animations that are created using only CSS. Dynamic animations are animations that are created using CSS and JavaScript.",
    },
    {
      question: "How long will you take on deliver a project?",
      answer:
        "Simple animations are animations that are created using only CSS. Dynamic animations are animations that are created using CSS and JavaScript.",
    },
    {
      question:
        "Are you willing to negotiate the price of a project and the payment format?",
      answer:
        "Simple animations are animations that are created using only CSS. Dynamic animations are animations that are created using CSS and JavaScript.",
    },
  ];

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({});

      gsap.from(".faq_text_container h1", {
        y: 250,
        ease: "power4.out",
        duration: 2.5,
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

      gsap.from(".button_container_faq", {
        opacity: 0,
        ease: "power4.out",
        delay: 2,
        duration: 2,
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
        delay: 3,
        duration: 2,
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
      <div className="faq_container">
        <div>
          <div className="faq_text">
            <div className="faq_text_container">
              <h1>Have questions?</h1>
            </div>
            <div className="faq_text_container">
            <h1
              className="text_orange"
              style={{
                width: "100%",
                height: "auto",
              }}
            >
              We have answers.
            </h1>
            </div>
          </div>
          <div style={{ marginTop: "1rem" }} className="button_container_faq">
            <ButtonWeb
              text="Contact Us"
              color="white"
              backgroundColor="black"
              width="10rem"
              height="3.5rem"
            />
          </div>
        </div>
        <div className="faq_questions">
          {faqData.map((faq, index) => (
            <FaqAccordion
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
