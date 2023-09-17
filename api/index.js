const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const userRoute=require("./routes/user");
const app=express();

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(console.log("mongoDb connected"))
.catch((err)=>console.log(err))

app.use("/",userRoute);

app.listen(5000,()=>{
    console.log("Backend is running")
})
