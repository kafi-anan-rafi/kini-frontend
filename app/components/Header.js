import Link from "next/link";
import { Search } from "./Search";
import { Navbar } from "./Navbar";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdPerson } from "react-icons/io";

export const Header = () => {
  return (
    <header className="bg-white border-b">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-wrap justify-between container mx-auto items-center py-2 px-4 md:px-0">
        {/* Logo Section */}
        <div className="flex items-center w-full md:w-auto">
          <div className="py-1">
            <Link
              className="font-bold text-2xl md:text-3xl text-blue-600"
              href="/"
            >
              kini<span className="text-zinc-700">.</span>
            </Link>
            <p className="text-[10px] md:text-[12px] text-zinc-700">
              কেনাকাটা যখন তখন!
            </p>
          </div>
        </div>

        {/* Search bar */}
        <div className="w-full md:w-3/5 mt-3 md:mt-0">
          <Search />
        </div>

        {/* User and Cart Section */}
        <div className="flex items-center justify-end w-full md:w-auto mt-4 md:mt-0 gap-8">
          {/* Login Section */}
          <Link href="/">
            <span className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-200">
            <IoMdPerson className="text-lg md:text-xl" />
              <span>Login</span>
            </span>
          </Link>

          {/* Cart Section */}
          <Link href="/" className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-200">
            <div className="relative">
              <HiOutlineShoppingBag className="text-lg md:text-xl" />
              <span className="absolute bottom-[-6px] right-[-6px] text-[9px] md:text-[10px] font-bold bg-yellow-400 rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </div>
            <span className="text-sm md:text-base">Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
