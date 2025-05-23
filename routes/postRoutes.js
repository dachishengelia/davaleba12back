const express = require("express");
const router = express.Router();
const Post = require("../models/Post");


router.post("/", async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const newPost = new Post({ title, content, author });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.put("/:id", async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    res.json(updatedPost);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.delete("/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
