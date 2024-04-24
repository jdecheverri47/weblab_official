import testimonies from "@/app/data/Testimonies";
import TestimonyCard from "../ui/TestimonyCard";

function TestimonySection() {
  const colOne = testimonies.slice(0, 3).map((testimony, index) => {
    return (
      <TestimonyCard
        key={testimony.id}
        image={testimony.image}
        name={testimony.name}
        testimony={testimony.testimony}
      />
    );
  });

  const colTwo = testimonies.slice(3, 6).map((testimony, index) => {
    return (
      <TestimonyCard
        key={testimony.id}
        image={testimony.image}
        name={testimony.name}
        testimony={testimony.testimony}
      />
    );
  });

  const colThree = testimonies.slice(6, 9).map((testimony, index) => {
    return (
      <TestimonyCard
        key={testimony.id}
        image={testimony.image}
        name={testimony.name}
        testimony={testimony.testimony}
      />
    );
  });

  const colFour = testimonies.slice(9, 13).map((testimony, index) => {
    return (
      <TestimonyCard
        key={testimony.id}
        image={testimony.image}
        name={testimony.name}
        testimony={testimony.testimony}
      />
    );
  });


  return (
    <section className="bg-[#f0f4f9] w-full h-full lg:px-[8.5rem] pt-[3rem] lg:pt-[5rem] pb-[2rem] relative">
      <div className="w-full flex justify-center mb-7 px-[3rem] lg:px-0 pb-[1rem]">
        <h1 className="font-medium text-[36px] text-center leading-8 lg:text-[76px]">Our customers <strong className="bg-gradient-to-r from-pink-400 to-red-500 text-transparent bg-clip-text">love us</strong> </h1>
      </div>
      <div className="lg:grid lg:grid-cols-4 px-[1rem] w-full relative lg:px-[8rem] xl:px-[12rem] gap-5">
        <div className="flex flex-col gap-4">{colOne}</div>
        <div className="hidden lg:flex flex-col gap-4 ">{colTwo}</div>
        <div className="hidden lg:flex flex-col gap-4">{colThree}</div>
        <div className="hidden lg:flex flex-col gap-4">{colFour}</div>
      </div>
      <div className="absolute bg-gradient-to-t from-white to-transparent h-[350px] bottom-0 w-screen left-0" />
    </section>
  );
}

export default TestimonySection;
