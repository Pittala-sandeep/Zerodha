const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type:String,
        required:[true, "Username is Required"],
    },
    email:{
        type:String,
        required:[true, "Email is Required"],
    },
    password:{
        type:String,
        required:[true, "Password is Required"],
    },
    createdAt:{
        type:Date,

        default:new Date(),
    },

})

userSchema.pre("save", async function(next){
    this.password = await bcrypt.hash(this.password, 12);
    next();
})

module.exports = mongoose.model("User", userSchema)