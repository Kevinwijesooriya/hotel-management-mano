import mongoose from "mongoose";
const { Schema, model } = mongoose;

const roomSchema = new Schema({
  number: {
    type: Number,
    required: true,
  },
  floor: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["Cleaned", "Not cleaned"],
    default: "Cleaned",
  },
  availability: {
    type: String,
    enum: ["Vacant", "Occupied"],
    default: "Vacant",
  },
  type: {
    type: String,
  },
});

export default model("Room", roomSchema);
