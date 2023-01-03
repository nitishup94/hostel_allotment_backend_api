const AdminReg = require('../model/AdminRegister');
//jwt token implimentation
const secretKey="Admin_login_fynd"
//jwt require
const jwt=require('jsonwebtoken');
//password hashing
const bcrypt=require("bcrypt");
//Admin registration functions
const adminregister = async (req, res) => {
    const pass=await bcrypt.hash(req.body.password,10);
    
    const register_data = new AdminReg({

        name: req.body.name,
        mobile: req.body.mobile,
        email: req.body.email,
        password: pass,
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
       
        const admindetails=await AdminReg.find({email:req.body.email})
        if(admindetails.length!=0){
            
           const enter_pass= req.body.pass;
           const databse_pass=admindetails[0].password;
           //verify password
            const verify_pass=await bcrypt.compare(enter_pass,databse_pass);
            if(verify_pass){
                //generate token data
                login_data={email:admindetails[0].email,adminid:admindetails[0]._id};

            jwt.sign({login_data},secretKey,{expiresIn:'8600s'},(err,token)=>{
            res.status(200).json({'token':token,name:admindetails[0].name,college:admindetails[0].college,aid:admindetails[0]._id})
          })

            }else{
                res.status(404).json({'errmsg':'Password Not Matched!'})
            }
        }else{
            res.status(404).json({'errmsg':'User not found!'})
        }
       
    }
    catch(error){
        res.status(400).json({'errmsg':error})
    }
}


//download excel file controller

const download_file = async (req, res) => {
   try{

    const file = `${__dirname}/../download/student.xlsx`;
    res.download(file); 
    
   }
   catch(err){
    res.status(400).send({'errmsg':err});
   }
}

//export admin mopdule

module.exports={
    adminregister,
    adminlogin,
    download_file
  
}
