const mongoose = require("mongoose");

const solvedSchema = new mongoose.Schema({
    p_number: Number,
    p_title: String,
    p_tier: String,
    p_solved_time: String,
});

const Solved = mongoose.model("Solved", solvedSchema);

module.exports = Solved;
