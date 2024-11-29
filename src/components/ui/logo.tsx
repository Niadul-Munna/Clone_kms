import logo from "@/logo.png";
import Image from "next/image";

interface LogoProps {}
const Logo = ({}: LogoProps) => {
  return (
    <div>
      <Image src={logo} alt="siteLogo" />
    </div>
  );
};

export default Logo;
