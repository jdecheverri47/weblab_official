"use client";

import Image from "next/image";
import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import ButtonWeb from "../ui/ButtonWeb";
import PricingCard from "../ui/PricingCard";
import CheckSvg from "../ui/CheckSvg";

function PricingSection() {
  const [activeCards, setActiveCards] = useState(1);
  const [circlePosition, setCirclePosition] = useState("14%");

  const handleCirclePosition = (position) => {
    setCirclePosition(position);
  };

  const cards = {
    1: [
      {
        id: 1,
        backgroundColor:
          "linear-gradient(341deg, #f9d423 1.83%, #ff4e50 98.93%)",
        cardName: "Basic Website Builder",
        cardPrice: "$ 3499",
        description: "Perfect for small businesses & Personal Projects",
        perks: [
          "UI/UX Design",
          "3 Revisions over design",
          "Up to 5 pages",
          "Domain included",
          "SSL Certificate",
          "Simple responsive, clean layout",
          "Basic visibility enhancement",
          "Monthly traffic reports",
        ],
      },
      {
        id: 2,
        backgroundColor:
          "linear-gradient(160deg, #4FACFE 0%, #24D2FE 57.54%, #00F2FE 99.32%)",
        cardName: "Pro Website Builder",
        cardPrice: "$ 6999",
        description: "Perfect for growing businesses & Professionals ",
        perks: [
          "Everything in Basic",
          "5 Revisions over design",
          "Up to 10 pages",
          "Dynamic gsap animations",
          "Blog and Social media integrations",
          "Advanced positioning strategies",
          "Detailed Analytics & reports",
          "Priority attention",
        ],
      },
      {
        id: 3,
        backgroundColor:
          "linear-gradient(160deg, #C471F5 1.14%, #FA71CD 99.4%)",
        cardName: "E-commerce Ultimate Builder",
        cardPrice: "Custom",
        description: "Perfect for large businesses & ecommerce stores",
        perks: [
          "Everything in PRO",
          "Dedicated developers",
          "Customized solutions",
          "White glove onboarding",
          "priority phone support",
          "Pay by invoice",
        ],
      },
    ],
    2: [
      {
        id: 1,
        backgroundColor:
          "linear-gradient(341deg, #f9d423 1.83%, #ff4e50 98.93%)",
        cardName: "Basic App Builder",
        cardPrice: "$ 3999",
        afterLabel: "/mo",
        description: "Perfect for small businesses & Personal Projects",
        perks: [
          "UI/UX Design",
          "3 Revisions over design",
          "Up to 5 pages",
          "Domain included",
          "SSL Certificate",
          "Simple responsive, clean layout",
          "Basic visibility enhancement",
          "Monthly traffic reports",
        ],
      },
      {
        id: 2,
        backgroundColor:
          "linear-gradient(160deg, #4FACFE 0%, #24D2FE 57.54%, #00F2FE 99.32%)",
        cardName: "Advanced App Builder",
        cardPrice: "$ 6899",
        afterLabel: "/mo",
        description: "Perfect for growing businesses & Professionals ",
        perks: [
          "All from basic",
          "5 Revisions over design",
          "Up to 10 pages",
          "Dynamic gsap animations",
          "Blog and Social media integrations",
          "Advanced positioning strategies",
          "Detailed Analytics & reports",
          "Priority attention",
        ],
      },
      {
        id: 3,
        backgroundColor:
          "linear-gradient(160deg, #C471F5 1.14%, #FA71CD 99.4%)",
        cardName: "E-commerce Website Builder",
        cardPrice: "Custom",
        description: "Perfect for small businesses & Personal Projects",
        perks: [
          "UI/UX Design",
          "5 Revisions over design",
          "Up to 10 pages",
          "Domain included",
          "SSL Certificate",
          "Simple responsive, clean layout",
          "Basic visibility enhancement",
          "Detailed Analytics & reports",
          "Monthly traffic reports",
        ],
      },
    ],
    3: [
      {
        id: 1,
        backgroundColor:
          "linear-gradient(341deg, #f9d423 1.83%, #ff4e50 98.93%)",
        cardName: "Basic Website Builder",
        cardPrice: "$ 10499",
        description: "Perfect for small businesses & Personal Projects",
        perks: [
          "UI/UX Design",
          "3 Revisions over design",
          "Up to 5 pages",
          "Domain included",
          "SSL Certificate",
          "Simple responsive, clean layout",
          "Basic visibility enhancement",
          "Monthly traffic reports",
        ],
      },
      {
        id: 2,
        backgroundColor:
          "linear-gradient(160deg, #4FACFE 0%, #24D2FE 57.54%, #00F2FE 99.32%)",
        cardName: "Advanced Website Builder",
        cardPrice: "$ 16999",
        description: "Perfect for growing businesses & Professionals ",
        perks: [
          "All from basic",
          "5 Revisions over design",
          "Up to 10 pages",
          "Dynamic gsap animations",
          "Blog and Social media integrations",
          "Advanced positioning strategies",
          "Detailed Analytics & reports",
          "Priority attention",
        ],
      },
      {
        id: 3,
        backgroundColor:
          "linear-gradient(160deg, #C471F5 1.14%, #FA71CD 99.4%)",
        cardName: "E-commerce Website Builder",
        cardPrice: "Custom",
        description: "Perfect for small businesses & Personal Projects",
        perks: [
          "UI/UX Design",
          "5 Revisions over design",
          "Up to 10 pages",
          "Domain included",
          "SSL Certificate",
          "Simple responsive, clean layout",
          "Basic visibility enhancement",
          "Detailed Analytics & reports",
          "Monthly traffic reports",
        ],
      },
    ],
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({});

      gsap.from(".pricing_container_title h1", {
        y: 250,
        ease: "power4.out",
        duration: 1.5,
        delay: 0.5,
        skewY: 10,
        stagger: {
          amount: 0.3,
        },
        scrollTrigger: {
          trigger: "#Pricing",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });

      gsap.from(".pricing_container_description p", {
        opacity: 0,
        ease: "power4.out",
        delay: 1.5,
        duration: 1.5,
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: "#Pricing",
          start: "top center",
          toggleActions: "play none none none",

          // markers: true,
        },
      });
      gsap.from(".pricing_buttons", {
        opacity: 0,
        ease: "power4.out",
        delay: 2.5,
        duration: 2,
        scrollTrigger: {
          trigger: "#Pricing",
          start: "top center",
          toggleActions: "play none none none",

          // markers: true,
        },
      });
      gsap.from(".cards_pricing_anim", {
        opacity: 0,
        y: 200,
        ease: "power4.out",
        delay: 2.5,
        duration: 2,
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: "#Pricing",
          start: "top center",
          toggleActions: "play none none none",

          // markers: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="Pricing">
      <div className="pricing_container">
        <div className="pricing_title">
          <div className="pricing_container_title">
            <h1>Check out our plans</h1>
          </div>
          <div className="pricing_container_description">
            <p>Are made to fit any of your needs</p>
          </div>
        </div>
        <div className="pricing_buttons">
          <button
            onClick={() => {
              setActiveCards(1);
              handleCirclePosition("14%");
            }}
          >
            Websites
          </button>
          <button
            onClick={() => {
              setActiveCards(2);
              handleCirclePosition("50%");
            }}
          >
            Web Apps
          </button>
          <button
            onClick={() => {
              setActiveCards(3);
              handleCirclePosition("86%");
            }}
          >
            Mobile Apps
          </button>
          <span
            className="circlespan"
            style={{
              "--circlePosition": circlePosition,
            }}
          />
        </div>

        <div className="pricing_group">
          {cards[activeCards].map((card) => {
            return (
              <div key={card.id} className="cards_pricing_anim">
                <PricingCard
                  cardName={card.cardName}
                  cardPrice={card.cardPrice}
                  description={card.description}
                  afterLabel={card.afterLabel}
                  backgroundColor={card.backgroundColor}
                >
                  {card.perks.map((perk, index) => {
                    return (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "start",
                          justifyContent: "center",
                          padding: "0",
                        }}
                      >
                        <CheckSvg />
                        <p
                          style={{
                            color: "#fff",
                            fontSize: "18px",
                            marginLeft: "10px",
                          }}
                        >
                          {perk}
                        </p>
                      </div>
                    );
                  })}
                </PricingCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
