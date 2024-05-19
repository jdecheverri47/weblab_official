"use client";

import "@/app/styles/navbar.css";
import { useState, Fragment } from "react";

import Link from "next/link";
import ContactModal from "./ContactModal";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, InformationCircleIcon } from "@heroicons/react/20/solid";

import {
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  SquaresPlusIcon,
  CloudIcon,
  SparklesIcon,
  CubeTransparentIcon
} from "@heroicons/react/24/outline";

const services = [
  {
    name: "UI/UX Design",
    description: "Get a better understanding of your traffic",
    href: "/services/ui-ux-design",
    icon: SquaresPlusIcon,
  },
  {
    name: "Web Development",
    description: "Speak directly to your customers",
    href: "/services/web-development",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Mobile Development",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Machine Learning / AI",
    description: "Connect with third-party tools",
    href: "#",
    icon: SparklesIcon,
  },
  {
    name: "Cloud Computing",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: CloudIcon,
  },
  {
    name: "AR/VR Development",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: CubeTransparentIcon,
  },
];

const callsToAction = [
  { name: 'Learn More...', href: '/services', icon: InformationCircleIcon },
]

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="  px-[1rem] lg:px-[8.5rem] scrolled">
        <div className="flex gap-10 items-center">
          <Link href="/">
            {/* <Image alt="" src={logo} priority={true} className="w-[7rem] " /> */}
            <h1 className="font-bold text-2xl tracking-tighter bg-gradient-to-t from-black to-gray-600 text-transparent bg-clip-text px-2">
              WebLabs
            </h1>
          </Link>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-medium leading-6 opacity-80">
                Services
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {services.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-blue-400"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-[14px]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <a
              href="#"
              className="text-sm font-medium leading-6 opacity-80"
            >
              Features
            </a>
            <a
              href="#"
              className="text-sm font-medium leading-6 opacity-80"
            >
              Marketplace
            </a>
            <a
              href="#"
              className="text-sm font-medium leading-6 opacity-80"
            >
              Company
            </a>
          </Popover.Group>
        </div>
        <div>
          <ContactModal
            className="bg-black text-white text-md"
            size="md"
            radius="full"
            buttonText="Contact us"
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
