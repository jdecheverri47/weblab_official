"use client";
import { useState, useLayoutEffect, useEffect, useRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import ContactModal from "../ui/ContactModal";
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
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(null);
  const componentRef = useRef(null);

  const prevIndex = () => {
    setCarouselIndex((index) => (index === 0 ? 3 : index - 1));
    clearTimeout(timeoutId);
    clearInterval(isIntersecting);
    setLoadingProgress(0);
  };

  const nextIndex = () => {
    setCarouselIndex((index) => (index === 3 ? 0 : index + 1));
    clearTimeout(timeoutId);
    clearInterval(isIntersecting);
    setLoadingProgress(0);
  };

  const data = [
    {
      id: 1,
      title: "Peak quality Design",
      description: `At the heart of our ethos is a dedication to delivering top-tier products. We understand the importance of aesthetics in making your product stand out in a crowded market. That's why we go the extra mile, offering prototypes and wireframes to guarantee the perfect design for your vision.`,
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
        <h1 className="title_card tracking-normal lg:text-5xl">{currentItem.title}</h1>
      </div>
      <div className="description_container_benefits">
        <p className="description_benefits">
          {currentItem.description}
        </p>
      </div>
      <div
        className="button_container_benefits"
        style={{
          padding: "10px",
        }}
      >
        <ContactModal
          className="bg-blue-200 text-blue-900 w-[130px] text-sm h-[45px] font-medium"
          size="lg"
          radius="full"
          buttonText="Contact us"
        />
      </div>
    </div>
  );

  const illustrationPerk = currentItem && (
    <Image
      alt=""
      src={currentItem.image}
      fill
      className="image_cover shadow-inner object-cover"
      priority={true}
    />
  );

  
  useEffect(() => {
    const ref = componentRef.current;
    let timer;
    let indexTimer;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let currentProgress = 0;
          timer = setInterval(() => {
            if (currentProgress <= 101) {
              currentProgress += 100 / 1850;
              setLoadingProgress(currentProgress);
            }
          }, 5); // Actualiza cada 100ms

          // Lógica para avanzar al siguiente índice después de 7 segundos
          indexTimer = setTimeout(() => {
            nextIndex();
          }, 10000);
        } else {
          // Limpiar los temporizadores si el componente sale de la vista
          clearInterval(timer);
          clearTimeout(indexTimer);
          setLoadingProgress(0);
        }
      },
      { threshold: 0.2 } // Umbral de visibilidad del 20%
    );

    if (ref) {
      observer.observe(ref);
    }

    // Detener la observación cuando el componente se desmonte
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
      // Limpiar los temporizadores si el componente se desmonta
      clearInterval(timer);
      clearTimeout(indexTimer);
    };
  }, [carouselIndex]);

  return (
    <section id="Benefits" className="relative" ref={componentRef}>
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
            <div
              className="container image shadow-inner relative overflow-hidden"
              style={{ display: "flex" }}
            >
              <div
                className="loading_bar absolute z-20 h-[10px] left-0 bottom-0"
                style={{ width: `${loadingProgress}%` }}
              />

              {illustrationPerk}

              <div className="carousel_buttons relative z-20 mt-auto flex gap-4">
                <Button
                  className="bg-black text-white text-[18px] w-[5rem] h-[2.3rem] "
                  size="sm"
                  radius="full"
                  onPress={prevIndex}
                >
                  <div style={{ position: "absolute", zIndex: "2" }}>
                    <LeftArrow />
                  </div>
                </Button>
                <Button
                  className="bg-black text-white text-[18px] w-[5rem] h-[2.3rem] "
                  size="sm"
                  radius="full"
                  onPress={nextIndex}
                >
                  <div style={{ position: "absolute", zIndex: "2" }}>
                    <RightArrow />
                  </div>
                </Button>
              </div>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </section>
  );
}

export default BenefitSection;
