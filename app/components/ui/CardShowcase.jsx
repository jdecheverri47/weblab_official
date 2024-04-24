import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";

function CardShowcase({ src, position, shadow, ref }) {
  return (
    <div
      className={`relative ${shadow} rounded-xl w-fit h-fit`}
      ref={ref}
    >
      {/* <Card
        className="card_container_weblabs col-span-12 sm:col-span-7 "
      >
        <CardBody> */}
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-[510px] h-[320px] object-cover"
            src={src}
          />
        {/* </CardBody>
      </Card> */}
    </div>
  );
}

export default CardShowcase;
