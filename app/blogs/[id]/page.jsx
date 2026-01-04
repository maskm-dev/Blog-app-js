"use client";

import { assets, blog_data } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const params = useParams();
  const id = Number(params.id);

  const blog = blog_data.find((b) => b.id === id);

  if (!blog) return <p>Loading...</p>;

  return (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <Image
              src={assets.logo}
              width={180}
              alt=""
              className="w-32.5 sm:w-auto"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-5px_5px_rgba(0,0,0,0.8)] transition-shadow duration-300 ease-in-out hover:shadow-[-1px]">
            Get Started <MoveRight />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-175 mx-auto">
            {blog.title}
          </h1>
          <Image
            src={blog.author_img}
            alt=""
            width={60}
            height={60}
            className="mx-auto mt-6 border border-white rounded-full"
          />
          <p className="mt-1 pb-2 text-lg max-w-185 mx-auto">{blog.author}</p>
        </div>
      </div>
      <div className="mx-5 max-w-200 md:mx-auto -mt-25 mb-5">
        <Image
          src={blog.image}
          alt=""
          width={1280}
          height={720}
          className="border-4 border-white"
        />
        <h1 className="my-8 text-2xl font-semibold mt-4">Introduction :</h1>
        <p>{blog.description}</p>
        <h3 className="my-5 text-xl font-semibold">
          Step 1 : Self-Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quis
          in quaerat odio ab facilis?
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nulla
          temporibus maxime.
        </p>
        <h3 className="my-5 text-xl font-semibold">
          Step 2 : Self-Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quis
          in quaerat odio ab facilis?
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nulla
          temporibus maxime.
        </p>
        <h3 className="my-5 text-xl font-semibold">
          Step 3 : Self-Reflection and Goal Setting
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quis
          in quaerat odio ab facilis?
        </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nulla
          temporibus maxime.
        </p>
        <h3 className="my-5 text-xl font-semibold">Conclusion</h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit velit
          voluptates assumenda, officiis ea excepturi veritatis perspiciatis
          tempore officia vel illum voluptatibus laborum reiciendis rerum.
        </p>
        <div className="my-24">
          <p className="text-black font-semibold my-4">
            Share This Artical on social media :
          </p>
          <div className="flex">
            <Image src={assets.facebook_icon} alt="" width={50} />
            <Image src={assets.twitter_icon} alt="" width={50} />
            <Image src={assets.googleplus_icon} alt="" width={50} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
