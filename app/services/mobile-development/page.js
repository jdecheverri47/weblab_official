import HowWeMakeIt from "./components/sections/HowWeMakeIt";
import { Divider } from "@nextui-org/react";
import MyFooter from "@/app/components/sections/MyFooter";
import Copyright from "@/app/components/ui/Copyright";
import HeroImage from "./components/ui/HeroImage";
import ColaborateSection from "@/app/components/ui/ColaborateSection";
import Benefits from "./components/sections/Benefits";

function page() {
  return (
    <>
      <section
        className="px-[10rem] pt-[4rem] pb-[7rem] w-[100dvw] h-full"
        id="web-development-page"
      >
        <div className="flex flex-col w-full items-center justify-center pt-[5rem]">
          <div className="flex flex-col items-center justify-center ">
            <h3 className="text-[16px] font-medium py-[2px] px-[8px] border-1 rounded-[4px] border-[#dadce0] mb-[12px]">
              Service
            </h3>
            <h1 className="text-[3rem] font-bold mb-[12px] text-center leading-[3rem]">
              Sculpting
              <span className="text-blue-500"> Mobile Solutions </span> That
              Move You Forward
            </h1>
            <p className="text-center max-w-5xl ">
              we turn visionary ideas into powerful, user-centric mobile
              applications. Our expert developers and designers collaborate with
              you to create seamless, high-performance apps that captivate users
              and drive growth.
            </p>
          </div>
          <HeroImage />
        </div>
      </section>
      <Divider />
      <HowWeMakeIt />
      <ColaborateSection background="bg-blue-500" />
      <Benefits />
      <MyFooter background="bg-[#ccd1d4]" />
      <Copyright />
    </>
  );
}

export default page;
