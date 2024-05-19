"use client";
import { motion } from "framer-motion";

function GrayCard({ children, title, description, icon, number }) {
  return (
    <motion.div
      initial={{ y: 15, opacity: 0.9, scale: 0.9 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="w-[450px] h-[400px] bg-white rounded-[25px] p-[2rem]"
    >
      <div className="flex flex-col items-start justify-start gap-4">
        <div className="w-full flex justify-between">
          <div className="w-10">{icon}</div>
          <div className="text-3xl text-gray-300">{number}</div>
        </div>
        <div className="w-full">
          <h1 className="font-medium text-3xl text-center">{title}</h1>
        </div>
        <div>
          <p className="text-[16px]">{description}</p>
        </div>
      </div>
      {children}
    </motion.div>
  );
}

export default GrayCard;
