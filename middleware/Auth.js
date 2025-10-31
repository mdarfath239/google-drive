const jwt = require("jsonwebtoken")
const userModel = require("../models/User")

async function Auth(req,res,next){
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({error:"Unauthorized"})
    }
    const decoded = jwt.verify(token,process.env.SECRET_KEY)
    console.log("decoded",decoded)

    const user = await userModel.findById(decoded.user_id)
    if(!user){
        return res.status(401).json({error:"Unauthorized"})
    }
    req.User = user


    next()
}

module.exports = Auth