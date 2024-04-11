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
        `At the heart of our ethos is a dedication to delivering top-tier products. We understand the importance of aesthetics in making your product stand out in a crowded market. That's why we go the extra mile, offering prototypes and wireframes to guarantee the perfect design for your vision.`,
      image: DesignImage,
      icon: heart,
    },
    {
      id: 2,
      title: "Flexible Pricing",
      description:
        "Your satisfaction is our priority, which is why we offer flexible pricing and payment plans tailored to your unique needs and budget. Our aim is to ensure you receive the highest quality product at the best possible value, empowering you to make the most informed decisions for your business.",
      image: handsImage,
      icon: money,
    },
    {
      id: 3,
      title: "Uninterrupted Support and Maintenance",
      description:
        "We're committed to providing seamless support and maintenance, ensuring your products operate smoothly and efficiently around the clock. Our dedicated team is always available to address any questions or concerns you may have, ensuring your peace of mind every step of the way.",
      image: techSupport,
      icon: settings,
    },
    {
      id: 4,
      title: "Any Platform, Every Possibility",
      description:
        "We thrive on exploring every avenue to ensure your vision comes to life in the most impactful way possible. By tailoring our approach to embrace diverse platforms, we empower your product to resonate with a wider audience, reaching more people than ever before.",
      image: platform,
      icon: rocket,
    },
  ];

  const currentItem = data[carouselIndex];

  const infoComponent = currentItem && (
    <div className="info-container-box">
      <div className="w-[3.5rem] h-[3.5rem]  lg:w-[4.5rem] lg:h-[4.5rem] rounded-full bg-black flex items-center justify-center benefit_icon lg:my-5">
        <Image
          alt=""
          src={currentItem.icon}
          className="w-[2rem] lg:w-[2.8rem]"
          priority
        />
      </div>
      <div className="title_container_benefits">
        <h1 className="title_card tracking-tight">{currentItem.title}</h1>
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
          borderParams="1.5px solid #5c5c5c"
          shadow="shadow-lg"
        />
      </div>
    </div>
  );

  const illustrationPerk = currentItem && (
    <Image
      alt=""
      src={currentItem.image}
      fill
      className="image_cover shadow-inner"
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
                  borderParams="1.5px solid #5c5c5c"
                  shadow="shadow-lg"
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
                  borderParams="1.5px solid #5c5c5c"
                  shadow="shadow-lg"
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
