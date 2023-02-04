import Image from "next/image";

import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/24/solid";
import {
  FlagIcon,
  PlayIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div>
      <h1>Header</h1>

      {/* Left  */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2 ">
          <MagnifyingGlassIcon className="h-6" />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      {/* Center  */}
      {/* Right  */}
    </div>
  );
};

export default Header;
