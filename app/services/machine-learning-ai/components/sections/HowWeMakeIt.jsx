import GrayCard from "@/app/services/components/ui/GrayCard";
import Image from "next/image";
import techStack from "@/public/images/computer.jpg";
import bigTech from "@/public/images/bigtech.png";
import responsive from "@/public/images/responsive.jpg";

function HowWeMakeIt() {
  return (
    <section className="w-[100dvw] h-full px-[10%] py-[5rem]">
      <div className="flex flex-col items-center justify-center gap-[3rem]">
        <div className="w-fit mb-[12px]">
          <div className="w-fit pl-[2.5rem]">
            <h2 className="font-medium text-[16px] px-[8px] py-[4px] border-1 rounded-[4px] border-[#dadce0]">How We Make It.</h2>
          </div>
        </div>

        <article className=" flex flex-col gap-[5rem]">
          
        </article>
      </div>
    </section>
  );
}

export default HowWeMakeIt;
