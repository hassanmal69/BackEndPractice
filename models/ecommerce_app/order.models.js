import mongoose from "mongoose";
const orderItemsSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  itemsQuantity: {
    required: true,
    type: Number,
  },
});
const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customerName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    customerEmail: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderItems: {
      type: [orderItemsSchema],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Completed", "Canceled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);
export const Order = mongoose.model("Order", orderSchema);
