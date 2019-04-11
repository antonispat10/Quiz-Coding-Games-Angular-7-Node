const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  name: { type: String, required: true },
  choices: { type: Array, required: false },
  answer: { type: String, required: true},
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true }
});

module.exports = mongoose.model("Question", questionSchema);
