import MyFooter from "../components/sections/MyFooter";
import Copyright from "../components/ui/Copyright";
import CarouselSection from "./components/sections/CarouselSection";
import Process from "./components/sections/Process";

function page() {
  return (
   <>
    <CarouselSection />
    <Process />
    <MyFooter />
    <Copyright />
   </>
  );
}

export default page;
