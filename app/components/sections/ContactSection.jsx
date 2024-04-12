"use client";

import ButtonWeb from "../ui/ButtonWeb";
import Circle from "../ui/Circle";

import { Input, Textarea } from "@nextui-org/react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useState } from "react";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

function ContactSection() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleRevert = (ctx) => {
    ctx.kill();
  };
  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     gsap.from(".contact_title h1", {
  //       y: 250,
  //       ease: "power3.out",
  //       duration: 1.5,
  //       skewY: 7,
  //       stagger: {
  //         amount: 0.3,
  //       },
  //       scrollTrigger: {
  //         trigger: "#Contact",
  //         start: "top center",
  //         toggleActions: "play none none none",
  //         // markers: true,
  //       },
  //     });

  //     gsap.from(".card_text_container p", {
  //       opacity: 0,
  //       ease: "power4.out",
  //       delay: 1,
  //       duration: 1.5,
  //       scrollTrigger: {
  //         trigger: "#Contact",
  //         start: "top center",
  //         toggleActions: "play none none none",

  //         // markers: true,
  //       },
  //     });

  //     gsap.from("form", {
  //       opacity: 0,
  //       ease: "power4.out",
  //       delay: 2,
  //       duration: 1.5,
  //       scrollTrigger: {
  //         trigger: "#Contact",
  //         start: "top center",
  //         toggleActions: "play none none none",

  //         // markers: true,
  //       },
  //     });

  //     gsap.from(".hook_end", {
  //       opacity: 0,
  //       ease: "power4.out",
  //       delay: 2.5,
  //       duration: 1.5,
  //       scrollTrigger: {
  //         trigger: "#Contact",
  //         start: "top center",
  //         toggleActions: "play none none none",

  //         // markers: true,
  //       },
  //     });
  //   });

  //   return () => ctx.revert();
  // }, []);

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     gsap.from(".contact_container", {
  //       height: "0%",
  //       ease: "power4.out",
  //       duration: 1.5,
  //       scrollTrigger: {
  //         trigger: "#Contact",
  //         start: "top center",
  //         toggleActions: "play none none none",
  //         // markers: true,
  //       },
  //     });

  //     gsap.to(".contact_container", {
  //       xPercent: 80,
  //       ease: "power4.out",
  //       delay: 1,
  //       duration: 2,
  //       scrollTrigger: {
  //         trigger: "#Contact",
  //         start: "top center",
  //         toggleActions: "play none none none",
  //         // markers: true,
  //       },
  //     }, 1.5);

  //     gsap.from(".contact_video", {
  //       height: "0vh",
  //       ease: "power4.out",
  //       delay: 1.5,
  //       duration: 2,
  //       scrollTrigger: {
  //         trigger: "#Contact",
  //         start: "top center",
  //         toggleActions: "play none none none",
  //         // markers: true,
  //       },
  //     }, 2.5);
  //   });

  //   return () => ctx.revert();
  // }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia(),
        breakPoint = 768;
      mm.add(
        {
          // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
          isDesktop: `(min-width: ${breakPoint}px)`,
          isMobile: `(max-width: ${breakPoint - 1}px)`,
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
          let { isDesktop, isMobile, reduceMotion } = context.conditions;

          gsap.from(".contact_container", {
            height: "0%",
            ease: "power4.out",
            duration: 1.5,
            scrollTrigger: {
              trigger: "#Contact",
              start: "top center",
              toggleActions: "play none none none",
              // markers: true,
            },
          });

          gsap.to(
            ".contact_container",
            {
              xPercent: isDesktop ? 80 : 0,
              ease: "power4.out",
              delay: isDesktop ? 1 : 2.5,
              duration: 2,
              scrollTrigger: {
                trigger: "#Contact",
                start: "top center",
                toggleActions: "play none none none",
                // markers: true,
              },
            },
            isDesktop ? 1.5 : 2.5
          );

          gsap.from(
            ".contact_video",
            {
              height: "0vh",
              ease: "power4.out",
              delay: isDesktop ? 1.5 : 0,
              duration: 2,
              scrollTrigger: {
                trigger: "#Contact",
                start: "top center",
                toggleActions: "play none none none",
                // markers: true,
              },
            },
            isDesktop ? 2.5 : 1.5
          );
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const redirect = () => {
    router.push("https://cal.com/jose.echeverri");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const company = form.company.value;
    const email = form.email.value;
    const message = form.message.value;

    try {
      const docRef = await addDoc(collection(db, "Messages"), {
        name: name,
        company: company,
        email: email,
        message: message,
      });
      console.log("Document written with ID: ", docRef.id);
      form.reset();
      setLoading(false);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <section id="Contact">
      {/* <Circle color="purple" top="-20%" zIndex="0" left="0" /> */}
      <div className="contact_video absolute z-10 bg-white rounded-[25px] overflow-hidden shadow-inner">
        <video
          width={350}
          height={300}
          autoPlay={true}
          controls={false}
          loop
          muted={true}
          className="h-full w-full object-cover shadow-inner"
        >
          <source src="/videos/keyboard.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="contact_container shadow-xl border-2 border-[#e3e3e3] bg-white bg-opacity-95">
        <div className="contact_card">
          <div className="card_text_container">
            <div className="contact_title tracking-tighter">
              <h1>Our experts are</h1>
            </div>
            <div className="contact_title tracking-tighter">
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
            <div className="mt-4">
              <p>We are just one message away</p>
            </div>
          </div>
          <div className="card_form_container">
            <form className="mt-2" onSubmit={handleSubmit} >
              <div className="form_group">
                <Input
                  size="lg"
                  variant="bordered"
                  classNames={{
                    input: ["bg-white", ],
                    innerWrapper: ["bg-white"],
                    inputWrapper: ["bg-white", "shadow-md"],
                  }}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  isDisabled={loading}
                />
              </div>
              <div className="form_group">
                <Input
                  isDisabled={loading}
                  size="lg"
                  variant="bordered"
                  classNames={{
                    input: ["bg-white"],
                    innerWrapper: ["bg-white"],
                    inputWrapper: ["bg-white", "shadow-md"],
                  }}
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company"
                />
              </div>
              <div className="form_group">
                <Input
                  isDisabled={loading}
                  classNames={{
                    input: ["bg-white"],
                    innerWrapper: ["bg-white"],
                    inputWrapper: ["bg-white", "shadow-md"],
                  }}
                  size="lg"
                  variant="bordered"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="form_group">
                <Textarea
                  isDisabled={loading}
                  classNames={{
                    input: ["bg-white"],
                    innerWrapper: ["bg-white"],
                    inputWrapper: ["bg-white", "shadow-md"],
                  }}
                  size="lg"
                  variant="bordered"
                  id="message"
                  name="message"
                  placeholder="Message"
                ></Textarea>
              </div>
              <div className="h-fit w-full flex justify-center items-center gap-4 mt-5">
                <ButtonWeb
                  text="Send Now!"
                  color="white"
                  backgroundColor="#000000"
                  width="9rem"
                  height="3rem"
                  fontSize="1rem"
                  shadow="shadow-lg"
                  borderParams="2px solid #5c5c5c"
                  type="submit"
                />
                <h2 className="text-center font-medium text-gray-500">OR</h2>
                <ButtonWeb
                  text="Book a Call"
                  backgroundColor="#ffffff"
                  color="#000000"
                  width="9rem"
                  height="3rem"
                  fontSize="1rem"
                  shadow="shadow-lg "
                  borderParams="2px solid #f0f0f0"
                  onClick={redirect}
                />
              </div>
            </form>
          </div>
        </div>
        {/* <div>or</div> */}

        {/* <div>
          <ButtonWeb
            text="Book a Call"
            href="#Contact"
            backgroundColor="black"
            color="white"
            width="10rem"
            height="3.5rem"
          />
        </div> */}
      </div>
    </section>
  );
}

export default ContactSection;
