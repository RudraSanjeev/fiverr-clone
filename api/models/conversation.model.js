import mongoose from "mongoose";
import { Schema } from "mongoose";

const conversationSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  sellerId: {
    type: String,
    required: true,
  },
  buyerId: {
    type: String,
    required: true,
  },
  readBySeller: {
    type: Boolean,
    required: true,
  },
  readByBuyer: {
    type: Boolean,
    required: true,
  },
  lastMessage: {
    type: String,
    required: false,
  },
});

export default mongoose.model("Conversation", conversationSchema);
