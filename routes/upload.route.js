const Image = require("../models/Image");
const storageService = require("../services/Storage.service");
const { v4: uuidv4 } = require("uuid");

async function createImage(req, res) {
  try {
    console.log("Body:", req.body);
    console.log("File:", req.file);

    // Upload the image using your custom storage service
    const fileUpload = await storageService.uploadImage(req.file.buffer, uuidv4());

    // Create the MongoDB document
    const imageItem = await Image.create({
      fileName: req.body.fileName || req.file.originalname,
      imageUrl: fileUpload.url,
      uploadedBy: req.body.userId || req.user?._id,
    });

    res.status(201).json({
      message: "✅ Image uploaded successfully",
      image: imageItem,
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: "Image upload failed" });
  }
}

module.exports = { createImage };
