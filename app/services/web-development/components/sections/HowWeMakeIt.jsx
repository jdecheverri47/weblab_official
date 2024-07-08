import GrayCard from "@/app/services/components/ui/GrayCard";
import Image from "next/image";
import techStack from "@/public/images/computer.jpg";
import bigTech from "@/public/images/bigtech.png";
import responsive from "@/public/images/responsive.jpg";

function HowWeMakeIt() {
  return (
    <section className="w-[100dvw] h-full px-[10%] py-[5rem]">
      <div className="flex flex-col items-center justify-center gap-[3rem]">
        <div className="w-fit mb-[12px]">
          <div className="w-fit pl-[2.5rem]">
            <h2 className="font-medium text-[16px] px-[8px] py-[4px] border-1 rounded-[4px] border-[#dadce0]">
              How We Make It.
            </h2>
          </div>
        </div>

        <article className=" flex flex-col gap-[5rem]">
          <div className="w-full flex items-center justify-center gap-[4rem]">
            <div className="w-[550px] h-[350px]">
              <div className="flex flex-col items-start gap-3">
                <h2 className="text-3xl">Top Tier Tech-Stack.</h2>
                <p>
                  Groundbreaking web development relies on cutting-edge
                  technology. At WebLabs, we use advanced technologies like
                  Next.js, React, Vue.js, Angular, TailwindCSS, and Node.js to
                  ensure your web platforms are aesthetically superior, highly
                  functional, flexible, and seamlessly performing. Choose
                  WebLabs to place your business at the forefront of digital
                  excellence by blending technology with creativity.
                </p>
              </div>
            </div>
            <div className="w-[550px] h-[350px] bg-gray-100 rounded-[30px] overflow-hidden">
              <Image
                alt="computer coding"
                src={techStack}
                className="object-cover h-full w-full"
              />
            </div>
          </div>
          <div className="w-full flex flex-row-reverse items-center justify-center gap-[4rem]">
            <div className="w-[550px] h-[350px]">
              <div className="flex flex-col items-start gap-3">
                <h2 className="text-3xl">Big Tech Secrets</h2>
                <p>
                  Unlock the Power of Innovation with Big Tech&apos;s Secrets.
                  At WebLabs, our extensive research on tech pioneers like
                  Google, Apple, and Meta has helped us develop unique internal
                  guidelines. These principles guide our software development,
                  allowing us to apply top industry insights efficiently. By
                  leveraging these secrets, we ensure our products are
                  high-quality and infused with the advanced strategies of
                  global tech leaders.
                </p>
              </div>
            </div>
            <div className="w-[550px] h-[350px] bg-gray-100 rounded-[30px] overflow-hidden">
              <Image
                alt="big tech logos"
                src={bigTech}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="w-full flex items-center justify-center gap-[4rem]">
            <div className="w-[550px] h-[350px]">
              <div className="flex flex-col items-start gap-3 ">
                <h2 className="text-3xl">Fully Optimized Responsive</h2>
                <p>
                  Experience universal compatibility with our fully responsive
                  designs at WebLabs. We blend aesthetics and functionality to
                  create web solutions that work seamlessly on any device or
                  platform, from ultra-HD desktop screens to mobile devices. Our
                  designs ensure optimal viewing and interaction, enhanced
                  performance, and swift loading speeds. Embedded with SEO
                  strategies, our solutions not only look and perform superbly
                  but also rank high on search engines. Unleash the power of
                  total usability, top-tier performance, and impressive
                  visibility with WebLabs.
                </p>
              </div>
            </div>
            <div className="w-[550px] h-[350px] bg-gray-100 rounded-[30px] overflow-hidden">
              <Image
                alt="big tech logos"
                src={responsive}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default HowWeMakeIt;
