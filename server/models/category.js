const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: { type: String, required: true },
  logo: { type: String, required: true},
  filePath: { type: String, required: true },
});

module.exports = mongoose.model("Category", categorySchema);
