import { Minus, Square, X } from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-between ">
      <span className="font-bold text-white glow">pablodev.</span>

      <ul className="flex items-center space-x-4">
        <li>
          <button className="cursor-pointer">
            <Minus />
          </button>
        </li>
        <li>
          <button className="cursor-pointer">
            <Square />
          </button>
        </li>
        <li>
          <button className="cursor-pointer">
            <X />
          </button>
        </li>
      </ul>
    </div>
  );
}
