"use client";

import { useLayoutEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ServicesSection() {
  
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
      gsap.from(".services_container_card_text h1", {
        y: 150,
        ease: "power4.out",
        delay: 1.5,
        duration: 2,
        skewY: 4,
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: "#Services",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });

      gsap.from(".services_container_card_text p", {
        opacity: 0,
        ease: "power4.out",
        delay: 2,
        duration: 2,
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: "#Services",
          start: "top center",
          toggleActions: "play none none none",

          // markers: true,
        },
      });
      gsap.from(".services_container_card_text h2", {
        opacity: 0,
        ease: "power4.out",
        delay: 2,
        duration: 2,
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: "#Services",
          start: "top center",
          toggleActions: "play none none none",

          // markers: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#Services",
          start: "top center",
          end: "+=1000",
          scrub: 1,
          markers: false,
        },
      });

      tl.to(".services_container_cards", {
        yPercent: -15,
        ease: "none",
        duration: 4,
      });

      tl.to(".services_container_text", {
        yPercent: -50,
        ease: "none",
        duration: 4,
      }, 0);

      return () => ctx.revert();
    });
  }, []);
  return (
    <section id="Services">
      <div className="services_container">
        <div className="services_container_text pt-[2rem]">
          <div className="services_title">
            <h1>No matter the situation,</h1>
          </div>
          <div className="services_title">
            <h1 className="purple_text_gradient">We have a solution.</h1>
          </div>
        </div>
        <div className="services_container_cards pt-[5rem]">
          <div className="services_container_card">
            <div className="services_container_card_text">
              <h2>01</h2>
              <div className="services_title_container">
                <h1>Websites Development</h1>
              </div>
              <p>
                We design and develop websites that are not only visually
                compelling, but have the functionality and advanced programming
                to deliver leads, clients and revenues.
              </p>
            </div>
          </div>
          <div className="services_container_card">
            <div className="services_container_card_text">
              <h2>02</h2>
              <div className="services_title_container">
                <h1>Web App Development</h1>
              </div>
              <p>
                We create web applications that go beyond aesthetic allure,
                embedding advanced functionality and innovative programming to
                not only captivate users but also drive engagement, efficiency,
                and business growth.
              </p>
            </div>
          </div>
          <div className="services_container_card">
            <div className="services_container_card_text">
              <h2>03</h2>
              <div className="services_title_container">
                <h1>Mobile Development</h1>
              </div>
              <p>
                We engineer mobile applications that blend striking design with
                robust functionality, tailored to enhance user experience while
                driving effective engagement and fostering business success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
