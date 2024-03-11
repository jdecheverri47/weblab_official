import Image from "next/image";
import HeroSection from "./components/sections/HeroSection";
import HookSection from "./components/sections/HookSection";
import BenefitSection from "./components/sections/BenefitSection";
import ServicesSection from "./components/sections/ServicesSection";
import SecondHook from "./components/sections/SecondHook";
import ContactSection from "./components/sections/ContactSection";
import PricingSection from "./components/sections/PricingSection";
import FaqSection from "./components/sections/FaqSection";
import MyFooter from "./components/sections/MyFooter";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HookSection />
      <BenefitSection />
      <ServicesSection />
      <SecondHook />
      <ContactSection />
      <PricingSection />
      <FaqSection />
      <MyFooter /> 
    </main>
  );
}
