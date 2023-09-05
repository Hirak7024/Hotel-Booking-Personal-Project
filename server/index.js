import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import roomsRoute from "./Routes/room.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 8000;

mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to Mongo DB");
  })
  .catch((err) => {
    console.log(err.message);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected!");
  });

  app.get("/", (req,res)=>{
    res.send("Heyy This is the Backend PORT for HOTELY");
  })

  //MIDDLEWARE
  app.use("/api/rooms", roomsRoute);

  app.listen(PORT, () => {
    console.log(`Server connected to port ${PORT}`);
  });