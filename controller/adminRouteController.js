const AdminReg = require('../model/AdminRegister');

//Admin registration functions
const adminregister = async (req, res) => {
    const register_data = new AdminReg({

        name: req.body.name,
        mobile: req.body.mobile,
        email: req.body.email,
        password: req.body.password,
        college: req.body.college,
        
    });
   try{
    const postdetails=await register_data.save();
    
    res.json(postdetails);
    
   }
   catch(err){
    res.status(400).send({'errmsg':err});
   }
}

//admin login function
const adminlogin =async (req,res)=>{
    try {
        const admindetails=await AdminReg.find({email:req.body.email,password:req.body.pass})
        if(admindetails.length!=0){
            res.status(200).json(admindetails)
        }else{
            res.status(404).json({'errmsg':'User not found!'})
        }
       
    }
    catch(error){
        res.status(400).json({'errmsg':error})
    }
}

//export admin mopdule

module.exports={
    adminregister,
    adminlogin,
  
}
