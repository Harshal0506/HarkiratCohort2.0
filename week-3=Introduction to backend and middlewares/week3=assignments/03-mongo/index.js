const express=require('express');
const bodyparser=require('body-parser');
const app=express();

// require("dotenv").config(); // dont know its use  --> seen in chatgpt to load env file in root ( check nodeenv if needed )

const adminRouter=require("./routes/admin");
const userRouter=require("./routes/user");


app.use(bodyparser.json());
app.use("/admin",adminRouter);
app.use("/user",userRouter);

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    console.log(""+PORT+"");
})