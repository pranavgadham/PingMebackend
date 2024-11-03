import mongoose from "mongoose";
import userSchema from "./users.Schema.js";
import { comparePassword, hashPassword } from "../../util/hashPassword.js";

const userModel = mongoose.model('Users',userSchema);

export class userRepository {
  createUser = async (name, password, profilePhoto) => {
    try {
      const user = new userModel({
        name: name,
        profilePhoto: profilePhoto,
        password: await hashPassword(password),
      });
      if (user) {
        return await user.save();
      }
    } catch (error) {
      throw error;
    }
  };

  verifyUser = async (name, password) => {
    try {
      const user = await userModel.findOne(name);
      if (await comparePassword(user.password, password)) {
        return user;
      }
      return null;
    } catch (error) {
      throw error;
    }
  };

  getUserById = async (id) => {
    try {
      const user = await userModel.findById(id);
      if(user){
        return user;
      }
      return null;       
    } catch (error) {
      throw error
    }
  }

}
