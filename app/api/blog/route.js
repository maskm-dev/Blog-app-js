const { NextResponse } = require("next/server");

import { connectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { writeFile } from "fs/promises";
import path from "path";

export async function GET(req) {

  const blogs = await BlogModel.find({});

  return NextResponse.json({ blogs });
}

export async function POST(req) {
  try {
    await connectDB();

    const formData = await req.formData();
    const image = formData.get("image");

    if (!image) {
      throw new Error("No image uploaded");
    }

    const buffer = Buffer.from(await image.arrayBuffer());
    const filename = `${Date.now()}_${image.name}`;
    const filepath = path.join(process.cwd(), "public", filename);

    await writeFile(filepath, buffer);

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
