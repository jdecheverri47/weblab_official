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
        "Why should I pick WebLabs for my business?",
      answer:
        "At Weblabs, we're not just another software development company, we're your partners in crafting stunning digital experiences. Our focus is on creating websites that stand out in the market, seamless transitions, and immersive 3D models. \nBut it doesn't stop there. We're dedicated to your success every step of the way offering round-the-clock support and assistance with an additional three months of free support after completion. ",
    },
    {
      question: "How long does it typically take to complete a project from start to finish?",
      answer:
        "Project timelines vary based on the complexity of the task at hand. Once we've gathered all the necessary information, we'll provide you with a precise estimated delivery time.",
    },
    {
      question:
        "Are you willing to negotiate the price of a project and the payment format?",
      answer:
        "In Weblabs we are always open to negotiate the price and the payment format. We want to make sure that every client has the best deal they can get based on the project they want to develop.",
    },
    {
      question: "Do you do refunds?",
      answer:
        "Indeed, we understand the unique nature of our business, which is why we do not offer refunds for completed work. However, we do provide refunds for any outstanding work yet to be completed.",
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
              borderParams="1.5px solid #5c5c5c"
              shadow="shadow-lg"
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
