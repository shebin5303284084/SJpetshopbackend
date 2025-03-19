const petProductSchema = require("./petProductSchema.js");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage }).single("image");

const addproduct = (req, res) => {
  let product = new petProductSchema({
    Productname: req.body.Productname,
    // Productdetail:req.body.Productdetail,
    Productcategory: req.body.Productcategory,
    price: req.body.price,
    image: req.file,
  });
  // console.log(req.body);

  product
    .save()
    .then((result) => {
      res.json({
        data: result,
        status: 200,
        mag: "Product Added Succesfully",
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        data: result,
        status: 500,
        msg: "please fill the all the above inputs",
      });

      console.log(err);
      res.json({
        err: err,
      });
    });
};

const findByCategory = (req, res) => {
  console.log(req.body);

  petProductSchema
    .find({ Productcategory: req.body.id })
    .then((result) => {
      res.json({
        msg: "successfully get",
        data: result,
      });
    })
    .catch((err) => {
      res.json({
        err: err,
      });
    });
};

const findById = (req, res) => {
  console.log(req.body);
  petProductSchema
    .findOne({ _id: req.params.id })
    .then((result) => {
      res.json({
        msg: "Id Found Successfully",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const viewAll = (req, res) => {
  petProductSchema
    .find()
    .then((result) => {
      res.json({
        data: result,
        msg: "Product Got Successfully",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteProduct = (req, res) => {
  petProductSchema.findByIdAndDelete({ _id: req.body.id }).then((result) => {
    res.json({
      data: result,
      msg:"product deleted"
    });
  })
  .catch((err)=>{
console.log(err);

  })
};

module.exports = {
  upload,
  addproduct,
  findByCategory,
  findById,
  viewAll,
  deleteProduct
};
