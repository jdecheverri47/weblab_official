import { Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";

function ServicesCards({ icon, title, description, svg, item }) {
  return (
    <motion.div variants={item}>
      <Card
        className="group/card w-full h-[350px] min-w-[300px] lg:min-w-[400px] lg:w-[300px] lg:h-[350px] lg:max-h-[400px] border-1 p-4 hover:shadow-lg !transition-all !duration-300 ease-in-out !hover:transition-all hover:duration-300 hover:ease-in-out hover:-translate-y-1 rounded-[25px]"
        shadow="none"
        isPressable
      >
        <CardBody>
          <div className="flex flex-col justify-around items-start h-full relative z-20">
            <div className="">{svg}</div>
            <div className="2xl:h-fit max-w-[240px]">
              <h1 className="text-2xl lg:text-3xl font-medium my-5">{title}</h1>
            </div>
            <div className="md:h-[6rem] 2xl:h-fit mb-12">
              <p className="text-[15px] text-gray-500 lg:text-md">{description}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
}

export default ServicesCards;
