//importing modules
import mongoose, { Schema, model } from "mongoose";
import Joi, { number } from "joi";
import { IUser } from "../Interfaces/IUser";
//validation schema
export const UserschemaValidate = Joi.object({
  nombre: Joi.string().required(),
  correo: Joi.string().required(),
  edad:Joi.number().required().default(0).min(0).max(Infinity),
});

//Postschema
const userSchema = new Schema<IUser>({
  nombre: {
    type: String,
  },

  correo: {
    type: String,
    required: true,
  },

  edad: {
    type: Number,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

userSchema.index({ nombre: "text", correo: "text" });

//creating a model
export const User = mongoose.model<IUser>("User", userSchema);
User.createIndexes();
