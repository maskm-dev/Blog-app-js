import { NextResponse } from "next/server";
import { connectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { writeFile } from "fs/promises";
import path from "path";
import sharp from "sharp";

const fs = require("fs");

export async function GET(req) {
  await connectDB();

  const blogId = req.nextUrl.searchParams.get("id");
  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json({ blog });
  } else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs });
  }
}

export async function POST(req) {
  try {
    await connectDB();

    const formData = await req.formData();
    const image = formData.get("image");

    if (!image) {
      return NextResponse.json(
        { success: false, msg: "No image uploaded" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await image.arrayBuffer());

    const resizedBuffer = await sharp(buffer)
      .resize(1280, 720, {
        fit: "cover", // ครอบตัดให้พอดี
        position: "center", // จัดกึ่งกลางเมื่อตัด
      })
      .toBuffer();

    const filename = `${Date.now()}_${image.name}`;
    const filepath = path.join(process.cwd(), "public", filename);

    await writeFile(filepath, resizedBuffer);

    const imgUrl = `/${filename}`;

    const blogData = {
      title: `${formData.get("title")}`,
      description: `${formData.get("description")}`,
      category: `${formData.get("category")}`,
      author: `${formData.get("author")}`,
      image: `${imgUrl}`,
      authorImg: `${formData.get("authorImg")}`,
    };

    await BlogModel.create(blogData);
    return NextResponse.json({ success: true, msg: "Blog Created" });
  } catch (error) {
    console.error("❌ Error in POST /api/blog:", error);
    return NextResponse.json(
      { success: false, msg: "Server Error", error: error.message },
      { status: 500 }
    );
  }
}

// Delete Blog endpoint
export async function DELETE(req) {
  const id = await req.nextUrl.searchParams.get("id");
  const blog = await BlogModel.findById(id);
  fs.unlink(`./public${blog.image}`, () => {});
  await BlogModel.findByIdAndDelete(id);

  return NextResponse.json({ msg: "Blog Deleted" });
}
