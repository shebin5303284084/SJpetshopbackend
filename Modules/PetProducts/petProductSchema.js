const mongoose = require("mongoose");

const petProductSchema = new mongoose.Schema({
 Productname: { type: String, required: true },
 Productcategory: { type: String, required: true },
//  Productdetail:{type:String,required:true},
  price:{type:String,required:true},
  image: { type: Object, required: true },
  // IsActivate: {
  //   type: Boolean,
  //   default: false,
  // },
});

module.exports=mongoose.model("product",petProductSchema)