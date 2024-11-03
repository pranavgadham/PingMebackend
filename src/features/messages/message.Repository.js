import mongoose from "mongoose";
import { messageSchema } from "./message.Schema";

const messageModel = mongoose.model('Messages',messageSchema);

export class messageRepository{
    createMessage = async (userId,message) => {
        try {
            const newMessage = new messageModel({
                user: userId,
                message: message
            });
            if(newMessage){
                return await newMessage.save();
            }
        } catch (error) {
            throw error;
        }
    }
}