const mongoose = require("mongoose")
const connect="mongodb+srv://shane6123:shane6123@cluster0.jx2dhyr.mongodb.net/Azown"
// const connect ="mongodb+srv://azown:Azown12345@cluster0.fkcjj3d.mongodb.net/Azown"

mongoose.connect(connect, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("db connected....");
  }
});