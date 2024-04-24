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
          <div className="flex justify-around gap-[1rem] lg:gap-[5rem] w-full flex-wrap">
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
              <ul className="flex flex-col gap-3 justify-between items-start">
                <h3 className="text-lg font-medium border-b-1 border-gray-300 pb-3 mb-3">
                  Careers
                </h3>
                <li>Job Opportunities</li>
                <li>Talent Referrals</li>
              </ul>
            </div>
            <div className="list-footer">
              <ul className="flex flex-col gap-3 justify-between items-start">
                <h3 className="text-lg font-medium border-b-1 border-gray-300 pb-3 mb-3">
                  Contact Us
                </h3>
                <li className="flex gap-2 justify-start items-center">
                  <EnvelopeIcon className="w-4 h-4" /> support@weblabs.com.co
                </li>
                <li className="flex gap-2 justify-start items-center">
                  <PhoneIcon className="w-4 h-4" />
                  +57 3022166275
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright mt-5">
            <h2>
              ©2023 WebLabs, LLC. <strong>All rights reserved.</strong>{" "}
            </h2>
          </div>
        </div>

        {/* <div className="right_container">
          <div className="social_media">
            <h2 className="hidden lg:block">Social Media</h2>
            <div className="logos">
              <Link href="https://www.tiktok.com/@weblabs_">
                <Image
                  src={tiktokLogo}
                  alt=""
                  priority
                  className="w-[2.2rem] hover:opacity-50 transition-all duration-500 ease-in-out"
                />
              </Link>
              <Link href="https://www.instagram.com/weblabs_/">
                <Image
                  src={instagram}
                  alt=""
                  priority
                  className="w-[2rem] hover:opacity-50 transition-all duration-500 ease-in-out"
                />
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
}

export default MyFooter;
