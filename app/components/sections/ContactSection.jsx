"use client";

import ButtonWeb from "../ui/ButtonWeb";
import Circle from "../ui/Circle";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function ContactSection() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({});

      gsap.from(".contact_title h1", {
        y: 250,
        ease: "power3.out",
        duration: 1.5,
        skewY: 7,
        stagger: {
          amount: 0.3,
        },
        scrollTrigger: {
          trigger: "#Contact",
          start: "top center",
          toggleActions: "play none none none",
          // markers: true,
        },
      });

      gsap.from(".card_text_container p", {
        opacity: 0,
        ease: "power4.out",
        delay: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: "#Contact",
          start: "top center",
          toggleActions: "play none none none",

          // markers: true,
        },
      });

      gsap.from("form", {
        opacity: 0,
        ease: "power4.out",
        delay: 2,
        duration: 1.5,
        scrollTrigger: {
          trigger: "#Contact",
          start: "top center",
          toggleActions: "play none none none",

          // markers: true,
        },
      });

      gsap.from(".hook_end", {
        opacity: 0,
        ease: "power4.out",
        delay: 2.5,
        duration: 1.5,
        scrollTrigger: {
          trigger: "#Contact",
          start: "top center",
          toggleActions: "play none none none",

          // markers: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="Contact">
      <Circle color="purple" top="-20%" zIndex="0" left="0" />
      <div className="contact_container">
        <div className="contact_card">
          <div className="card_text_container">
            
            <div className="contact_title">
              <h1>Our experts are</h1>
            </div>
            <div className="contact_title">
              <h1
                className="text_blue"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              >
                Ready for you!
              </h1>
            </div>
            <div>
              <p>We are just one message away</p>
            </div>
          </div>
          <div className="card_form_container">
            <form
              style={{
                marginTop: "3.5rem",
              }}
            >
              <div className="form_group">
                <input type="text" id="name" name="name" placeholder="Name"/>
              </div>
              <div
                className="form_group"
                style={{
                  marginTop: "3.5rem",
                }}
              >
                <input type="text" id="company" name="company" placeholder="Company" />
              </div>
              <div
                className="form_group"
                style={{
                  marginTop: "3.5rem",
                }}
              >
                <input type="email" id="email" name="email" placeholder="Email"/>
              </div>
              <div
                className="form_group"
                style={{
                  marginTop: "3.5rem",
                }}
              >
                <textarea id="message" name="message" placeholder="Message"></textarea>
              </div>
              <ButtonWeb
                text="Send Now!"
                color="white"
                backgroundColor="black"
                width="10rem"
                height="3.5rem"
                margin="2rem 0 0 0"
              />
            </form>
          </div>
        </div>
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
          className="hook_end_container"
        >
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "500",
            }}
            className="hook_end"
          >
            Or...
          </h1>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
