const mongoose = require("mongoose")

const purchaseSchema = new mongoose.Schema({
    finprice:{
        type:String,
        required:true
    },

    quantity:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },

    userId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },

    productId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    }
})

module.exports=new mongoose.model("purchase",purchaseSchema)