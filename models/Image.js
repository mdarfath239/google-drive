const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    fileName: { type: String, required: true },
    imageUrl: { type: String, required: true },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Image", imageSchema);
