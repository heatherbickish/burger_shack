import { Schema } from "mongoose";

export const BurgerSchema = new Schema({
  name: { type: String, maxlength: 100, minlength: 2, required: true },
  price: { type: Number, max: 1000, min: 1, required: true }
})