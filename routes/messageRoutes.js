import express from "express";

const router = express.Router();

router.get("/message", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

export default router;
