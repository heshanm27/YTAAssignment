const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: { type: String, required: [true, "Title is required"] },
  isbn: { type: String, unique: true, required: [true, "ISBN is required"] },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: [true, "Author is required"],
  },
});

module.exports = mongoose.model("Book", bookSchema);
