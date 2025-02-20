const AddCartSchemas = require("./AddcartSchema");

const AddCart = (req, res) => {
  let Cart = new AddCartSchemas({
    userId: req.body.userId,
    productId: req.body.productId,
  });
  console.log(req.body);
  Cart.save()
    .then((result) => {
      res.json({
        status: 200,
        msg: "save",
        data: result,
      });
    })
    .catch((err) => {
      res.json({
        err: err,
      });
      console.log(err);
    });
};

const findCart = (req, res) => {
  AddCartSchemas.find({userId:req.params.id})
    .populate("userId productId")
    .then((result) => {
      res.json({
        msg: "Find Successfully",
        data: result,
      });
    });
};

const deleteCart = (req, res) => {
  AddCartSchemas.findByIdAndDelete({ _id: req.body.id })
    .then((result) => {
      res.json({
        status: 200,
        data: result,
        msg: "Product Delete Successfully",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  AddCart,
  findCart,
  deleteCart,
};
