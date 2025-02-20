const purchaseschema = require("./purchaseSchema");

const purchaseProduct = (req, res) => {
  console.log(req.body);

  const purchase = new purchaseschema({
    finprice: req.body.price,
    quantity: req.body.quantity,
    date: new Date(),
    userId: req.body.userId,
    productId: req.body.productId,
  });
  purchase
    .save()
    .then((result) => {
      res.json({
        data: result,
        status: 200,
        msg: "purchase success",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const findPurchase = (req, res) => {
  purchaseschema.find(req.body.id).then((result) => {
    res.json({
      msg: "find successfully",
      data: result,
    });
  })
  .catch((err)=>{
    console.log(err);
    
  })
};

module.exports = {
  purchaseProduct,
  findPurchase,
};
