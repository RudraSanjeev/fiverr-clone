import express from "express";

const router = express.Router();

// register
router.post("/register", register);
// login
router.post("/login", login);
// logout
router.post("/logout", logout);
