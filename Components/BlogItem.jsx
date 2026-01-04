import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogItem = ({ title, category, description, image, id }) => {
  return (
    <div className="max-w-82.5 sm:max-w-75 bg-white border border-black hover:shadow-[-7px_7px_0px_rgba(0,0,0,0.8)] transition-shadow duration-300 ease-in-out">
      <Link href={`/blogs/${id}`}>
        <Image
          src={image}
          alt=""
          width={400}
          height={400}
          className="border-b border-black"
        />
      </Link>
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm rounded">
        {category}
      </p>
      <div className="pt-5 px-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 text-sm tracking-tight text-gray-700">
          {description}
        </p>
        <Link
          href={`/blogs/${id}`}
          className="inline-flex items-center gap-2 px-4 py-2 my-2 text-sm font-medium text-white bg-black rounded hover:bg-amber-50 hover:text-black transition-colors"
        >
          Read More
          <MoveRight />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
