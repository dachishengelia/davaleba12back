import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import postRoutes from "./routes/postRoutes.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); 


app.get("/", (req, res) => {
  res.send("Server is ready");
});


app.use("/api/posts", postRoutes);


mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
