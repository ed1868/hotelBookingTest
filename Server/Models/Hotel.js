const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hotelSchema = new Schema(
  {
    hotelName: { type: String},
    hotelAddress: { type: String },
    hotelRooms: { type: Array },
    cancelationPolicy: { type: String },
    hotelTax: { type: String },
    hotelFee: { type: String },
    description: { type: String},
    imgName: String,
    website: String,
    availability: {
      type: String,
      enum: ["AVAILABLE", "ON REQUEST", "SOLD OUT"]
    },
    rate: {
      type: Number,
      enum: [0, 1, 2, 3, 4, 5],
      default: 5
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
