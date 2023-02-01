import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, MoonIcon } from "@heroicons/react/20/solid";
import { HeaderProps } from "@/types/CommonTypes";

function Header({ onToggleDarkMode }: HeaderProps) {
  return (
    <header className="flex items-center px-2 py-6">
      <div className="flex items-center">
        <button className="mr-3 flex items-center p-1">
          <Bars3Icon width={20} className="mr-2.5 inline-block" />
          <span className="font-bold uppercase leading-none">Menu</span>
        </button>
        <button className="p-1" onClick={onToggleDarkMode}>
          <MoonIcon width={20} />
        </button>
      </div>
      <div className="flex grow justify-center">
        <Link href="/">
          <Image
            src="assets/images/today_logo.svg"
            alt="Today Logo"
            width={190}
            height={65}
            priority
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
