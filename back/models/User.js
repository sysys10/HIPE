const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  boj_id: String,
  name: String,
  tier: String,
  streak: Number,
  solved: Number,
  rating: Number,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
