import React from "react";
import BlueCard from "../ui/BlueCard";
import benefits from "@/app/data/mobileBenefits";
import CodeSVG from "../ui/CodeSVG";

function Benefits() {
  const columnOne = benefits
    .slice(0, 3)
    .map((benefit) => (
      <BlueCard
        key={benefit.id}
        category={benefit.category}
        title={benefit.title}
        description={benefit.description}
      />
    ));

  const columnTwo = benefits
    .slice(3, 6)
    .map((benefit) => (
      <BlueCard
        key={benefit.id}
        category={benefit.category}
        title={benefit.title}
        description={benefit.description}
      />
    ));
  return (
    <section className="w-full h-full py-[5rem] px-[10%]">
      <article className="grid grid-cols-12 w-full">
        <div className="grid col-span-4 ">
          <div className="flex flex-col items-start justify-center">
            <CodeSVG />
            <div>
              <h1 className="text-4xl font-medium leading-snug ">
                We have tools to help with trust, safety, and more
              </h1>
              <p className="max-w-xs text-[14px] mt-3">
                Implement dozens of APIs, guides, docs, and more to help you do
                everything from monetizing your app to building user trust.
              </p>
            </div>
          </div>
        </div>
        <div className="grid col-span-8 ">
          <div className="grid grid-cols-2 gap-8">
            <div className="w-full h-full grid grid-rows-3 gap-8">
              {columnOne}
            </div>
            <div className="w-full h-full grid grid-rows-3 gap-8">
              {columnTwo}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Benefits;
