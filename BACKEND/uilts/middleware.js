require("dotenv").config();
const ExpressError = require("./ExpressError.js")
const {userSchema} = require("./SchemaErrHandler.js")
const User = require("../models/Users.js");
const jwt = require("jsonwebtoken");

module.exports.validateUser = (req, res, next) =>{
    let { error } = userSchema.validate(req.body);
    if(error){
        let errmsg = error.details.map((el) => el.message).join(",")
        throw new ExpressError(400,errmsg)
    } else{
        next();
    }
}

module.exports.userVerification = async (req, res) => {
  const token = req.cookies.token;

  if(!token){
    return res.status(401).json({success:false, message:"Unauthorized: No token in cookie"});
  }

  try{
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    return res.json({ success: true, user });
  } catch (err) {
    return res.status(401).json({ success: false, message: "Unauthorized: Invalid token" });
  }
}