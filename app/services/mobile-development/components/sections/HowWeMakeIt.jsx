import GrayCard from "@/app/services/components/ui/GrayCard";
import Image from "next/image";
import iosandroid from "@/public/images/android-vs-apple.jpg";
import m3Sample from "@/public/images/m3-sampleapp.png";
import userCentric from "@/public/images/image1.gif";

function HowWeMakeIt() {
  return (
    <section className="w-[100dvw] h-full px-[10%] py-[5rem]">
      <div className="flex flex-col items-between justify-center gap-[3rem]">
        <div className="w-fit mb-[12px]">
            <div className="w-full flex items-center justify-center">
              <h2 className="font-medium text-[16px] px-[8px] py-[4px] border-1 rounded-[4px] border-[#dadce0]">
                How We Make It.
              </h2>
          </div>
        </div>

        <article className=" flex flex-col gap-[5rem]">
          <div className="w-full flex items-center justify-between">
            <div className="w-[550px] h-[350px]">
              <div className="flex flex-col items-start gap-3">
                <h2 className="text-3xl font-medium">
                  Innovative Cross-Platform Development
                </h2>
                <p>
                  At Weblabs, we utilize the latest cross-platform frameworks to
                  build applications that work seamlessly across iOS, Android,
                  and other platforms. This approach not only ensures a
                  consistent user experience regardless of the device but also
                  significantly reduces development time and costs. By focusing
                  on flexibility and performance, we provide solutions that are
                  both efficient and scalable to meet your ever-evolving
                  business needs.
                </p>
              </div>
            </div>
            <div className="w-[550px] h-[350px] bg-gray-100 rounded-[30px] overflow-hidden">
              <Image
                alt="computer coding"
                src={iosandroid}
                className="object-cover h-full w-full"
              />
            </div>
          </div>
          <div className="w-full flex flex-row-reverse items-center justify-between">
            <div className="w-[550px] h-[350px]">
              <div className="flex flex-col items-start gap-3">
                <h2 className="text-3xl font-medium">User-Centric Design</h2>
                <p>
                  Our design philosophy centers around the end-user experience.
                  Our team of skilled UI/UX designers meticulously crafts
                  interfaces that are not only visually appealing but intuitive
                  and easy to use. We conduct thorough user research and
                  usability testing to ensure that our designs meet the specific
                  needs and behaviors of your target audience, thus driving
                  engagement and satisfaction.
                </p>
              </div>
            </div>
            <div className="w-[550px] h-[350px] bg-gray-100 rounded-[30px] overflow-hidden">
              <Image
                alt="big tech logos"
                src={userCentric}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="w-full flex items-between justify-between ">
            <div className="w-[550px] h-[350px]">
              <div className="flex flex-col items-start gap-3 ">
                <h2 className="text-3xl font-medium">Rigorous Quality Assurance</h2>
                <p>
                  Quality is at the heart of everything we do at Weblabs. Our
                  comprehensive quality assurance process involves multiple
                  stages of testing, from functionality and performance to
                  security and usability. We employ automated testing tools and
                  manual testing techniques to identify and resolve any issues,
                  ensuring that your app performs flawlessly under all
                  conditions.
                </p>
              </div>
            </div>
            <div className="w-[550px] h-[350px] bg-gray-100 rounded-[30px] overflow-hidden">
              <Image
                alt="big tech logos"
                src={m3Sample}
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
