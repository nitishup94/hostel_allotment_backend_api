const StudentReg = require('../model/StudentRegister');

//Admin registration functions
const studentregister = async (req, res) => {
    const register_data = new StudentReg({
        studentid:req.body.studentid,
        name: req.body.name,
        fathername: req.body.fathername,
        email: req.body.email,
        branch: req.body.branch,
        fee_date: req.body.date,
        collegeid:req.body.collegeid,
        password:req.body.pass,
    });
   try{
    const postdetails=await register_data.save();
    
    res.json(postdetails);
    
   }
   catch(err){
    res.status(400).send({'errmsg':err});
   }
}

module.exports={
    studentregister,
}