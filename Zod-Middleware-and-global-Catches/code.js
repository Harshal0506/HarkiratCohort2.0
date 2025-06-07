const express=require('express')
const app=express()
const port=3000

app.get('/health-checkup',(req,res)=>{
    const kidneyId=req.query.kidneyId;
    const username=req.headers.username;
    const password=req.headers.password;


    if(username!="harshal" || password !="123456"){ //username and password check 
        res.status(403).json({
            msg:"User doesn't exist"
        });
        return ;



    }

    if(kidneyId!=1 && kidneyId!=2){
        res.status(411).json({
            msg:"wrong inputs"
        });
        return ;
    }


    // do something with the kidneys here 

    res.send("your kidneys are healthy");



});






app.listen(port,()=>
console.log(`Example app listening on port ${port}`)
);

