import mongoose from "mongoose";
const subTodo = new mongoose.Schema(

  { timestamps: true }
);
export const SubTodo = mongoose.model("SubTodo", subTodo);
