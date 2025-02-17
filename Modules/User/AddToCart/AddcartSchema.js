const mongoose =require("mongoose")

const AddCartSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    }
})

module.exports-new mongoose.model("Cart",AddCartSchema)