import bcrypt from "bcryptjs";
import userModel from "../Models/UserModel.js";
import jwt from "jsonwebtoken";

// user register controller
export const userRegisterController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(500).json({
        success: false,
        message: "please provide All fields",
      });
    }
    // check existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(500).send({
        success: false,
        message: "user already exist",
      });
    }
    //  hashed password

    const hashedPassword = await bcrypt.hash(password, 10);

    //  new user
    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).send({
      success: true,
      message: "user register successfuly",
    });
  } catch (error) {
    console.error("Error in register api:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// login controller
export const userLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // find user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "user not exists",
      });
    }
    // match password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(500).send({
        success: false,
        message: "invaild credentical",
      });
    }
    // token

    const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    
     // Set the token in a cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Set to true in production
      sameSite: process.env.NODE_ENV === "production" ? "None" : "strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    // get user
    res.status(200).send({
      success: true,
      message: "login successfuly",
      token,
      user,
    });
  } catch (error) {
    console.error("Error in register api:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// logout controller
export const logoutController = (req, res) => {
  try {
    // Clear the token cookie
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Set to true in production
      sameSite: process.env.NODE_ENV === "production" ? "None" : "strict",
    });

    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Error in logout:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};