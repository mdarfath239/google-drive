const express = require('express')
const router = express.Router()
const imageModel = require('../models/Image')
const multer = require("multer");
const authmiddleware = require("../middleware/Auth")

const {createImage} = require("./upload.route")
const storage = multer.memoryStorage();
const upload = multer({ storage });


router.get('/home',authmiddleware ,async(req, res) => {
    const userimage = await imageModel.find({userId:req.user_id})
console.log(userimage)
    res.render('home',{files:userimage})
})

router.post("/upload",authmiddleware, upload.single("file"), createImage);

module.exports = router