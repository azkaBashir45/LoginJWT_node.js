const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const cors=require("cors")
const app=express();


//db connect
dotenv.config()
mongoose.connect(process.env.DB_CONNECT,{
    useUnifiedTopology: true, useNewUrlParser: true
},
()=>{
    console.log("Db is connect")
}
)
//import route
app.use(express.json());
app.use(cors());

const registerRoutes=require("./rotes/registerRouter");
app.use("/users",registerRoutes);

app.listen(5000,()=>{
    console.log("Server is running on 5000")
})