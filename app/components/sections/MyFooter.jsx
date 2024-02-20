import Image from "next/image";
import logo from "/public/images/logo.png";
import fbLogo from "/public/images/logotipo-circular-de-facebook.png";
import instagram from "/public/images/instagram.png";


function MyFooter() {
  return (
    <footer>
      <div className="footer_container">
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
            <h2>©2023 WebLabs, LLC. <strong>All rights reserved.</strong> </h2>
          </div>
        </div>
        <div className="right_container">
          <div className="contact_weblab_info">
            <h2>Contact Us</h2>
            <h2>sales@weblabcreative.com</h2>
            <h2>+1 2878881111</h2>
          </div>
          <div className="social_media">
            <h2 className="hidden lg:block" >Social Media</h2>
            <div className="logos">
              <Image src={fbLogo} alt="" priority className="w-[2rem]" />
              <Image src={instagram} alt="" priority className="w-[2rem]" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MyFooter;
