const mongoose = require("mongoose");
const property_residential_rent_rrs_Schema = mongoose.Schema({
    rrs_property_id: {
        type: String,
    },
    rrs_detail_description: {
        type: String,
    },
    rrs_detail_app_type: {
        type: String,
    },
    rrs_detail_bhk_type: {
        type: String,
    },
    rrs_detail_floor: {
        type: Number,
    },
    rrs_detail_total_floor: {
        type: Number,
    },
    rrs_detail_floor_type: {
        type: String,
    },
    rrs_detail_kitchen_type: {
        type: String,
    },
    rrs_detail_prop_age: {
        type: Number,
    },
    rrs_detail_facing: {
        type: String,
    },
    rrs_detail_builtup_area: {
        type: String,
    },
    rrs_detail_carpet_area: {
        type: String,
    },
    rrs_detail_furnishing: {
        type: String,
    },
    rrs_detail_parking: {
        type: String,
    },
    rrs_detail_bathroom: {
        type: Number,
    },
    rrs_detail_balcony: {
        type: Number,
    },
    rrs_detail_water_supply: {
        type: String,
    },
    rrs_location_state: {
        type: String,
    },
    rrs_location_city: {
        type: String,
    },
    rrs_location_latitude: {
        type: String,
    },
    rrs_location_longitude: {
        type: String,
    },
    rrs_location_iframe: {
        type: String,
    },

    //   part2
    rrs_resale_detail_exp_price: { type: String },
    rrs_resale_detail_maintenance: { type: String },
    rrs_resale_detail_available_from: { type: String },
    //   part 3
    rrs_amenities_lift: {
        type: Boolean,
    },
    rrs_amenities_ac: {
        type: Boolean,
    },
    rrs_amenities_intercom: {
        type: Boolean,
    },
    rrs_amenities_children_play_area: {
        type: Boolean,
    },
    rrs_amenities_servant_room: {
        type: Boolean,
    },
    rrs_amenities_gas_pipeline: {
        type: Boolean,
    },
    rrs_amenities_rainwater_harvesting: {
        type: Boolean,
    },
    rrs_amenities_housekeepiing: {
        type: Boolean,
    },
    rrs_amenities_visitor_parking: {
        type: Boolean,
    },
    rrs_amenities_internet: {
        type: Boolean,
    },
    rrs_amenities_club_house: {
        type: Boolean,
    },
    rrs_amenities_swimming_pool: {
        type: Boolean,
    },
    rrs_amenities_fire_safety: {
        type: Boolean,
    },
    rrs_amenities_shopping_center: {
        type: Boolean,
    },
    rrs_amenities_park: {
        type: Boolean,
    },
    rrs_amenities_sewage_treatment: {
        type: Boolean,
    },
    rrs_amenities_power_backup: {
        type: Boolean,
    },
    rrs_amenities_gated_security: {
        type: Boolean,
    },
    rrs_amenities_gym: {
        type: Boolean,
    },

    // part 4
    rrs_info_prop_tax_is_paid: {
        type: Boolean,
    },

    rrs_info_occupany_certificate_available: {
        type: Boolean,
    },

    rss_info_deed_certificate_is_available: {
        type: Boolean,
    },
});
const property_residential_rent_rrs = new mongoose.model(
    "property_residential_rent_rrs",
    property_residential_rent_rrs_Schema
);
module.exports = property_residential_rent_rrs;
