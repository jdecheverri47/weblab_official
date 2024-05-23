import { forwardRef } from "react";
import CardService from "@/app/services/components/ui/CardService";
import womanPhone from "@/public/images/girl-phone.jpg";
import uiux from "@/public/images/ui-ux-design.jpg";
import offer from "@/public/images/lady-web.jpg";
import backend from "@/public/images/backend.jpg";
import ai from "@/public/images/ai.jpg";
import cloud from "@/public/images/cloud.jpg";
import ar from "@/public/images/vr.webp";
import Image from "next/image";
import cloudCertified from "@/public/images/googlecloud.png";

const CardsCarousel = forwardRef(function CardsCarousel(props, ref) {
  return (
    <article id="cards_carousel" className="relative mt-[3.5rem] flex gap-2 ">
      <div className="relative w-[170dvw] flex gap-3 opacity-0" ref={ref}>
        <div className=" ">
          <CardService id="web-dev-card" image={offer}>
            <div className="absolute left-5 bottom-[14%] z-20 max-w-xs flex flex-col">
              <div className="h-fit">
                <h2 className="font-medium text-xl text-gray-300">
                  Web development
                </h2>
                <h2 className="font-medium text-3xl text-white">
                  We build the <strong className=" text-amber-500">highest</strong>
                  <br /> quality in the market.
                </h2>
              </div>
            </div>
          </CardService>
        </div>
        <div>
          <CardService image={womanPhone}>
            <div className="absolute left-5 top-[10%] z-20 max-w-[280px] flex flex-col">
              <div className="h-fit">
                <h2 className="font-medium text-xl text-gray-300">
                  Mobile development
                </h2>
                <h2 className="font-medium text-3xl text-white ">
                  Take your business
                  <br /> to the <strong className="text-blue-500 ">next level.</strong> 
                </h2>
                <h2 className="font-medium text-3xl text-white mt-4">
                  Make any app,
                  <br /> to any device.
                </h2>
              </div>
            </div>
          </CardService>
        </div>
        <div>
          <CardService image={uiux}>
            <div className="w-full h-[40%] absolute left-0 bottom-0 bg-gradient-to-t from-stone-400 to-transparent z-10" />
            <div className="absolute left-5 bottom-[5%] z-20  flex flex-col">
              <div className="h-fit">
                <h2 className="font-medium text-xl text-gray-300">
                  UI/UX Design
                </h2>
                <h2 className="font-medium text-3xl text-white ">
                  Aesthetics like no one else can do,
                  <br />
                  Step up to <strong className="text-fuchsia-600">your own league!</strong> 
                </h2>
              </div>
            </div>
          </CardService>
        </div>
        <div>
          <CardService image={ai} id="ml-dev-card">
            <div className="absolute left-[5%] bottom-[8%] max-w-[400px] z-20  flex flex-col">
              <div className="h-fit">
                <h2 className="font-medium text-xl text-gray-300">
                  Machine learning / AI
                </h2>
                <h2 className="font-medium text-3xl text-white">
                  Place your business among the <strong className="text-orange-400 font-medium">new era</strong> of technology.
                </h2>
              </div>
            </div>
          </CardService>
        </div>
        <div>
          <CardService image={cloud}>
          <div className="w-full h-[20%] absolute left-0 bottom-0 bg-gradient-to-t from-black to-transparent z-10" />

            <Image
              alt="Cloud certified"
              src={cloudCertified}
              className="w-[20%] absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            />
            <div className="absolute left-[5%] bottom-[8%] max-w-[400px] z-20  flex flex-col">
              <div className="h-fit">
                <h2 className="font-medium text-xl text-gray-300">Cloud</h2>
                <h2 className="font-medium text-3xl text-white">
                  There is no place for limits in the <strong className="text-blue-500 font-medium">new way</strong> to cloud.
                </h2>
              </div>
            </div>
          </CardService>
        </div>
        <div>
          <CardService image={ar}>
            <div className="absolute left-7 top-[15%] z-20 max-w-[280px] flex flex-col">
              <div className="h-fit">
                <h2 className="font-medium text-xl text-gray-400">
                  AR/VR Development
                </h2>
                <h2 className="font-medium text-3xl text-white ">
                  <strong className="text-rose-500 ">Inmersive</strong> experiences like never before.
                </h2>
                
              </div>
            </div>
          </CardService>
        </div>
      </div>
    </article>
  );
});

export default CardsCarousel;
