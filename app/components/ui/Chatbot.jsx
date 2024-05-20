import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react";
import Sparkle from "../svgs/Sparkle";

export default function Chatbot() {
  return (
    <div className="!fixed !right-0 !bottom-0 m-10">
      <Popover showArrow placement="top-end" offset={10} shouldCloseOnBlur >
        <PopoverTrigger>
          <Button
            color="primary"
            variant="flat"
            className="capitalize min-w-unit-10 w-[65px] h-[65px] rounded-full flex items-center justify-center ai-shadow"
          >
            <Sparkle />
          </Button>
        </PopoverTrigger>
        <PopoverContent  >
          <Card
            shadow="none"
            className="relative border-none bg-transparent min-w-[300px] min-h-[500px]"
          >
            <CardHeader className="w-full flex items-center justify-center">
              <h3 className="text-lg opacity-50">WebLy</h3>
            </CardHeader>
            <CardBody></CardBody>
            <CardFooter>
              <Input
                classNames={{
                  input: [
                    "bg-[#f0f4f9] !hover:bg-[#f0f4f9] focus:bg-[#eaf3ff]",
                  ],
                  inputWrapper: [
                    "bg-[#f0f4f9] data-[hover=true]:bg-[#f0f4f9] group-data-[focus=true]:bg-[#eaf3ff]",
                  ],
                  innerWrapper: [
                    "bg-[#f0f4f9] !hover:bg-[#f0f4f9] focus:bg-[#eaf3ff]",
                  ],
                }}
                placeholder="Type a message"
              />
            </CardFooter>
          </Card>
        </PopoverContent>
      </Popover>
    </div>
  );
}
