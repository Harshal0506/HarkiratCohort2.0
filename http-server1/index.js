
//simple backend http server 


// const fs=require('fs')  // we have it inbuilt installed .
const express= require('express') // we have to install it  npm install 
const body_parser=require('body-parser')

const port=process.env.PORT || 3000;
const app=express();
app.use(body_parser.json()) // we will learn about middleware ahead in the course 
app.get('/',(req,res)=>{
    res.send("Hello world");
})




app.post('/backend-api/conversation',function(req,res){

    console.log(req.headers)
    console.log(req.body) // by default undefined 
    console.log(req.query)
    console.log(JSON.parse(`{"message":123,"a":20,"c":"hello"}`)) 

    // some machine learning algorithm
    res.status(200);
    res.json({
        result:"2+2 is 4 buddy",
        ans:4
    });
    console.log("Reached here")



});


app.get('/backend-api/conversation',function(req,res){
    console.log("Someone visited me ");
    res.send("Chatgpt get api response.")
    // checking javascript is single threaded or not 

    for(let i=0;i<10000000000;i++){
    //  console.log(".")   
    }
    console.log("my work is done ");

});

app.get('/requestjson',function(req,res){
    res.json({
        name:"Harshal",
        age:11
    });
})
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})



console.log("Hello world")

// this can be deployed online as well.