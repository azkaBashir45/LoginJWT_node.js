const mongoose=require('mongoose')

const optScema= new mongoose.Schema({
email:String,
code:String,
expireIn:Number
},
{timestamps:true}
);
let Otp=mongoose.model('Otp',optScema,'Otp')
module.exports=Otp;