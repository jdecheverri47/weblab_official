import {
  Card,
  CardBody,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

import { PlusIcon } from "@heroicons/react/24/solid";

function CardService({ image, children, id }) {
  return (
    <Card
      className="w-[500px] h-[350px] relative "
      id={id}
    >
      {children}
      <Button className="absolute z-10 bottom-5 right-5 bg-white shadow-md" radius="full" isIconOnly >
        <PlusIcon className="w-5" />
      </Button>
      <Image
        alt="Relaxing app background"
        className="z-0 object-cover w-full h-full"
        src={image}
      />
    </Card>
  );
}

export default CardService;
