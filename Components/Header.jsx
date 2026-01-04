import { assets } from "@/Assets/assets";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image src={assets.logo} alt="" className="w-32.5 sm:w-auto" />
        <button className="flex item-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-5px_5px_rgba(0,0,0,0.8)] transition-shadow duration-300 ease-in-out hover:shadow-[-1px]">
          Get Started <MoveRight />
        </button>
      </div>
      <div className="text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-medium">Latest Blogs Todays</h1>
        <p className="mt-10 max-w-185 m-auto text-xs sm:text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae atque
          placeat enim vero sit nemo?
        </p>
        <form
          className="flex justify-between max-w-125 scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-4px_4px_0px_rgba(0,0,0,0.8)]"
          action=""
        >
          <input
            type="email"
            placeholder="Enter Your Email"
            className="pl-4 outline-none"
          ></input>
          <button
            type="submit"
            className="border border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
