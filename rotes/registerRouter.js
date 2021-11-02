const registerController=require("../controller/registerController")
const router=require("express").Router();

router.post("/register",registerController.Post_Register);
router.post("/login",registerController.loginData);

//for reset password
router.post("/emailSend",registerController.emailSend);
router.post("/changePassword",registerController.changePassword);
router.get("/logOut",registerController.logOut);

module.exports=router;