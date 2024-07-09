import Image from "next/image";
import tiktokLogo from "/public/images/tik-tok.png";
import instagram from "/public/images/instagram.png";
import logo from "/public/images/logo.png";
import Link from "next/link";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

function MyFooter({ background }) {
  return (
    <footer className={`relative footer-layout ${background}`}>
      <div className="footer_container  relative z-20">
        <div className="left_container flex-wrap !w-full">
          <div className="flex flex-col lg:flex-row justify-between gap-[2rem] lg:gap-[5rem] w-full flex-wrap pl-[10%] pr-[40%]">
            <div className="list-footer">
              <ul className="flex flex-col gap-3 justify-between items-start">
                <h3 className="text-lg font-medium border-b-2 border-black pb-2 mb-3">
                  Services
                </h3>
                <li>UI/UX Design</li>
                <a href="/services/web-development">
                  <li>Web Development</li>
                </a>
                <li>Mobile Development</li>
                <li>ML/AI</li>
              </ul>
            </div>
            <div className="list-footer">
              <ul className="flex flex-col gap-3 justify-between lg:justify-start items-start">
                <h3 className="text-lg font-medium border-b-2 border-black pb-2 mb-3">
                  Careers
                </h3>
                <li>Job Opportunities</li>
                <li>Talent Referrals</li>
              </ul>
            </div>
            <div className="list-footer">
              <ul className="flex flex-col gap-3 justify-between lg:justify-start items-start">
                <h3 className="text-lg font-medium border-b-2 border-black pb-2 mb-3">
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
        </div>
      </div>
    </footer>
  );
}

export default MyFooter;
