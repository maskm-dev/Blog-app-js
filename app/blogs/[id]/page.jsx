"use client";
import { assets } from "@/Assets/assets";
import Footer from "@/Components/Footer";
import axios from "axios";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const params = useParams();
  const id = params.id;
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get("/api/blog", {
          params: { id },
        });
        setData(res.data.blog);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!data) return <p>Loading...</p>;

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
            {data.title}
          </h1>
          <Image
            src={data.authorImg || "/author_img.png"}
            alt=""
            width={60}
            height={60}
            className="mx-auto mt-6 border border-white rounded-full"
          />
          <p className="mt-1 pb-2 text-lg max-w-185 mx-auto">{data.author}</p>
        </div>
      </div>
      <div className="mx-5 max-w-200 md:mx-auto -mt-25 mb-5">
        <Image
          src={data.image}
          alt=""
          width={1280}
          height={720}
          className="border-4 border-black"
        />

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>

        <div className="flex">
          <Image src={assets.facebook_icon} alt="" width={50} />
          <Image src={assets.twitter_icon} alt="" width={50} />
          <Image src={assets.googleplus_icon} alt="" width={50} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
