const expres = require('express')
const router = expres.Router()
const userModel = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.get('/register', (req, res) => {

     res.render('index')
})

router.post("/register", async (req, res) => {
    const { username, email, password } = req.body
    
    const hashpassword = await bcrypt.hash(password, 10)


  userModel
    .create({ username, email, password: hashpassword })
    .then((data) => {
        console.log(data)
        res.send("success")
       res.redirect("/user/login")
    })
    .catch((err) => {
      console.log(err)
    })

})

router.get("/login", (req, res) => {
    res.render("login")
})


router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) return res.status(404).send("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send("Invalid password");

    const token = jwt.sign({ user_id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1d", // token valid for 1 day
    });

    // ✅ Set token in cookie
    res.cookie("token", token, {
      httpOnly: true, // prevents JavaScript access (security)
      secure: false,  // set true if using HTTPS
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    return res.status(200).send({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});


module.exports = router