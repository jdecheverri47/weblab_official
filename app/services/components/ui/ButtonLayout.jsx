"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { forwardRef } from "react";

const ButtonLayout = forwardRef(function ButtonLayout(children, ref) {
  const buttons = [
    {
      id: 1,
      text: "UI/UX Design",
      color: "bg-white border-black border-1 ",
      href: "#ui-dev-card",
    },
    {
      id: 2,
      text: "Web Development",
      color: "bg-white border-black border-1 ",
      href: "#web-dev-card",
    },
    {
      id: 3,
      text: "Mobile Development",
      color: "bg-white border-black border-1 ",
      href: "#mobile-dev-card",
    },
    {
      id: 4,
      text: "ML/AI",
      color: "bg-white border-black border-1 ",
      href: "#ml-dev-card",
    },
  ];

  const buttonGroup = buttons.map((button) => {
    return (
      <Link key={button.id} href={button.href}>
        <Button
          variant="light"
          className={`${button.color} bg-opacity-80`}
          size="lg"
          radius="full"
          auto
        >
          {button.text}
        </Button>
      </Link>
    );
  });
  return (
    <div
      className="flex gap-4 mt-8 w-full justify-center items-center opacity-0"
      ref={ref}
    >
      {buttonGroup}
    </div>
  );
});

export default ButtonLayout;
