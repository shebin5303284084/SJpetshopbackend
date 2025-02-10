const mongoose = require("mongoose");

const petProductSchema = new mongoose.Schema({
  productname: { type: String, required: true },
  productcategory: { type: String, required: true },
  image: { type: Object, required: true },
  // IsActivate: {
  //   type: Boolean,
  //   default: false,
  // },
});

module.exports=mongoose.model("product",petProductSchema)