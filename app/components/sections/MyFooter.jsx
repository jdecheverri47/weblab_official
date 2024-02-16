import Image from "next/image";
import logo from "/public/images/logo.png";


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
            <h2>©2023 WebLabs, LLC. All rights reserved.</h2>
          </div>
        </div>
        <div className="right_container">
          <div>
            <h2>Contact Us</h2>
            <h2>email</h2>
            <h2>phone</h2>
          </div>
          <div className="social_media">
            <h2>Social Media</h2>
            <div className="logos">
              <h2>facebook</h2>
              <h2>instagram</h2>
              <h2>twitter</h2>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MyFooter;
