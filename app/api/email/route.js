import { connectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

const LoadDB = async () => {
  await connectDB();
};
LoadDB();

export async function POST(req) {
  try {
    const formData = await req.formData();
    const emailValue = formData.get("email"); // ← ดึงค่า email จาก formData

    // ตรวจสอบว่า email ไม่ null หรือ undefined
    if (!emailValue) {
      return NextResponse.json(
        { success: false, msg: "Email is required" },
        { status: 400 }
      );
    }

    // สร้าง document ใหม่ใน DB
    await EmailModel.create({ email: emailValue });

    return NextResponse.json({ success: true, msg: "Email Subscribed" });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { success: false, msg: "Failed to subscribe email" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const emails = await EmailModel.find({});
    return NextResponse.json({ emails });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { success: false, msg: "Failed to fetch emails" },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  const id = await req.nextUrl.searchParams.get("id");
  await EmailModel.findByIdAndDelete(id);

  return NextResponse.json({ success: true, msg: "Email Deleted" });
}
