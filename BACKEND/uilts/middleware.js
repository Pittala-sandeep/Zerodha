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

module.exports.userVerification = (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.json({ success: false });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ success: false });
    } else {
      const user = await User.findById(data.id);
      if (user) return res.json({ success: true, user });
      else return res.json({ success: false });
    }
  });
}