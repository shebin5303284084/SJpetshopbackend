
const petshopSchema = require("./petshopSchema");

const petshopRegister = (req, res) => {
    let petuser = new petshopSchema({
        firstname: req.body.firstname,   
        lastname:req.body.lastname,
        email:req.body.email,
        shopcode:req.body.shopcode,  
        city: req.body.city,               
        state: req.body.state,
        password:req.body.password,
        confirmpassword:req.body.confirmpassword   

    });

    petuser.save()
        .then((result) => {
            res.json({
                status:200,
                msg: "successfully registered",
                data: result
            });
        })
        .catch((error) => {
            res.json({
                err: error
            });
        });



};
 
let findshopregister=((req,res)=>{
    petshopSchema.find({status:false})
    .then((result)=>{
        res.json({
            msg:"accept user",
            data:result
        })
    })
    .catch((error)=>{
        res.json({
            err:"error"
        })

    })

})

module.exports = {
    petshopRegister,
    findshopregister
};
