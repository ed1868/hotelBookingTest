const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hotelSchema = new Schema(
  {
    hotelName: { type: String, required: true },
    hotelAddress: { type: String, required: true },
    hotelRooms: { type: Array, required: true },
    cancelationPolicy: { type: String, required: true },
    hotelTax: { type: String, required: true },
    hotelFee: { type: String },
    description: { type: String, required: true },
    imgName: String,
    website: String,
    availability: {
      type: Number,
      enum: ["AVAILABLE", "ON REQUEST", "SOLD OUT"]
    },
    rate: {
      type: Number,
      enum: [0, 1, 2, 3, 4, 5],
      default: 0
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;
