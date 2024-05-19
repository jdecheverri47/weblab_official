'use client'
import GrayCard from "../ui/GrayCard";

import processData from "@/app/data/ProcessData";
import { motion } from "framer-motion";

function Process() {
  const rowOne = processData.slice(0, 3).map((process, index) => {
    return (
      <GrayCard
        key={process.id}
        title={process.title}
        description={process.text}
        number={process.number}
        icon={process.iconService}
      />
    );
  });

  const rowTwo = processData.slice(3, 6).map((process, index) => {
    return (
      <GrayCard
        key={process.id}
        title={process.title}
        description={process.text}
        number={process.number}
        icon={process.iconService}
      />
    );
  });

  const rowThree = processData.slice(6, 7).map((process, index) => {
    return (
      <GrayCard
        key={process.id}
        title={process.title}
        description={process.text}
        number={process.number}
        icon={process.iconService}
      />
    );
  });

  return (
    <section className="w-full h-full bg-[#f8f9fa] py-[7rem] px-[17rem]">
      <div className="w-full flex items-center justify-center flex-col">
        <div className=" w-full flex items-start justify-start">
          <h1 className="font-medium text-5xl text-left">
            Our{" "}
            <strong className="bg-gradient-to-b from-[#6FEE8D] to-[#17c964] text-transparent bg-clip-text font-medium">
              Essential
            </strong>{" "}
            Process
          </h1>
        </div>
      </div>
      <div className=" flex flex-col gap-5 items-center justify-center mt-10 w-full">
        <motion.div className="w-fit flex flex-col gap-5 items-start justify-center" >
          <div className="flex gap-5">{rowOne}</div>
          <div className="flex gap-5">{rowTwo}</div>
          <div className="flex gap-5">{rowThree}</div>
        </motion.div>
      </div>
    </section>
  );
}

export default Process;
