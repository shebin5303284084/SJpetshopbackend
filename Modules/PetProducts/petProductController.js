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
const upload=multer({storage:storage}).single("image")

const addproduct =(req,res)=>{
    let product = new petProductSchema({
        productname:req.body.productname,
        productcategory:req.body.productcategory,
        image: req.file
    })
    // console.log(req.body);
    
    product
    .save()
    .then((result)=>{
        res.json({
            data:result,
            status:200,
            mag:"Product Added Succesfully"
 
        })
        
    })
    .catch((err)=>{
        console.log(err);   
        res.json({
          data:result,
          status:500,
          msg:"please fill the all the above inputs"
        })    
    })
}

module.exports={
    upload,
    addproduct
}
