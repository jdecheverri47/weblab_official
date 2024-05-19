import HowWeMakeIt from "./components/sections/HowWeMakeIt";
import { Divider } from "@nextui-org/react";
import FaqSection from "@/app/components/sections/FaqSection";
import MyFooter from "@/app/components/sections/MyFooter";
import Copyright from "@/app/components/ui/Copyright";
import HeroImage from "./components/ui/HeroImage";
import BentoGrid from "./components/sections/BentoGrid";
import ColaborateSection from "@/app/components/ui/ColaborateSection";
function page() {
  return (
    <>
      <section
        className="px-[10rem] pt-[4rem] pb-[7rem] w-[100dvw] h-full"
        id="web-development-page"
      >
        <div className="flex flex-col w-full items-center justify-center pt-[5rem]">
          <div className="max-w-6xl flex flex-col items-center justify-center ">
            <h3 className="text-[16px] font-medium py-[2px] px-[8px] border-1 rounded-[4px] border-[#dadce0] mb-[12px]">
              Service
            </h3>
            <h1 className="text-[3rem] font-medium mb-[12px] text-center leading-[4rem]">
              Transcending Beyond Pixels with {" "}
              <span className="text-purple-500">UI/UX Design</span> 
            </h1>
            <p className="text-center max-w-5xl ">
              Weblabs is here to translate your vision into electrifying digital
              experiences marked by intuitive navigation, responsive layouts,
              and a harmonious blend of aesthetics and usability. Get ready to
              captivate your audience and anchor your brand&apos;s digital
              presence with our impeccable, user-focused UI/UX designs.
            </p>
          </div>
          <HeroImage />
        </div>
      </section>
      <Divider />
      <HowWeMakeIt />
      <ColaborateSection background="bg-purple-500" />
      <BentoGrid />
      <MyFooter background="bg-[#ccd1d4]" />
      <Copyright />
    </>
  );
}

export default page;
