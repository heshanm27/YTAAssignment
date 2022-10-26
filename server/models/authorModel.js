const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
  firstName: { type: String, required: [true, "First name is required"] },
  lastName: { type: String, required: [true, "Last name is required"] },
});

module.exports = mongoose.model("Author", authorSchema);
