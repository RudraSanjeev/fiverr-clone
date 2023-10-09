import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import gigRoute from "./routes/gig.route";
import orderRoute from "./routes/order.route";
import conversationRoute from "./routes/conversation.route";
import reviewRoute from "./routes/review.route";
import messageRoute from "./routes/message.route";
import authRoute from "./routes/auth.route";
import userRoute from "./routes/user.route";

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("mongod connected successfully..."))
  .catch((err) =>
    console.log("error occured while connecting to mongodb " + err)
  );

app.use("/api/auth", authRoute);
app.use("/api/order", orderRoute);
app.use("/api/review", reviewRoute);
app.use("/api/user", userRoute);
app.use("/api/conversation", conversationRoute);
app.use("/api/message", messageRoute);

app.listen(8000, () => {
  console.log("Backend is running at port 8000");
});
