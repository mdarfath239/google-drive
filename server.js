const dotenv = require('dotenv')
dotenv.config()
const cookieParser = require('cookie-parser')
const express = require('express')
const userRoute = require('./routes/user.route')
const connectDB = require('./config/db.js')
const userhome = require('./routes/home.route')


const app = express()
const port = 3000
app.set('view engine', 'ejs')
app.use(cookieParser())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use("/user", userRoute)
app.use("/",userhome)
connectDB()
app.get("/", (req, res) => {
    res.send("Hello World!")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
