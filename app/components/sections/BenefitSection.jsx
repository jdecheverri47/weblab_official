"use client";
import { useState, useLayoutEffect, useRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Image from "next/image";
import ButtonWeb from "../ui/ButtonWeb";
import DesignImage from "/public/images/web_app.png";
import handsImage from "/public/images/shaking_hands.jpg";
import techSupport from "/public/images/support_team.jpg";
import platform from "/public/images/platform.jpg";

import heart from "/public/images/amor.png";
import money from "/public/images/gran-venta.png";
import rocket from "/public/images/puesta-en-marcha.png";
import settings from "/public/images/ajuste.png";

import LeftArrow from "../ui/LeftArrow";
import RightArrow from "../ui/RightArrow";

import "../../styles/transitions.css";

function BenefitSection() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const prevIndex = () => {
    setCarouselIndex((index) => (index === 0 ? 3 : index - 1));
  };

  const nextIndex = () => {
    setCarouselIndex((index) => (index === 3 ? 0 : index + 1));
  };

  const data = [
    {
      id: 1,
      title: "Peak quality Design",
      description:
        "We care the most about deliver top products with great aesthetics combined with functionalities",
      image: DesignImage,
      icon: heart,
    },
    {
      id: 2,
      title: "Flexible Pricing",
      description:
        "We prioritize offering flexible pricing options to suit your needs and budget, hit us up for a quote now!",
      image: handsImage,
      icon: money,
    },
    {
      id: 3,
      title: "Uninterrupted Support and Maintenance",
      description:
        "We ensure uninterrupted support and maintenance to keep your products running smoothly and efficiently 24/7",
      image: techSupport,
      icon: settings,
    },
    {
      id: 4,
      title: "Any Platform, Every Possibility",
      description:
        "We develop for any platform, exploring every possibility to meet your requirements, and exceed your expectations",
      image: platform,
      icon: rocket,
    },
  ];

  const currentItem = data[carouselIndex];

  const infoComponent = currentItem && (
    <div>
      <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-black flex items-center justify-center benefit_icon my-5">
        <Image alt="" src={currentItem.icon} className="w-[2.8rem]" priority />
      </div>
      <div className="title_container_benefits">
        <h1 className="title_card">{currentItem.title}</h1>
      </div>
      <div className="description_container_benefits">
        <p className="description_benefits">{currentItem.description}</p>
      </div>
      <div
        className="button_container_benefits"
        style={{
          padding: "10px",
        }}
      >
        <ButtonWeb
          href="#Contact"
          text="Contact us"
          color="white"
          backgroundColor="black"
          width="10rem"
          height="3.5rem"
        />
      </div>
    </div>
  );

  const illustrationPerk = currentItem && (
    <Image
      alt=""
      src={currentItem.image}
      fill
      className="image_cover"
      priority={true}
      style={{
        objectFit: "cover",
        position: "absolute",
        zIndex: "0",
      }}
    />
  );

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".title_card", {
        y: 120,
        ease: "power4.out",
        duration: 2.5,
        skewY: 7,
        stagger: {
          amount: 0.3,
        },
        scrollTrigger: {
          trigger: "#Benefits",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });

      gsap.from(".description_benefits", {
        opacity: 0,
        ease: "power4.out",
        delay: 1,
        duration: 2.5,
        scrollTrigger: {
          trigger: "#Benefits",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });

      gsap.from(".benefit_icon", {
        opacity: 0,
        ease: "power4.out",
        duration: 2.5,
        scrollTrigger: {
          trigger: "#Benefits",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });

      gsap.from(".button_container_benefits", {
        opacity: 0,
        ease: "power4.out",
        delay: 2,
        duration: 2.5,
        scrollTrigger: {
          trigger: "#Benefits",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     gsap.from(".benefit_title", {
  //       y: 100,
  //       ease: "power4.out",
  //       delay: 1,
  //       skewY: 7,
  //       stagger: {
  //         amount: 0.3,
  //       },
  //     });
  //   });

  //   return () => ctx.revert();
  // }, []);

  return (
    <section id="Benefits">
      <div className="benefits_container">
        <div className="container info">
          <SwitchTransition>
            <CSSTransition
              classNames="fade"
              key={currentItem.id}
              addEndListener={(node, done) =>
                addEventListener("transitionend", done, false)
              }
            >
              {infoComponent}
            </CSSTransition>
          </SwitchTransition>
        </div>
        <SwitchTransition>
          <CSSTransition
            classNames="fade"
            key={currentItem.id}
            addEndListener={(node, done) =>
              addEventListener("transitionend", done, false)
            }
          >
            <div className="container image" style={{ display: "flex" }}>
              {illustrationPerk}

              <div
                className="carousel_buttons"
                style={{
                  position: "relative",
                  zIndex: "2",
                  marginTop: "auto",
                  display: "flex",
                }}
              >
                <ButtonWeb
                  color="white"
                  backgroundColor="black"
                  width="5.5rem"
                  height="2.4rem"
                  onClick={prevIndex}
                >
                  <div style={{ position: "absolute", zIndex: "2" }}>
                    <LeftArrow />
                  </div>
                </ButtonWeb>
                <ButtonWeb
                  color="white"
                  backgroundColor="black"
                  width="5.5rem"
                  height="2.4rem"
                  margin="0 0 0 1rem"
                  onClick={nextIndex}
                >
                  <div style={{ position: "absolute", zIndex: "2" }}>
                    <RightArrow />
                  </div>
                </ButtonWeb>
              </div>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </section>
  );
}

export default BenefitSection;
