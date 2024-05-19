import GrayCard from "@/app/services/components/ui/GrayCard";
import Image from "next/image";
import userExperience from "@/public/images/user-experience.jpg";
import retro from "@/public/images/retro.jpg";
import prototype from "@/public/images/prototype.jpg";

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
                <h2 className="text-3xl">User Experience</h2>
                <p>
                  WebLabs&apos;s design principles focus on the user, maintain
                  simplicity, ensure speed and efficiency, promote transparency,
                  and emphasize continuous improvement, setting a high standard
                  in the tech industry. These principles not only drive the
                  design of its products but also resonate with a global
                  audience, making technology more accessible and enjoyable to
                  use. As we continue to evolve, these design tenets will
                  undoubtedly continue to shape the future of digital design.
                </p>
              </div>
            </div>
            <div className="w-[550px] h-[350px] rounded-[30px] overflow-hidden border-1 border-gray-200">
              <Image
                alt="computer coding"
                src={userExperience}
                className="object-contain h-full w-full"
              />
            </div>
          </div>
          <div className="w-full flex flex-row-reverse items-center justify-center gap-[4rem]">
            <div className="w-[550px] h-[350px]">
              <div className="flex flex-col items-start gap-3">
                <h2 className="text-3xl">User Interface Design</h2>
                <p>
                  Unlock the Power of Innovation with Big Techs Secrets. At
                  WebLabs, years of extensive research and intricate study of
                  big tech pioneers like Google, Apple, and Meta have enabled us
                  to develop a unique set of internal guidelines. These
                  principles guide our approach to software development, helping
                  us to apply industry-leading insights without the need for
                  reinventing the wheel. By leveraging these treasured secrets,
                  we ensure that the products we deliver aren&apos;t just
                  high-quality but also infused with the advanced strategies
                  that drive global tech leaders.{" "}
                </p>
              </div>
            </div>
            <div className="w-[550px] h-[350px] bg-gray-100 rounded-[30px] overflow-hidden border-1 border-gray-200">
              <Image
                alt="big tech logos"
                src={retro}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="w-full flex items-center justify-center gap-[4rem]">
            <div className="w-[550px] h-[350px]">
              <div className="flex flex-col items-start gap-3 ">
                <h2 className="text-3xl"> High-fidelity Prototypes</h2>
                <p>
                  Experience Universal Compatibility with our &rsquo;Fully
                  Responsive&rsquo; Designs. At WebLabs, we nurture the
                  interplay between aesthetics and functionality to construct
                  web solutions that transcend boundaries of device and
                  platform. Whether it&apos;s an ultra-HD desktop screen or a
                  mobile device, our designs respond flawlessly across all
                  interfaces, offering optimal viewing and interaction
                  experience. But that&apos;s not all. Our commitment to
                  responsiveness extends beyond the surface to incorporate
                  enhanced performance and swift loading speeds. Embedded with
                  SEO strategies, our fully optimized solutions don&apos;t just
                  look and perform superbly; they also rank high on search
                  engines. Unleash the power of total usability, top-tier
                  performance, and impressive visibility with WebLabs.
                </p>
              </div>
            </div>
            <div className="w-[550px] h-[350px] rounded-[30px] overflow-hidden border-1 border-gray-200">
              <Image
                alt="big tech logos"
                src={prototype}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default HowWeMakeIt;
