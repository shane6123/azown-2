const mongoose = require("mongoose");
const property_master_Schema = mongoose.Schema({
    property_id: {
        type: String
    },
    property_user_id: {
        type: String
    },
property_handler_id: {
    type: String
},
property_posted_date: {
    type: String
},
property_is_active: {
    type: Boolean
},
property_post_type: {
    type: String
},
property_total_views: {
    type: Number
},
property_upgraded_view_end_date: {
    type: String
},
});
const Property_Master = new mongoose.model("Property_Master", property_master_Schema);
module.exports = Property_Master;



