import { assets } from "@/Assets/assets";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

const BlogTableItem = ({
  authorImage,
  title,
  author,
  date,
  deleteBlog,
  mongoId,
}) => {
  const BlogDate = new Date(date);

  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <Image
          src={authorImage ? authorImage : assets.profile_icon}
          alt="Author"
          width={40}
          height={40}
        />
        <p>{author ? author : "No Author"}</p>
      </th>
      <td className="px-6 py-4">{title ? title : "no title"}</td>
      <td className="px-6 py-4">{BlogDate.toLocaleDateString()}</td>
      <td onClick={() => deleteBlog(mongoId)} className="px-8 cursor-pointer">
        <X />
      </td>
    </tr>
  );
};

export default BlogTableItem;
