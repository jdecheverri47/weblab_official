"use client";
import HeroSection from "./components/sections/HeroSection";
import HookSection from "./components/sections/HookSection";
import BenefitSection from "./components/sections/BenefitSection";
import ServicesSection from "./components/sections/ServicesSection";
import FaqSection from "./components/sections/FaqSection";
import MyFooter from "./components/sections/MyFooter";
import { NextUIProvider } from "@nextui-org/react";
import MethodologySection from "./components/sections/MethodologySection";
import ContactModal from "./components/ui/ContactModal";
import Showcase from "./components/sections/Showcase";
import TestimonySection from "./components/sections/TestimonySection";
import Chatbot from "./components/ui/Chatbot";
import Copyright from "./components/ui/Copyright";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="overflow-hidden">
        <HeroSection />
        <HookSection />
        <BenefitSection />
        <ServicesSection />
        <MethodologySection />
        <Showcase />
        <TestimonySection />
        <FaqSection />
        <MyFooter background="bg-gray-200" />
        <Copyright />
        {/* <Chatbot /> */}
      </main>
    </NextUIProvider>
  );
}
