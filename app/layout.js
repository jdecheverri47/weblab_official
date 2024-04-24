import Header from "./components/ui/Header";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextUIProvider } from "@nextui-org/react";

import "./globals.css";

export const metadata = {
  title: "WebLabs | Software Development Agency",
  description:
    "We are a software development agency that creates web and mobile applications for businesses and startups.",
};

const GoogleSans = localFont({
  src: [
    {
      path: "fonts/GoogleSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/GoogleSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "fonts/GoogleSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={GoogleSans.className + " " + "overflow-hidden"}>
          {/* <Header /> */}
          {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
