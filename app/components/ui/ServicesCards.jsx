import { Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

function ServicesCards(props) {
  const router = useRouter();
  return (
    <motion.div variants={props.item}>
      <Card
        className="group/card w-full h-[350px] min-w-[300px] lg:min-w-[400px] lg:w-[300px] lg:h-[350px] lg:max-h-[400px] border-1 p-4 hover:shadow-md hover:border-indigo-500 !transition-all !duration-300 ease-in-out !hover:transition-all hover:duration-300 hover:ease-in-out hover:-translate-y-1 rounded-[16px]"
        shadow="none"
        isPressable
        onPress={() => router.push(props.link)}
      >
        <CardBody>
          <div className="flex flex-col justify-around items-start h-full relative z-20">
            {props.children}
            <div className="2xl:h-fit max-w-[190px]">
              <h1 className="text-2xl lg:text-3xl font-medium my-5">
                {props.title}
              </h1>
            </div>
            <div className="md:h-[6rem] 2xl:h-fit mb-auto">
              <p className="text-[15px] text-gray-500 lg:text-md">
                {props.description}
              </p>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
}

export default ServicesCards;
