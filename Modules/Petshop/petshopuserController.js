
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
 
const findshopregister=((req,res)=>{
    petshopSchema.find({status:"pending"})
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


const acceptshopReq=((req,res)=>{
    petshopSchema.findByIdAndUpdate({_id:req.params.id},{status:"accept"})
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

const rejectshopReq=((req,res)=>{
    petshopSchema.findByIdAndUpdate({_id:req.params.id},{status:"reject"})
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
    findshopregister,
    acceptshopReq,
    rejectshopReq
};
