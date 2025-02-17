const AddCartSchemas = require("./AddcartSchema");

const AddCart=((req,res) => {

  let Cart = new AddCartSchemas({
    userId:req.body.userId,
    productId:req.body.productId
  });
  console.log(req.body);
  Cart.save()
  .then((result)=>{
    res.json({
        msg:"save",
        data:result
    })
  })
  .catch((err)=>{
    res.json({
        err:err
    })
    console.log(err);    
  })
});

const findCart=(req,res)=>{
    AddCartSchemas
    .find({})
    .populate('userId productId')
    .then((result)=>{
      res.json({
        msg:"success",
        data:result
      })
    })
}

module.exports={
    AddCart,findCart
}
