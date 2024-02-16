import Header from "./components/ui/Header";
import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "WebLab | Software Development Agency",
  description:
    "We are a software development agency that creates web and mobile applications for businesses and startups.",
};

const GTWalsheimPro = localFont({
  src: [
    {
      path: "fonts/GTWalsheimPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/GTWalsheimPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "fonts/GTWalsheimPro-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={GTWalsheimPro.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
