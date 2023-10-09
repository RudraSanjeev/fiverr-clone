import User from "../models/user.model";
import CryptoJS from "crypto-js";

export const register = async (req, res) => {
  try {
    const newUser = new User({});
    // const {password} = newUser
    const hashPassword = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.CRYPTO_SEC
    );
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(503).json("Error occured: " + err);
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.username });
    !user && res.status(403).json("User not found");
  } catch (err) {
    res.status(503).json("Error occured: " + err);
  }
};
