import Link from "next/link";
import { House, User, LaptopMinimal, Minus, Square, X } from "lucide-react";
import { Button } from "./Button";

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

      <ul className="flex items-center space-x-4">
        <li>
          <Button className="cursor-pointer">
            <Minus />
          </Button>
        </li>
        <li>
          <Button className="cursor-pointer">
            <Square />
          </Button>
        </li>
        <li>
          <Button className="cursor-pointer">
            <X />
          </Button>
        </li>
      </ul>
    </div>
  );
}
