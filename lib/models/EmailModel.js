import mongoose from "mongoose";

const emailSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now },
});

// ใช้ pattern นี้เพื่อป้องกันการ overwrite model
const EmailModel =
  mongoose.models.Email || mongoose.model("Email", emailSchema);

export default EmailModel;
