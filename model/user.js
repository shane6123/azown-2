const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    cpassword:{
        type:String
    }
    
});
const User = new mongoose.model("users", userSchema);
module.exports = User;



