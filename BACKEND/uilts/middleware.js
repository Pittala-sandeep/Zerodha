const ExpressError = require("./ExpressError.js")
const {userSchema} = require("./SchemaErrHandler.js")

module.exports.validateUser = (req, res, next) =>{
    let { error } = userSchema.validate(req.body);
    if(error){
        let errmsg = error.details.map((el) => el.message).join(",")
        throw new ExpressError(400,errmsg)
    } else{
        next();
    }
}