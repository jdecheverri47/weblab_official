import CloudSvg from "../components/svgs/CloudSvg";
import DbSvg from "../components/svgs/DbSvg";
import GlobalSvg from "../components/svgs/GlobalSvg";
import IotSvg from "../components/svgs/IotSvg";
import PaletteSvg from "../components/svgs/PaletteSvg";
import Phone from "../components/svgs/Phone";
import Sparkle from "../components/svgs/Sparkle";
import VrHeadset from "../components/svgs/VrHeadset";

const Services = [
  {
    id: 1,
    title: "Web Development",
    svg: <GlobalSvg />,
    description:
      "We focus on combining striking aesthetics with advanced programming, ensuring your site also drives tangible results, such as leads, clients, and revenue.",
  },
  {
    id: 2,
    svg: <Phone />,
    title: "Mobile Development",
    description:
      "Crafting innovative mobile solutions to elevate your business. From concept to launch, we ensure seamless development and stunning design for engaging user experiences.",
  },
  {
    id: 3,
    svg: <PaletteSvg />,
    title: "UI/UX Design",
    description:
      "Our team creates visually captivating interfaces tailored to your brand, ensuring intuitive navigation and an unforgettable journey.",
  },
  {
    id: 4,
    svg: <DbSvg />,
    title: "Back-end Development",
    description:
      " From database management to server-side logic, we ensure your applications run smoothly and efficiently, powering your business for success.",
  },
  {
    id: 5,
    svg: <Sparkle />,
    title: "AI & Machine Learning",
    description:
      "From generative AI and language models to image generation and computer vision, we pioneer the integration of cutting-edge technologies.",
  },
  {
    id: 6,
    svg: <CloudSvg />,
    title: "Cloud Computing",
    description:
      "Maximize the power of Google Cloud with our certified expertise. As Google Cloud specialists, we offer tailored cloud solutions to fuel your business growth.",
  },
  {
    id: 7,
    svg: <IotSvg />,
    title: "Internet of Things",
    description:
      "Leveraging cutting-edge technology and expertise, we design and deploy customized IoT systems to optimize processes and drive innovation in your industry.",
  },
  {
    id: 8,
    svg: <VrHeadset />,
    title: "AR & VR Development",
    description:
      "Step into the future with our Augmented Reality (AR) solutions. we leverage state-of-the-art technology to create captivating AR experiences that engage and delight users.",
  },
]

export default Services;