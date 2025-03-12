const userSchema = require("./userSchema");

let userRegistration = (req, res) => {
  console.log(req.body);

  let user = new userSchema({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    city: req.body.city,
    state: req.body.state,
    dateofbirth: req.body.dateofbirth,
    address: req.body.address,
    pincode: req.body.pincode,
    contact: req.body.contact,
    gender: req.body.gender,
    password: req.body.password,
    email:req.body.email
  });
  user
    .save()
    .then((result) => {
      res.json({
        status: 200,
        msg: "sucessfully registered",
        data: result,
      });
    })

    .catch((error) => {
      res.json({
        error: error,
      });
    });
};

const login = (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  userSchema
    .findOne({ email: email })
    .then((result) => {
      console.log(result);

      if (password == result.password) {
        res.json({
          status: 200,
          msg: "logged in success",
          data: result,
        });
      } else {
        res.json({
          status: 400,
          msg: "Incorrect Password",
        });
      }
    })
    .catch((err) => {
      res.json({
        status: 400,
        msg: "user not found",
      });
    });
};

const Order = (req, res) => {
  userSchema
    .findById({
      _id: req.params.id,
    })
    .then((result) => {
      res.json({
        msg: "Get Users Details Sucessfully",
        data: result,
        status: 200,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

const forgetPassword = (req, res) => {
  userSchema
    .findOne({ email: req.body.email })
    .then((data) => {
      if (!data) {
        return res.json({
          status: 404,
          msg: "USER DOESNOT EXIST",
        });
      }
      return res.status(200).json({
        data,
        msg:'success'
      })
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  userRegistration,
  login,
  Order,
  forgetPassword
};
