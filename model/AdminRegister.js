const mongoose=require('mongoose');

const AdminSchema=new mongoose.Schema({
   name:String,
   mobile:Number,
   email:{ type: String, required: true, unique: true},
   password:String,
   college:String,
   rooms:{type: Number,default:0},
   noofstudent:{type: Number,default:0},
   prefstudent:{type: Number,default:0}
});

// Export Admin Schema
module.exports=mongoose.model("admin_data",AdminSchema);