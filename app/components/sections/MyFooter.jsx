import Image from "next/image";
import logo from "/public/images/logo.png";
import tiktokLogo from "/public/images/tik-tok.png";
import instagram from "/public/images/instagram.png";
import Link from "next/link";
import Background from "../ui/Background";

function MyFooter() {
  return (
    <footer className="relative footer-layout bg-[#f0f4f9]">
      <div className="footer_container  relative z-20">

        <div className="left_container">
          <Image
            alt=""
            src={logo}
            style={{
              width: "4rem",
            }}
            priority={true}
          />
          <div className="terms">
            <h2>Privacy Policy</h2>
            <h2>Terms and Conditions</h2>
          </div>
          <div className="copyright">
            <h2>
              ©2023 WebLabs, LLC. <strong>All rights reserved.</strong>{" "}
            </h2>
          </div>
        </div>
        <div className="right_container">
          <div className="contact_weblab_info">
            <h2>Contact Us</h2>
            <h2 className="text-[16px]">support@weblabs.com.co</h2>
            <h2 className="text-[16px]">+57 3022166275</h2>
          </div>
          <div className="social_media">
            <h2 className="hidden lg:block">Social Media</h2>
            <div className="logos">
              <Link href="https://www.tiktok.com/@weblabs_">
                <Image src={tiktokLogo} alt="" priority className="w-[2.2rem] hover:opacity-50 transition-all duration-500 ease-in-out" />
              </Link>
              <Link href="https://www.instagram.com/weblabs_/">
                <Image src={instagram} alt="" priority className="w-[2rem] hover:opacity-50 transition-all duration-500 ease-in-out" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MyFooter;
