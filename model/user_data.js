const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    user_id: {
        type: String,
    },
    user_name: {
        type: String,
    },
    user_email: {
        type: String,
    },
    user_number:{
type:Number
    },
    user_password: {
        type: String,
    },
    user_image:{
        type:String
    },
    user_details:{
        type:String
    },
    user_type:{
        type:String
    },
    user_is_blocked:{
        type:Boolean
    }
});
const user_data = new mongoose.model("userdata", userSchema);
module.exports = user_data;



