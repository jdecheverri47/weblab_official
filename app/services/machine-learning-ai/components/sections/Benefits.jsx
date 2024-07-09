import Image from "next/image";
import benefitOne from "@/public/images/scientist.jpg";
import benefitTwo from "@/public/images/openai.png";
import benefitThree from "@/public/images/sales-2.png";

function Benefits() {
  return (
    <section className="px-[12%] w-full h-full py-[5rem]">
      <article>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-[16px] font-medium py-[2px] px-[8px] border-1 rounded-[4px] border-[#dadce0] mb-[15px]">
            Benefits
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[3rem] font-medium mb-[20px] text-center leading-[3rem]">
            Solve real-world problems with ML
          </h1>
          <p className="text-center max-w-3xl mb-[2rem]">
            Machine learning and AI are revolutionizing the way businesses
            operate. From predictive analytics and customer insights to fraud
            detection and process automation, AI-powered solutions can help you
            solve complex problems and drive growth.
          </p>
        </div>
        <div className="flex gap-[2rem] items-center justify-center mt-5">
          <div className="p-4 w-[420px] h-[565px] border-1 border-gray-200 rounded-[12px] shadow-md ">
            <Image
              src={benefitOne}
              alt=""
              className="w-full h-[42%] rounded-[10px] border-1 border-gray-200 object-cover"
            />
            <div className=" flex flex-col mt-5">
              <h2 className="text-[1.5rem] font-medium mb-[1rem]">
                Personalized Recommendations
              </h2>
              <p className="">
                Our Machine Learning algorithms analyze user behavior to deliver
                highly relevant and personalized product and content
                recommendations, making each visit to your website unique and
                satisfying.
              </p>
            </div>
          </div>
          <div className="p-4 w-[420px] h-[565px] border-1 border-gray-200 rounded-[12px] shadow-md ">
            <Image
              src={benefitTwo}
              alt=""
              className="w-full h-[42%] rounded-[10px] border-1 border-gray-200 object-cover"
            />

            <div className=" flex flex-col mt-5">
              <h2 className="text-[1.5rem] font-medium mb-[1rem]">
                Instant and Efficient Interaction
              </h2>
              <p className="text-md">
                Our chatbots and virtual assistants, powered by advanced Machine
                Learning algorithms, offer swift and precise responses to
                customer inquiries. This not only enhances the overall quality
                of customer support but also ensures that users receive
                immediate assistance at any time.
              </p>
            </div>
          </div>
          <div className=" p-4 w-[420px] h-[565px] border-1 border-gray-200 rounded-[12px] shadow-md">
            <Image
              src={benefitThree}
              alt=""
              className="w-full h-[42%] rounded-[10px] border-1 border-gray-200 object-cover"
            />
            <div className=" flex flex-col mt-5">
              <h2 className="text-[1.5rem] font-medium mb-[1rem]">
                Real-Time Data Insights
              </h2>
              <p className="text-md">
                Harness the power of real-time data insights with our Machine
                Learning solutions. Continuously analyze live data streams to
                gain immediate insights, allowing you to respond quickly to
                market changes and make agile business decisions.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Benefits;
