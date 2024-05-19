import {CalendarIcon, CubeTransparentIcon, PencilSquareIcon, CodeBracketIcon, RocketLaunchIcon, Cog6ToothIcon, CheckCircleIcon } from '@heroicons/react/24/solid'


const processData = [
  {
    id: 1,
    icon: <CalendarIcon className='text-red-400' />,
    iconService: <CalendarIcon className='text-gray-300' />,
    title: "Planning",
    number: "01",
    text: "At the start of each project, we work with our customers to build a solid project plan. The initial Scope document can come from the client or a combined process of phone calls and in-person meetings."
  },
  {
    id: 2,
    icon: <CubeTransparentIcon className='text-purple-400' />,
    iconService: <CubeTransparentIcon className='text-gray-300' />,
    title: "Wireframing",
    number: "02",
    text: "Once the project plan and scope have been finalized, our wireframing team takes over to determine the placement of all objects on each page of the application, whether it is a consumer mobile app or a backend business application. This is an important stage where we come to a final agreement on what will be placed on each page for the User to access."
  },
  {
    id: 3,
    icon: <PencilSquareIcon className='text-amber-400' />,
    iconService: <PencilSquareIcon className='text-gray-300' />,
    title: "Design",
    number: "03",
    text: "After the wireframes for all pages have been finalized, our design team takes over to create the final appearance and functionality of the application. This is an exciting stage of the project where you can see the entire application come to life. We will provide you with clickable versions to fully experience everything the user goes through before we begin coding."
  },
  {
    id: 4,
    icon: <CodeBracketIcon className='text-rose-400' />,
    iconService: <CodeBracketIcon className='text-gray-300' />,
    title: "Development",
    number: "04",
    text: "With the wireframes and designs finalized, we begin coding the application to make it functional. As an Agile development shop, we break down the project into baskets of features called Sprints. This approach allows our customers to regularly review the progress of their software development process and provide feedback at the end of each Sprint. We value your input and involvement throughout the entire development process."
  },
  {
    id: 5,
    icon: <CheckCircleIcon className='text-green-400' />,
    iconService: <CheckCircleIcon className='text-gray-300' />,
    title: "Testing",
    number: "05",
    text: "The testing phase is where we test the project to make sure everything is working correctly. This is where we make sure that the project meets the requirements set out in the planning phase."
  },
  {
    id: 6,
    icon: <RocketLaunchIcon className='text-fuchsia-400' />,
    iconService: <RocketLaunchIcon className='text-gray-300' />,
    title: "Deployment",
    number: "06",
    text: "After the application is completed, approved by our internal QA, project management and the client – we are ready to deploy the code to its final destination. Hosting options vary from client-owned servers to web or cloud hosting. We guide clients through the options and handle the final stages."
  },
  {
    id: 7,
    icon: <Cog6ToothIcon className='text-stone-400' />,
    iconService: <Cog6ToothIcon className='text-gray-300' />,
    title: "Maintenance",
    number: "07",
    text: "The maintenance phase is where we make sure that the project is running smoothly. This is where we make sure that the project is up to date and secure."
  },
]

export default processData;