import mongoose from "mongoose";
const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: Number,
      required: true,
      unique: true,
    },
    degrees: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
