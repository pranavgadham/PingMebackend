import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
  },
  room: {
    type: mongoose.Types.ObjectId,
    ref: 'Messages'
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export { messageSchema };
