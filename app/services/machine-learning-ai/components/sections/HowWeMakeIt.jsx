import GrayCard from "@/app/services/components/ui/GrayCard";
import Image from "next/image";
import { Card, CardHeader } from "@nextui-org/react";
import { LiaBrainSolid } from "react-icons/lia";
import aiHead from "@/public/images/nlp.png";
import computerVision from "@/public/images/computer-vision.webp";
import machineLearning from "@/public/images/gpt-gemini.jpeg";
import statistics from "@/public/images/tensorflow.png";
import CardMachine from "../ui/CardMachine";

function HowWeMakeIt() {
  return (
    <section className="w-[100dvw] h-full px-[8%] py-[5rem]">
      <div className="flex flex-col items-center justify-center gap-[3rem]">
        <div className="w-fit mb-[12px]">
          <div className="w-fit">
            <h2 className="font-medium text-[16px] px-[8px] py-[4px] border-1 rounded-[4px] border-[#dadce0]">
              How We Make It.
            </h2>
          </div>
        </div>

        <article className="flex gap-[2rem]">
          <div className="flex flex-col items-start justify-center gap-[1rem] mb-[4rem]">
            <LiaBrainSolid className="w-[6rem] h-[6rem] text-orange-400" />
            <h1 className="text-4xl font-bold">
              Leading-Edge Machine Learning Services for Modern Trends
            </h1>
          </div>
          <div className=" flex flex-col gap-[2rem]">
            <div className="flex gap-[2rem]">
              <CardMachine
                subtitle="What to watch"
                title="Generative AI"
                description="Generative AI provides powerful tools for the web, including automatic generation of images, text, and marketing content. It enables the creation of personalized recommendations, interactive chatbots, and dynamic web designs, enhancing user engagement and delivering a tailored web experience."
                image={machineLearning}
              />

              <CardMachine
                subtitle="What to watch"
                title="Predictive analytics & forecasting"
                description="Predictive analytics and forecasting provide valuable tools for the web, such as demand prediction, trend analysis, and customer behavior insights. These capabilities enable businesses to optimize inventory, personalize marketing strategies, and improve decision-making, ultimately enhancing user satisfaction and operational efficiency."
                image={statistics}
              />
            </div>
            <div className="flex gap-[2rem]">
              <CardMachine
                subtitle="What to watch"
                title="Natural Language Processing"
                description="Natural Language Processing offers powerful tools for the web, including sentiment analysis, language translation, and automated content generation. It enables the creation of intelligent chatbots, personalized user interactions, and improved search functionalities, enhancing the overall user experience and engagement."
                image={aiHead}
              />
              <CardMachine
                subtitle="What to watch"
                title="Computer Vision"
                description="Computer Vision provides essential tools for the web, such as real-time image recognition, automated tagging, and object detection. It enhances user experience through facial recognition, visual search capabilities, and augmented reality applications, making websites more interactive and intelligent."
                image={computerVision}
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default HowWeMakeIt;
