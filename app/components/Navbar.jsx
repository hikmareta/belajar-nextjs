import Image from "next/image";
import Link from "next/link";
import Logo from "./TipsyTrip-Logo.jpg";

const Navbar = () => {
  return (
    <nav>
      <Image
        src={Logo}
        alt="TipsyTrip Logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h1>TipsyTrip</h1>
      <Link href="/"> Dashboard </Link>
      <Link href="/tickets"> Tickets </Link>
    </nav>
  );
};

export default Navbar;
