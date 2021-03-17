import * as mongoose from "mongoose";

export const LookseeSchema = new mongoose.Schema({
  id: Number,
  name: String,
  quantity: Number
})