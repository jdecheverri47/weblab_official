import { Avatar } from "@nextui-org/react";
import { motion } from "framer-motion";

function TestimonyCard({ image, name, testimony }) {
  return (
    <motion.div
      className="p-4 bg-white rounded-[25px]"
      initial={{ y: 15, opacity: 0.9, scale: 0.9 }}
      whileInView={{ y: 0, opacity: 1, scale: 1}}
    >
      <div className="w-full justify-start">
        <div className="flex justify-start items-center gap-3">
          <Avatar size="md" src={image} />
          <span className="font-medium">{name}</span>
        </div>
        <div className="mt-3">
          <p className="text-gray-500">{testimony}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default TestimonyCard;
