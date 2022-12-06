const Studentdata = require('../model/StudentRegister');


//student login controller
const studentlogin =async (req,res)=>{
  try {
      const studentdetails=await Studentdata.find({email:req.body.email,password:req.body.pass})
      if(studentdetails.length!=0){
          res.status(200).json(studentdetails)
      }else{
             console.log()
          res.status(404).json({'errmsg':'User not found!'})
      }
  }
  catch(error){
      res.status(400).json({'errmsg':error})
  }
}



//update student room  data 
const room_update = async (req, res) => {
    try {
        const room_data = {
            rooms: req.body.rooms,
            status: req.body.status,
        };
        const updateroom= await Studentdata.findOneAndUpdate(
          { email: req.params.email },
          room_data
        );
        res.json(updateroom);
      } catch (error) {
        res.json({ message: error });
      }
}


//get student email for allotment start
const fetchstudent =async (req,res)=>{
  try {
  const reqstudent=await Studentdata.find({collegeid:req.params.uid,status:{$eq:0}},{email:1,_id:0});
     res.status(200).json(reqstudent)
  }
  catch(error){
      res.status(400).json({'errmsg':error})
  }
}


//get student name,branch,alloted room
const allotedstudent =async (req,res)=>{
  try {
  const req_alloted_student=await Studentdata.find({collegeid:req.params.uid,status:{$eq:1}},{name:1,branch:1,rooms:1,email:1,password:1,_id:0}).sort({rooms:1});
     res.status(200).json(req_alloted_student)
  }
  catch(error){
      res.status(400).json({'errmsg':error})
  }
}


//get student name,branch,not alloted room
const not_allotedstudent =async (req,res)=>{
  try {
  const req_not_alloted=await Studentdata.find({collegeid:req.params.uid,status:{$eq:0}},{name:1,branch:1,rooms:1,email:1,_id:0}).sort({name:1});
     res.status(200).json(req_not_alloted)
  }
  catch(error){
      res.status(400).json({'errmsg':error})
  }
}



//delete all students 
const admin_delete=async (req,res)=>{
  try {
     const deleteadmin=await Studentdata.deleteMany({collegeid:req.params.clgid})
     res.json(deleteadmin)
  }
  catch(error){
      res.json({Showmessage:error});
  }
}


module.exports={
    studentlogin,
    room_update,
    fetchstudent,
    allotedstudent,
    not_allotedstudent,
    admin_delete
}