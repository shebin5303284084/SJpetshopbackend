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
    email: req.body.email,
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

const view = (req, res) => {
  userSchema
    .findById(req.params.id)
    .then((result) => {
      res.json({
        msg: "data found sucessfully",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.json({
        msg: "unable to find a user",
      });
    });
};

const updateprofile = (req, res) => {
  userSchema
    .findByIdAndUpdate(req.params.id, {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      city: req.body.city,
      contact: req.body.contact,
      address: req.body.address,
    })
    .then((result) => {
      if (result) {
        res.json({
          msg: "Updated successfully",
          data: result,
          status: 200,
        });
      } else {
        res.json({
          msg: "No changes were made",
          status: 400,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.json({
        msg: "Cannot update user",
        error: err.message,
        status: 500,
      });
    });
};

const getAllusers = (req, res) => {
  userSchema
    .find()
    .then((result) => {
      res.json({
        msg: "user Found",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
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
        msg: "successfully finded",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const ChangePassword = (req, res) => {
  userSchema
    .findOneAndUpdate(
      { email: req.body.email },
      {
        password: req.body.password,
      }
    )
    .then((result) => {
      res.json({
        data: result,
        msg: "password changed Successfully",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteUser = (req, res) => {
  userSchema
    .findByIdAndDelete({
      _id: req.body.id,
    })
    .then((result) => {
      res.json({
        data: result,
        msg: "Deleted",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  userRegistration,
  login,
  Order,
  forgetPassword,
  getAllusers,
  updateprofile,
  view,
  deleteUser,
  ChangePassword
};

///vvgf///
