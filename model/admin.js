const mongoose = require("mongoose");
const adminSchema = mongoose.Schema({
    // admin_name: {
    //     type: String,
    // },
    admin_email: {
        type: String,
    },
    password: {
        type: String,
    },      
});
const admin = new mongoose.model("admin", adminSchema);
module.exports = admin;



