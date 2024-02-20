"use client";
import { useState, useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Image from "next/image";
import ButtonWeb from "../ui/ButtonWeb";
import DesignImage from "/public/images/web_app.png";
import handsImage from "/public/images/shaking_hands.jpg";
import LeftArrow from "../ui/LeftArrow";
import RightArrow from "../ui/RightArrow";

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
    },
    {
      id: 2,
      title: "Flexible Pricing",
      description:
        "We care the most about deliver top products with great aesthetics combined with functionalities",
      image: handsImage,
    },
    {
      id: 3,
      title: "Uninterrupted Support and Maintenance",
      description:
        "We care the most about deliver top products with great aesthetics combined with functionalities",
      image: DesignImage,
    },
    {
      id: 4,
      title: "Any Platform, Every Possibility",
      description:
        "We care the most about deliver top products with great aesthetics combined with functionalities",
      image: DesignImage,
    },
  ];

  const currentItem = data[carouselIndex];

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
        {currentItem && (
          <div className="container info" key={currentItem.id}>
            <div className="title_container_benefits">
              <h1 className="title_card">{currentItem.title}</h1>
            </div>
            <div className="description_container_benefits">
              <p className="description_benefits">{currentItem.description}</p>
            </div>
            <div className="button_container_benefits"
              style={{
                padding: "10px",
              }}
            >
              <ButtonWeb
                text="Contact us"
                color="white"
                backgroundColor="black"
                width="10rem"
                height="3.5rem"
              />
            </div>
          </div>
        )}
        <div className="container image" style={{ display: "flex" }}>
          {currentItem && (
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
          )}
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
              width="6rem"
              height="3rem"
              onClick={prevIndex}
            >
              <div style={{ position: "absolute", zIndex: "2" }}>
                <LeftArrow />
              </div>
            </ButtonWeb>
            <ButtonWeb
              color="white"
              backgroundColor="black"
              width="6rem"
              height="3rem"
              margin="0 0 0 1rem"
              onClick={nextIndex}
            >
              <div style={{ position: "absolute", zIndex: "2" }}>
                <RightArrow />
              </div>
            </ButtonWeb>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitSection;
