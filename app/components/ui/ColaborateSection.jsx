'use client'
import ContactModal from "@/app/components/ui/ContactModal";

function ColaborateSection({ background }) {
  return (
    <section className={`w-full h-[350px] ${background} px-[20%] py-[3rem]`}>
      <div className="h-full flex flex-col items-center justify-center">
        <h3 className="text-white text-3xl">Excited?</h3>
        <h1 className="text-white text-7xl font-medium">
          Let&apos;s Work Together!
        </h1>
        <p className="text-white mt-3 text-[18px] max-w-lg text-center">
          Get in touch with our experts to review your idea or product, and
          discuss options for the best approach
        </p>
        <ContactModal
          className="bg-black text-white text-[15px] w-[140px] h-[50px] lg:w-[150px] lg:text-[18px] lg:h-[50px] mt-4"
          size="lg"
          radius="full"
          buttonText="Get in touch!"
        />
      </div>
    </section>
  );
}

export default ColaborateSection;
