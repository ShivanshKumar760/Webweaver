import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    date:{
      type: Date,
      default: Date.now
    },
    isBlocked: {
      type: Boolean,
      default: false
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
});

export default userSchema;