const mongoose=require('mongoose');

const StudentSchema=new mongoose.Schema({
   studentid:Number,
   name:String,
   fathername:String,
   email:{ type: String, required: true,index: true,unique:true},
   branch:String,
   fee_date:Date,
   rooms:{type: Number,default:0},
   status:{type: Number,default:0},
   collegeid:String,
   password:String
  
});

// Export Student Schema
module.exports=mongoose.model("student_data",StudentSchema);

