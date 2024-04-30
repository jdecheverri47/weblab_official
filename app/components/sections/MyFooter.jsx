import Image from "next/image";
import tiktokLogo from "/public/images/tik-tok.png";
import instagram from "/public/images/instagram.png";
import logo from "/public/images/logo.png";
import Link from "next/link";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

function MyFooter() {
  return (
    <footer className="relative footer-layout bg-[#f0f4f9]">
      <div className="footer_container  relative z-20">
        <div className="left_container flex-wrap !w-full">
          <div className="flex flex-col lg:flex-row justify-around gap-[2rem] lg:gap-[5rem] w-full flex-wrap">
            <div>
              <Image src={logo} alt="" className="w-[3rem]" />
            </div>
            <div className="list-footer">
              <ul className="flex flex-col gap-3 justify-between items-start">
                <h3 className="text-lg font-medium border-b-1 border-gray-300 pb-3 mb-3">
                  Services
                </h3>
                <li>Web Development</li>
                <li>Mobile Development</li>
                <li>UI/UX Design</li>
                <li>ML/AI</li>
                <li>Backend Development</li>
                <li>Cloud</li>
                <li>AR/VR Development</li>
              </ul>
            </div>
            <div className="list-footer">
              <ul className="flex flex-col gap-3 justify-between lg:justify-start items-start">
                <h3 className="text-lg font-medium border-b-1 border-gray-300 pb-3 mb-3">
                  Careers
                </h3>
                <li>Job Opportunities</li>
                <li>Talent Referrals</li>
              </ul>
            </div>
            <div className="list-footer">
              <ul className="flex flex-col gap-3 justify-between lg:justify-start items-start">
                <h3 className="text-lg font-medium border-b-1 border-gray-300 pb-3 mb-3">
                  Contact Us
                </h3>
                <div className="flex gap-2 justify-start items-center">
                  <EnvelopeIcon className="w-4 h-4" />
                  <li> support@weblabs.com.co</li>
                </div>

                <div className="flex gap-2 justify-start items-center">
                  <PhoneIcon className="w-4 h-4" />
                  <li>+57 3022166275</li>
                </div>
              </ul>
            </div>
          </div>
          <div className="copyright mt-5">
            <h2 className="!text-sm">
              ©2023 WebLabs, LLC. <strong>All rights reserved.</strong>{" "}
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MyFooter;
