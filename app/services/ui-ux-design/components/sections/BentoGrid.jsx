import React from "react";

function BentoGrid() {
  return (
    <section className="w-full h-full px-[15%] py-[5rem]">
      <div className="flex flex-col w-full items-center justify-center">
        <h3 className="text-[16px] font-medium py-[2px] px-[8px] border-1 rounded-[4px] border-[#dadce0] mb-[12px]">
          Benefits
        </h3>
        <h1 className="text-[3rem] font-medium mb-[12px] text-center leading-[4rem] ">
          The Impact of Exceptional{" "}
          <span className="text-purple-500">UI/UX Design</span>
        </h1>
        <div className="grid grid-cols-10 gap-4 h-[800px] mt-10 w-full">
          <div className="grid col-span-6 border-1 border-[text-gray-200] rounded-[25px]">
            <div className="w-full h-full p-10">
              <div>
                <h2 className="text-2xl font-medium">
                  Increase in Conversion Rates
                </h2>
                <p className="text-[14px] max-w-xl">
                  Boost conversion rates with our intuitive, visually appealing
                  UI/UX designs that turn visitors into loyal customers.
                </p>
              </div>
            </div>
          </div>
          <div className="grid col-span-4 border-1 border-[text-gray-200] rounded-[25px]">
            <div className="w-full h-full p-10">
              <div>
                <h2 className="text-2xl font-medium">Enhance User Retention</h2>
                <p className="text-[14px] max-w-xl">
                  Keep users engaged and loyal with our exceptional UI/UX
                  designs. By creating seamless and satisfying experiences, we
                  ensure users return and stay longer.
                </p>
              </div>
            </div>
          </div>
          <div className="grid col-span-4 border-1 border-[text-gray-200] rounded-[25px]">
            <div className="w-full h-full p-10">
              <div>
                <h2 className="text-2xl font-medium">Boost Brand Perception</h2>
                <p className="text-[14px] max-w-xl">
                  Elevate your brand&apos;s image with our professional and
                  cohesive designs, enhancing credibility and trust.
                </p>
              </div>
            </div>
          </div>
          <div className="grid col-span-6 border-1 border-[text-gray-200] rounded-[25px]">
            <div className="w-full h-full p-10">
              <div>
                <h2 className="text-2xl font-medium">
                  Improve Customer Satisfaction
                </h2>
                <p className="text-[14px] max-w-lg">
                  Delight users with intuitive and seamless UI/UX designs,
                  leading to higher satisfaction and loyalty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BentoGrid;
