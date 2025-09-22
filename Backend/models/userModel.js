import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number },
  gender: { type: String },
  avatar: { type: String }, // avatar file path
  notes: [{ type: String }], // personal notes
  reminders: [{ type: String }], // lifestyle reminders
});

const User = mongoose.model("User", userSchema);
export default User;


