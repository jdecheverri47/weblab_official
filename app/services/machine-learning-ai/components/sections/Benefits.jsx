import Image from "next/image";
import benefitOne from "@/public/images/web-benefit-1.jpg";
import benefitTwo from "@/public/images/web-benefit-2.jpg";
import benefitThree from "@/public/images/web-benefit-3.jpg";

function Benefits() {
  return (
    <section className="px-[15%] w-full h-full py-[5rem]">
      <article>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-[16px] font-medium py-[2px] px-[8px] border-1 rounded-[4px] border-[#dadce0] mb-[12px]">
            Benefits
          </h3>
        </div>
        <div className="flex gap-[3rem] items-center justify-center mt-5">
          <div className="w-[400px] h-[600px] border-1 border-gray-200 rounded-[12px]">

          </div>
          <div className="w-[400px] h-[600px] border-1 border-gray-200 rounded-[12px]">

          </div>
          <div className="w-[400px] h-[600px] border-1 border-gray-200 rounded-[12px]">

          </div>

        </div>
      </article>
    </section>
  );
}

export default Benefits;
