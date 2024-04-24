const testimonies = [
  {
    id: 1,
    name: "Dann van der Meer",
    title: "CEO",
    company: "Company",
    testimony:
      "WebLabs has empowered our agency to expand its horizons by enabling us to craft websites in an exceptionally efficient and innovative manner.",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    title: "CEO",
    company: "Company",
    testimony:
      "My journey with WebLabs has been truly outstanding. It has revolutionized my design process, facilitated seamless collaboration, and enabled me to achieve remarkable outcomes. For any designer seeking to enhance their skills and craft breathtaking interactive designs, I wholeheartedly endorse trying out WebLabs.",
    image:
      "https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Leila Khoury",
    title: "CEO",
    company: "Company",
    testimony:
      "WebLabs has been instrumental in transforming my concepts into polished websites at a remarkable speed, elevating the quality tenfold.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Hans Schmidt",
    title: "CEO",
    company: "Company",
    testimony:
      "Thanks to WebLabs, @cloodot's SEO has skyrocketed by 250% since our initial launch in July. Their expertise has truly transformed our online presence.",
    image:
      "https://images.unsplash.com/photo-1636041282858-351171ff944c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Ling Chen",
    title: "CEO",
    company: "Company",
    testimony:
      "With WebLabs, designing remarkable websites requires only half the effort, allowing me to focus more on sales and less on technicalities.",
    image:
      "https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Fatima Al-Mansoori",
    title: "CEO",
    company: "Company",
    testimony:
      "WebLabs goes above and beyond in delivering exceptional customer service. Their team is always available to address any concerns or issues promptly, ensuring a smooth and hassle-free experience for us",
    image:
      "https://media.gettyimages.com/id/1394149760/es/foto/retrato-de-una-empresaria-saud%C3%AD-confiada-a-finales-de-los-a%C3%B1os-20.jpg?s=612x612&w=0&k=20&c=vd6VxMeTYWPpByU_woCSKqwnKbmGg3IGHAvF3SJLfuw=",
  },
  {
    id: 7,
    name: "Olivia Andersson",
    title: "CEO",
    company: "Company",
    testimony:
      "WebLabs has been a game-changer for our business. Their software solutions have streamlined our operations, increased productivity, and ultimately boosted our bottom line. We couldn't be happier with the results.",
    image:
      "https://images.unsplash.com/photo-1571176027350-7ab51030c911?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "Jan Nowak",
    title: "CEO",
    company: "Company",
    testimony:
      "WebLabs transformed our website and boosted our online presence. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1546512565-39d4dc75e556?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "Matteo Bianchi",
    title: "CEO",
    company: "Company",
    testimony:
      "Choosing WebLabs for our software development needs was one of the best decisions we've made. Their attention to detail, commitment to quality, and innovative solutions have exceeded our expectations time and time again.",
    image:
      "https://images.unsplash.com/photo-1566746846558-bed177819f0e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "Emiliano de la Rosa",
    title: "CEO",
    company: "Company",
    testimony:
      "With WebLabs, designing remarkable websites requires only half the effort, allowing me to focus more on sales and less on technicalities.",
    image:
      "https://images.unsplash.com/photo-1596075780750-81249df16d19?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    name: "Samantha Lee",
    title: "CEO",
    company: "Company",
    testimony:
      "WebLabs' expertise in design is unparalleled. Highly impressed!",
    image:
      "https://media.gettyimages.com/id/1411736767/es/foto/mujer-chino-estadounidense-mirando-fuera-de-c%C3%A1mara-sobre-fondo-gris.jpg?s=612x612&w=0&k=20&c=t45dogmvmJ5WkOUnDkvoQsyG-tYxoRFSgpM9gvSfj0E=",
  },
  {
    id: 12,
    name: "Matthew Taylor",
    title: "CEO",
    company: "Company",
    testimony:
      "I can't recommend WebLabs enough! Their professionalism, expertise, and dedication to client satisfaction are unmatched. Working with them has been an absolute pleasure, and I look forward to continuing our partnership in the future.",
    image:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    name: "Joshua Wright",
    title: "CEO",
    company: "Company",
    testimony:
      "WebLabs delivered beyond our expectations. Great team to work with!",
    image:
      "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

];

export default testimonies;