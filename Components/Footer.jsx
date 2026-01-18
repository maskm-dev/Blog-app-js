import logo_light from "@/Assets/logo_light.png";
import facebook_icon from "@/Assets/facebook_icon.png";
import twitter_icon from "@/Assets/twitter_icon.png";
import googleplus_icon from "@/Assets/googleplus_icon.png";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <Image src={logo_light} alt="" width={120} />
      <p className="text-white text-sm">
        ALl rights reserved. Copyright @blogger
      </p>
      <div className="flex">
        <Image src={facebook_icon} alt="" width={40} />
        <Image src={twitter_icon} alt="" width={40} />
        <Image src={googleplus_icon} alt="" width={40} />
      </div>
    </div>
  );
};

export default Footer;
