const Admindata = require('../model/AdminRegister');

//update data 
const setting_update = async (req, res) => {
    try {
        const settings_data = {
            rooms: req.body.rooms,
            noofstudent: req.body.noofstudent,
            prefstudent:req.body.pref,
        };
    
        const updatedSetting = await Admindata.findByIdAndUpdate(
          { _id: req.params.id },
          settings_data
        );
        res.json(updatedSetting);
      } catch (error) {
        res.json({ message: error });
      }
}


//get setting data

const fetchsetting =async (req,res)=>{
  try {
      const reqsetting=await Admindata.find({_id:req.params.uid},{rooms:1,noofstudent:1,prefstudent:1,_id:0})
      if(reqsetting.length!=0){
          res.status(200).json(reqsetting)
      }else{
          res.status(404).json({'errmsg':'Data not found!'})
      }
     
  }
  catch(error){
      res.status(400).json({'errmsg':error})
  }
}





module.exports={
    setting_update,
    fetchsetting
}

