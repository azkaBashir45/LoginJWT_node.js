const Register=require("./../model/userRegesteration");
const crypto=require("crypto")

const key="Password"
const algo="aes256"


//
const jwt=require("jsonwebtoken");
const jwtKey="jwt"
//post data
const Post_Register= async(req,res)=>{
      try{
        //   var cipher=crypto.createCipheriv(algo,key);
        //   var encypted=cipher.update(req.body.password,'utf8','hex')
        //   +cipher.final('hex');
        //   let encypted2=cipher.update(req.body.confirm_password,'utf8','hex')
        //   +cipher.final('hex');
     
      
         const register= new Register({
             name:req.body.name,
             address:req.body.address,
             email:req.body.email,
             password:req.body.password,
             confirm_password:req.body.confirm_password
         });
         const registerSave=await register.save();
         //token generate
         jwt.sign({registerSave},jwtKey,{expiresIn:'300s'},(err,token)=>{
            res.json({token})
         })
        //  res.json(registerSave)
      }
      catch(error){
          res.send(error);

      }
}


//login
const loginData=(req,res)=>{
    try
    {
        const loginResult= await Register.findOne({
            email:req.body.email,
            password:req.body.password

        });
        jwt.sign({loginResult},jwtKey,{expiresIn:'300s'},(err,token)=>{
            res.json({token})
        })
}
catch(error){
    res.send(error);

}
}
module.exports={
    Post_Register,
    loginData
}