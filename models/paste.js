const mongoose = require("mongoose");

const pasteSchema = new mongoose.Schema({
  html: {
    type: String,
  },
  css: {
    type: String,
  },
  javascript: {
    type: String,
  },
});

const Paste = mongoose.model("Paste", pasteSchema);

module.exports = Paste;