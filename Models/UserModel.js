import mongoose from "mongoose"

// schema
const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
},{timestamps:true});

const userModel = mongoose.model('users',userSchema)

export default userModel