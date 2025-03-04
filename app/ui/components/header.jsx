import Link from "next/link";
import { House, User, LaptopMinimal } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between ">
      <span className="font-bold text-white glow">pablodev.</span>

      <nav className="flex space-x-4">
        <Link href="/home">
          <House />
        </Link>
        <Link href="/about">
          <User />
        </Link>
        <Link href="/work">
          <LaptopMinimal />
        </Link>
      </nav>

      <Link href="/contatc">Contact Me</Link>
    </div>
  );
}
