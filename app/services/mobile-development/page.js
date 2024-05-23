import HowWeMakeIt from "./components/sections/HowWeMakeIt";
import { Divider } from "@nextui-org/react";
import FaqSection from "@/app/components/sections/FaqSection";
import MyFooter from "@/app/components/sections/MyFooter";
import Copyright from "@/app/components/ui/Copyright";
import HeroImage from "./components/ui/HeroImage";
import ColaborateSection from "@/app/components/ui/ColaborateSection";

function page() {
  return (
    <>
      <section
        className="px-[10rem] pt-[4rem] pb-[7rem] w-[100dvw] h-full"
        id="web-development-page"
      >
        <div className="flex flex-col w-full items-center justify-center pt-[5rem]">
          <div className="flex flex-col items-center justify-center ">
            <h3 className="text-[16px] font-medium py-[2px] px-[8px] border-1 rounded-[4px] border-[#dadce0] mb-[12px]">Service</h3>
            <h1 className="text-[3rem] font-medium mb-[12px] text-center leading-[3rem]">
            Revolutionizing Online Experiences with {" "}
              <span className="text-amber-400"> Web Development</span> 
            </h1>
            <p className="text-center max-w-5xl ">
              At WebLabs, we build websites that are not only exceptionally
              stunning but are designed to elevate your business to the
              forefront of your industry. We have mastered the art of creating
              engaging, intuitive, and innovative front-ends for websites and
              web apps that captivates and hooks visitors from the first click.
            </p>
          </div>
          <HeroImage />
        </div>
      </section>
      <Divider />
      <HowWeMakeIt />
      <ColaborateSection background="bg-amber-400" />
      <FaqSection />
      <MyFooter background="bg-[#ccd1d4]" />
      <Copyright />
    </>
  );
}

export default page;
