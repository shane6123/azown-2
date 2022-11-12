require("dotenv").config();
const express = require("express");
const PORT =3001
const app = express();
const path = require("path");
const bodyParser= require("body-parser")
require("./db/connect");
// const user = require("./model/user");
// const user_data = require("./model/user_data");
const admin = require("./model/admin")
// const property = require("./model/property_residential_rent_rr ");
const property_rr = require("./model/property_residential_rent_rr")

// routes
const userRoutes = require("./routes/user")

// middle
// app.use(express.json());
// app.use(express.urlencoded({extended:false}))
// app.use(express.bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
// app.set("views", path.join(__dirname, "template/views"));
// hbs.registerPartials(path.join(__dirname, "template/partials"));
app.set("view engine", "ejs");

app.use("/api/users",userRoutes)
app.post("/image",(req,res)=>{
  console.log(req.file)
  res.send("succ...")
})
app.get("/login",(req,res)=>{
  res.render("login")
})
app.get("/admin_panel",(req,res)=>{
  res.render("admin_panel")
})
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/createproperty",(req,res)=>{
  res.render("createproperty")
})
app.get("/residentialRent",(req,res)=>{
  res.render("residentialRent")
})
app.post("/rr-property",(req,res)=>{
  try{
    console.log(req.body);
    res.send("success...")
  }catch{
    console.log("error");
  }
})
app.post("/rr-data",(req,res)=>{
  try{
    const newprop = new property_rr(req.body)
    newprop.save()
    console.log(req.body);
    res.send("success...")
  }catch{
    console.log("error");
  }
})
app.post("/rr-amenity",(req,res)=>{
  try{
    console.log(req.body);
    res.send("success...")
  }catch{
    console.log("error");
  }
})
app.post("/rr-locality",(req,res)=>{
  try{
    console.log(req.body);
    res.send("success...")
  }catch{
    console.log("error");
  }
})
// app.get("/login", (req, res) => {
//   res.render("login");
// });
// app.get("/register", (req, res) => {
//   res.render("register");
// });
// app.post("/register",(req,res)=>{
//     // console.log("regitser");
// // console.log(req.body);
// const newUser = new user(req.body)
// newUser.save()
// res.send("success...")
// })
// app.post("/login",async(req,res)=>{
// const email= req.body.email
// const password = req.body.password
//  const newdata= await user.findOne({ email})
//  try{
//     if (newdata.password===password){
//         res.send("success...")
//      }else{
//     res.send("unauthorise..")
//      }
//  }catch{
//     res.send("error")
//  }
// })
// app.post("/user", (req, res) => {
//     console.log(req.body);
//     const data = new user_data(req.body)
//     data.save()
  
//   res.send("suc....")
// });
// // console.log(new Date().getTime());
// app.get("/admin",(req,res)=>{
//     res.render("admin_login")
// })
// app.post("/admin",async(req,res)=>{
//     const admin_email = req.body.admin_email
//     const password = req.body.password
//    try{
//     const finddata=await admin.findOne({admin_email})
//     if (finddata.password===password){
// res.render("index")
//     }else{
//         res.send("user unauthorised..")
//     }
//    }catch{
//     res.send("error")
//    }
   
// })
// app.post("/property", async (req, res) => {
//   const _id = req.body.user_id;
//   const p_id = new Date().getTime();
//   const property_data = new property({
//     p_id: p_id,
//     property_name: req.body.property_name,
//     property_type: req.body.property_type,
//   });
//   user.findOneAndUpdate({ _id }, { $push: { p_id: p_id } }, (err) => {
//     if (!err) {
//       console.log("success");
//     }
//   });
//   property_data.save();
//   res.send("suc..");
// });
app.listen(PORT, () => {
  console.log(`Server is run on ${PORT}`);
});
