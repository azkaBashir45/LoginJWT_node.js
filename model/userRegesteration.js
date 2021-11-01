const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
   name:String,
   address:String,
   email:String,
   password:String,
   confirm_Password:String
})
module.exports=mongoose.model("register",userSchema);