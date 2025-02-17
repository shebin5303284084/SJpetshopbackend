
const petshopSchema = require("./petshopSchema");

const petshopRegister = (req, res) => {
  let petuser = new petshopSchema({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    shopcode: req.body.shopcode,
    city: req.body.city,
    state: req.body.state,
    address: req.body.address,
    contact: req.body.contact,
    password: req.body.password,
    confirmpassword: req.body.confirmpassword,
  });

  petuser
    .save()
    .then((result) => {
      res.json({
        status: 200,
        msg: "successfully registered",
        data: result,
      });
    })
    .catch((error) => {
      res.json({
        err: error,
      });
    });
};

const findshopregister = (req, res) => {
  petshopSchema
    .find({ status: "pending" })
    .then((result) => {
      res.json({
        msg: "accept user",
        data: result,
      });
    })
    .catch((error) => {
      res.json({
        err: "error",
      });
    });
};

const acceptshopReq = (req, res) => {
  petshopSchema
    .findByIdAndUpdate({ _id: req.params.id }, { status: "accept" })
    .then((result) => {
      res.json({
        msg: "accept user",
        data: result,
      });
    })
    .catch((error) => {
      console.log(error);

      res.json({
        err: "error",
      });
    });
};

const rejectshopReq = (req, res) => {
  petshopSchema
    .findByIdAndUpdate({ _id: req.params.id }, { status: "reject" })
    .then((result) => {
      res.json({
        msg: "reject user",
        data: result,
      });
    })
    .catch((error) => {
      console.log(error);

      res.json({
        err: "error",
      });
    });
};

const petlogin = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
    console.log(req.body);
    petshopSchema
    .findOne({ email: email })
    .then((result) => {
      console.log(result);
      if(result.status==="pending"){
        res.json({
            status:404,
            msg:"Please Take Approval from admin"
        })
      }
      else if (result.status==="reject") {
        res.json({
          status: 500,
          msg: "Admin Reject your",
        });
      }

      else if (password === result.password) {
        res.json({
          status: 200,
          msg: "logged in successfull",
        });
      }
       else {
        res.json({
          status: 504,
          mag: "Login failed",
        });
      }
    })
    .catch((err) => {
        console.log(err);
        
      res.json({
        status: 404,
        msg:err,
      });
    });
};

module.exports = {
  petshopRegister,
  findshopregister,
  acceptshopReq,
  rejectshopReq,
  petlogin,
};
