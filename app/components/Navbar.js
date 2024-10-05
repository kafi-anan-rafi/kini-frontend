import Link from "next/link";
import React from "react";
import { LuMapPin } from "react-icons/lu";
import { MdOutlineStorefront } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";

export const Navbar = () => {
  return (
    <div className="border-b">
      <div className="container mx-auto flex flex-wrap justify-between items-center text-xs py-1 px-4 md:px-0">
        {/* Left Section - Tagline */}
        <div className="my-1 text-center w-full md:w-auto">
          Best E-commerce Website in Bangladesh.
        </div>

        {/* Right Section - Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-5 mt-2 md:mt-0 w-full md:w-auto">
          <Link href="/">
            <span className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-200">
              <MdOutlineStorefront className="text-base md:text-lg" />
              <span>Become Seller</span>
            </span>
          </Link>
          <Link href="/">
            <span className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-200">
              <LuMapPin className="text-base md:text-lg" />
              <span>Store Location</span>
            </span>
          </Link>
          <Link href="/">
            <span className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-200">
              <TbTruckDelivery className="text-base md:text-lg" />
              <span>Track Your Order</span>
            </span>
          </Link>
          <Link href="/">
            <span className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-200">
              <HiOutlineShoppingBag className="text-base md:text-lg" />
              <span>Shops</span>
            </span>
          </Link>
          <Link href="/">
            <span className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-200">
              <IoPersonOutline className="text-base md:text-lg" />
              <span>Sign Up</span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
