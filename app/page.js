'use client'
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
import ProofSection from "./components/sections/ProofSection";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <main>
        <HeroSection />
        <HookSection />
        <BenefitSection />
        <ServicesSection />
        <article className="w-full bg-[#f0f0f0] h-[10vh]" />
        <ProofSection />
        <article className="w-full bg-[#f0f0f0] h-[10vh]" />
        <ContactSection />
        <FaqSection />
        <MyFooter /> 
      </main>
    </NextUIProvider>
  );
}
