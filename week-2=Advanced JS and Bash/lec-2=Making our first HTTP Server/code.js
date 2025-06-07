const express=require('express');
const bodyParser=require('body-parser');
const app=express()
const port=process.env.PORT || 3000; // explanation given in notes 

// middlewares (will study ahead in detail )
// we can also use app.use(express.json());
app.use(bodyParser.json());

app.get('/',(req,res)=>res.send('Hello World'));

app.listen(port,()=>console.log(`Example app listening on port ${port}`))

// example chatGPT backend works like :-

app.post('/backend-api/conversation',function(req,res){
    // run a machine learning model here which will run when control reaches here 
    // after user asks a question 


    res.send("Hello World");// can only send once 
    // spawn ("python","a.py",....) // can even spawn a machine learning model or spawn a python code in the backend 
    console.log(req.headers["authorization"]); // can also do req.headers.authorization 
    console.log(req.body);
    res.send({
        name:"Sarthak",
        age:12
    });

    res.json({
        gender:"male",
        msg:"Love you 3000"
    });

    const message =req.body.message;
    console.log(message);

})


app.get('/route-handler',(req,res)=>{
    // write code of headers,body,query params (short for parameters)

    // write your own machine learning model here 

    res.send('Hello world'); // can also send objects using res.send 

    // only one can be send all above code is just dummy to get a collective idea of whats happening

    res.json({
        name:"sarthak",
        age:12
    });

    res.send('<b> Hi there </b>'); // can also send HTML code .
})