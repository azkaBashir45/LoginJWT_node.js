const registerController=require("../controller/registerController")
const router=require("express").Router();

router.post("/",registerController.Post_Register);
router.post("/",registerController.loginData);
module.exports=router;