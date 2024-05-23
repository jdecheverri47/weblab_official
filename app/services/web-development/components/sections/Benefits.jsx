import Image from "next/image";
import benefitOne from "@/public/images/web-benefit-1.jpg";
import benefitTwo from "@/public/images/web-benefit-2.jpg";
import benefitThree from "@/public/images/web-benefit-3.jpg";

function Benefits() {
  return (
    <section className="px-[15%] w-full h-full py-[5rem]">
      <article>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-[16px] font-medium py-[2px] px-[8px] border-1 rounded-[4px] border-[#dadce0] mb-[12px]">
            Benefits
          </h3>
        </div>
        <div className="grid grid-rows-3 gap-6 items-center justify-center mt-5">
          <div className="w-[900px] h-[350px] bg-gradient-to-tr from-[#E3FDF5] to-[#FFE6FA] rounded-[20px] relative overflow-hidden box-border">
            <div className="p-10 pt-5 mt-10 relative z-10">
              <h1 className="text-3xl font-medium text-black opacity-50">
                Customization and Scalability
              </h1>
              <p className="text-black opacity-50 max-w-lg">
                Experience custom web design and development that adapts to your
                business strategy, fostering growth and user engagement at every
                touchpoint.
              </p>
            </div>
            <div className="absolute left-10 -bottom-[25%] z-0 opacity-10">
              <h1 className="text-[200px] font-bold">1</h1>
            </div>
            <Image
              src={benefitOne}
              alt=""
              className="absolute -right-[20%] -bottom-[20%] max-w-[500px] rounded-full"
            />
          </div>
          <div className="w-[900px] h-[350px] bg-gradient-to-tr from-[#FFDEE9] to-[#B5FFFC] rounded-[20px] relative overflow-hidden box-border z-10">
            <div className="p-10 pt-5  mt-10 ml-[20rem]">
              <h1 className="text-3xl font-medium text-black opacity-50">
                Expert Integration Services
              </h1>
              <p className="text-black opacity-50 max-w-lg">
                Connect your web assets flawlessly with critical business
                systems. Our integration services simplify your operations,
                boosting efficacy and insight.
              </p>
            </div>
            <div className="absolute right-10 -bottom-[25%] z-0 opacity-10">
              <h1 className="text-[200px] font-bold">2</h1>
            </div>
            <Image
              src={benefitTwo}
              alt=""
              className="absolute -left-[20%] -bottom-[20%] max-w-[500px] rounded-full"
            />
          </div>
          <div className="w-[900px] h-[350px] bg-gradient-to-tr from-[#dee6ff] to-[#f0b5ff8c] rounded-[20px] relative overflow-hidden box-border">
            <div className="p-10 pt-5 mt-10">
              <h1 className="text-3xl font-medium text-black opacity-50">
                All-in-One Web Development
              </h1>
              <p className="text-black opacity-50 max-w-lg">
                From initiation to optimization, our all-encompassing web
                services eliminate complexity, ensuring consistency and quality
                across your digital presence.
              </p>
            </div>
            <div className="absolute left-10 -bottom-[25%] z-0 opacity-10">
              <h1 className="text-[200px] font-bold">3</h1>
            </div>
            <Image
              src={benefitThree}
              alt=""
              className="absolute -right-[20%] -bottom-[20%] max-w-[500px] rounded-full"
            />
          </div>
        </div>
      </article>
    </section>
  );
}

export default Benefits;
