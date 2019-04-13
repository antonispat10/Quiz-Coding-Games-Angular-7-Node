const mongoose = require("mongoose");

const quizSchema = mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  link: { type: String, required: true },
  result: { type: Number, required: false },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true }
});

module.exports = mongoose.model("Quiz", quizSchema);
