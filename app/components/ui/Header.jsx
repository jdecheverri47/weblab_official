import Image from "next/image";
import logo from "/public/images/logo.png";
import ButtonWeb from "./ButtonWeb";

function Header() {
  return (
    <header>
      <nav>
        <Image
          alt=""
          src={logo}
          style={{
            width: "4rem",
          }}
          priority={true}
        />
        <ul>
          <li>Benefits</li>
          <li>Services</li>
          <li>Pricing</li>
          <li>About Us</li>
        </ul>
        <div>
          <ButtonWeb
            href="#Contact"
            text="Contact Us"
            color="white"
            backgroundColor="black"
            width="9rem"
            height="3rem"
            margin="0 0 0 1.5rem"
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
