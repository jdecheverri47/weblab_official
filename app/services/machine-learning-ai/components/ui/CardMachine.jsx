
import Image from "next/image";
import { Card, CardHeader } from "@nextui-org/react";

function CardMachine({ image, title, description, subtitle}) {
  return (
    <Card className="col-span-12 sm:col-span-4 h-[300px] w-[500px] group/machine hover:scale-105 hover:shadow-2xl transition-all !duration-400 ease-[cubic-bezier(.25,.75,.5,1.25)]">
      <CardHeader className="absolute z-10 top-0 flex-col !items-start bg-gradient-to-b from-gray-950 to-transparent h-[25%] transition-all !duration-400 ease-[cubic-bezier(.25,.75,.5,1.25)] group-hover/machine:h-full overflow-hidden group-hover/machine:to-orange-950 group-hover/machine:cursor-pointer ">
        <p className="text-tiny text-white/60 uppercase font-bold">
          {subtitle}
        </p>
        <h4 className="text-white font-medium text-large">{title}</h4>
        <p className="text-white text-md mt-2 opacity-0 group-hover/machine:opacity-100 transition-all ease-[cubic-bezier(.25,.75,.5,1.25)] !duration-400">
          {description}
        </p>
      </CardHeader>
      <Image
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={image}
      />
    </Card>
  );
}

export default CardMachine;
