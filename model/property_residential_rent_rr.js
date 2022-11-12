const mongoose = require("mongoose");
const property_residential_rent_rr_Schema = mongoose.Schema({
  rr_property_id:{
    type:String
  },
rr_detail_description:{
  type:String
},
rr_detail_app_type :{
  type:String
},
rr_detail_bhk_type  :{
  type:String
},
rr_detail_floor :{
  type:Number
},
rr_detail_total_floor  :{
  type:Number
},
rr_detail_floor_type :{
  type:String
},
rr_detail_kitchen_type:{
  type:String
},
rr_detail_prop_age  :{
  type:Number
},
rr_detail_facing :{
  type:String
},
rr_detail_builtup_area :{
  type:String
},
rr_detail_carpet_area :{
  type:String
},
rr_detail_furnishing :{
  type:String
},
rr_detail_parking :{
  type:String
},
rr_detail_bathroom  :{
  type:Number
},
rr_detail_balcony  :{
  type:Number
},
rr_detail_water_supply :{
  type:String
},
rr_location_state:{
    type:String
  },
rr_location_city:{
    type:String
  },
rr_location_latitude:{
    type:String
  },
rr_location_longitude:{
    type:String
  },
rr_location_iframe:{
    type:String
  },
  rr_rental_detail_rent:{
    type:String
  }, 
rr_rental_detail_exp_deposit:{
    type:String
  },
rr_rental_detail_is_nogotiable :{
    type:String
  },
rr_rental_detail_monthly_maintenance:{
    type:String
  },
rr_rental_detail_avail_from :{
    type:String
  },
rr_rental_detail_pref_tenent :{
    type:String
  },
rr_rental_detail_is_allowed_nonveg :{
    type:String
  },
rr_rental_detail_shown_by :{
    type:String
  },
rr_rental_detail_shown_by_number:{
    type:Number
  },
  rr_amenities_lift :{
    type:String
  },
rr_amenities_ac :{
    type:String
},
rr_amenities_intercom :{
    type:String
},
rr_amenities_children_play_area :{
    type:String
},
rr_amenities_servant_room :{
    type:String
},
rr_amenities_gas_pipeline :{
    type:String
},
rr_amenities_rainwater_harvesting :{
    type:String
},
rr_amenities_housekeepiing :{
    type:String
},
rr_amenities_visitor_parking :{
    type:String
},
rr_amenities_internet :{
    type:String
},
rr_amenities_club_house :{
    type:String
},
rr_amenities_swimming_pool :{
    type:String
},
rr_amenities_fire_safety :{
    type:String
},
rr_amenities_shopping_center :{
    type:String
},
rr_amenities_park :{
    type:String
},
rr_amenities_sewage_treatment :{
    type:String
},
rr_amenities_power_backup :{
    type:String
},
rr_amenities_gated_security :{
    type:String
},
rr_amenities_gym :{
    type:String
},

  });
const property_residential_rent_rr = new mongoose.model("property_residential_rent_rr", property_residential_rent_rr_Schema);
module.exports = property_residential_rent_rr;