"use client";

import FaqAccordion from "../ui/FaqAccordion";
import ButtonWeb from "../ui/ButtonWeb";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useState, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function FaqSection() {
  const faqData = [
    {
      question:
        "What is the difference between the simple and the dynamic animations?",
      answer:
        "Simple animations are created using only CSS. Dynamic animations are created using CSS and JavaScript. We do use the best technologies in the market to create the most stunning animations for your website.",
    },
    {
      question: "Do you do refunds?",
      answer:
        "Absolutely yes! However, due to the nature of our business, we do not offer refunds for the work that has been done. We do offer refunds for the work that's missing.",
    },
    {
      question: "How long will you take on deliver a project?",
      answer:
        "It depends on the complexity of the project. We will give you an estimated time of delivery once we have all the needed details.",
    },
    {
      question:
        "Are you willing to negotiate the price of a project and the payment format?",
      answer:
        "In Weblabs we are always open to negotiate the price and the payment format. We want to make sure that every client has the best deal they can get based on the project they want to develop.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  function toggleAccordion(index) {
    setActiveIndex(index === activeIndex ? null : index)
  }

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
              href="#Contact"
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
              index={index}
              question={faq.question}
              answer={faq.answer}
              isActive={activeIndex}
              handleClick={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
