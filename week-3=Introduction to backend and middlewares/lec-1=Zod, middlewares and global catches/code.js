// const express=require('express') // ugly way to do auth because it has lots of bugs and issues in it
// const app=express();
// const port=3000



// app.use(express.json())
// //const req=require("express/lib/request");


// app.get('/health-checkup',(req,res)=>{


//     const kidneyId=req.query.kidneyId; // as query parameter 
//     const username=req.headers.username;
//     const password=req.headers.password;

//     if(username!="harshal" || password!="123456"){
//         res.status(403).json({
//             msg:"User doesn't exist"
//         });
//     }else{
//         // user with that name exists 


//         if(kidneyId!=1 && kidneyId!=2){ // input validation 
//             res.status(411).json({
//                 msg:"wrong inputs"
//             });

//             return;

//         }


//         // do something with the kidneys here 

//         res.send(" Your kidneys are healthy:get");
//     }
// });




// app.put("/replace-kidney/",function(req,res){
//     // do health checks here 

//     // req.query , req.headers, req.body
//     // console.log(req.query);
//     // console.log(req.body);
//     // console.log(req.headers);
//     // console.log(req.params);  // important thing to note <----


//     // req.headers <-- for header 
//     // req.body <--  for body use middleware to parse 
//     // req.query <-- for query send with route ?abc=hello&b=10&c=20
//     // req.params <-- for paramaters in route :id , : page 

    
//     const kidneyId=req.query.kidneyId;
//     const username=req.headers.username;
//     const password=req.headers.password;



//     if(username!="harshal" || password!="123456"){
//         res.status(403).json({
//             msg:"User doesn't exist"
//         });
//     }else{
//         // user with that name exists 


//         if(kidneyId!=1 && kidneyId!=2){ // input validation 
//             res.status(411).json({
//                 msg:"wrong inputs"
//             });

//             return;

//         }


//        res.send("Your kidneys are healhy : put");
//     }






//     res.send("put send successfully");
// })




// app.listen(3000,()=>console.log(`Example app listening on port 3000`));


// This above mentioned code violates the dry principle


// Slightly better solution is to use wrapper functions 
// const express=require('express');
// const app=express();
// const port=3000;

// function usernameValidator(username,password){
//     if(username!="sarthak" || password!="123456")
//         return false;
//     return true;
// }


// function inputValidator(kidneyId){
//     if(kidneyId!=1 && kidneyId!=2) // input validation 
//         return false;
//     return true;
// }


// app.get('/heath-checkup',(req,res)=>{

//     if(!usernameValidator(req.header.username,req.headers.password)){
//         res.status(403).json({
//             msg:"User doesn't exist"
//         })
//     }
//     if(!inputValidator(req.query.kidneyId)){
//         res.status(411).json({
//             msg:"wrong inputs"
//         })

//     }

//     // do something with the kidneys here 

//     res.send("Your kidneys are healthy");
// })


// app.listen(port,()=>console.log(`Example app listening on port ${port}!`))



// But the issue is there is still a lot of code being repeated here 


// const express=require('express');
// const app=express();
// const port=3000;


// // Rate limiter function 
// function rateLimiter(req,res,next){

//         // Implement rate limiting logic here 
//         // for example , you can use a library like express-rate-limit 
//         // or custom logic to limit rate of requests 

//         next();

// }


// // Middleware to check user credentials 
// function userMiddleware(req,res,next){
//     const { username,password }=req.body; // assuming username and password are in the request body
//     if(username !== 'harshal' || password != 'pass'){
//         return res.status(403).json({
//             msg:"User doesn't exist"
//         });

//     }

//     next();


// }

// // Middleware to check kidney ID
// function kidneyMiddleware(req,res,next){
//     const {kidneyId}=req.params; // assuming kidneyId is a URL parameter
//     if(kidneyId !=="1" && kidneyId !=="2"){
//         return res.status(411).json({
//             msg:"proper Kidney doesn't exist"
//         });

//     }
//     next();

// }


// // Middleware to calculate requests and send request count 
// let requests=0;
// function calculaterequests(req,res,next){
//     requests++;
//     console.log("requests are "+requests);
//     next();
// }
// // Heath check route with middleware
// app.get("/health-checkup",userMiddleware,calculaterequests,function (req,res){
//     res.send("Your heart is healthy.");
// })


// app.get('/kidney-check/:kidneyId',userMiddleware,kidneyMiddleware,calculaterequests,(req,res)=>{
//     res.send("Your kidney is healthy");
// });

// // Route to get request count 
// app.get('get-request',function(req,res){
//     res.send("Requests are :"+requests);
// });

// // second route to get request count 
// app.get('/get-request2',function(req,res){
//     res.send("Requests are :"+requests);
// });



// app.listen(port, ()=> console.log(`Example app listening on port ${port}!`));// old code 



//app.use code 


// const express=require('express');
// const app=express();
// const port=3000;

// let requests=0;

// function calculaterequests(req,res,next){
//     requests++;
//     console.log("requests are "+ requests);
//     next(); // says whoever is the next call it passing required arguments // can make changes to req, res objects end the request response cycle  
// }



// // Apply calculate requests middleware globally 

// app.use(calculaterequests);

// // Define your route handlers
// app.get("/health-checkup",function(req,res){
// // Do something with the heart here 
// res.send("Your heart is healthy ");
// });


// app.get("/kidney-check/:kidneyId",function(req,res){

//     console.log(req.body);
//     // Do something with your kidney here

//     res.send("your kidney is functioning properly");

// });

// app.use(express.json()); // Important takeaway here 


// // Route to increment request count
// app.get("/add-request", function(req, res) {
//      console.log(req.body);
//     res.send("request counted");
// });

// //app.use(express.json());  // observation req.body is undefined (can you infer something )
// // Route to get request count
// app.get("/get-request", function(req, res) {
//     res.send("requests are: " + requests);
// });

// // Second route to get request count
// app.get("/get-request2", function(req, res) {
//     res.send("requests are: " + requests);
// });

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// const express=require('express')

// const app=express()
// const port=3000


// // can also do async functions like database calls should be made async 

// async function middleware(req,res,next){
//     await fetch();
//     next();

// }



// function middleware2(req,res,next){
//     fetch().then(()=>{

//         next();
//     })

// }


// app.use(express.json());

// app.post("/health-checkup",function (req,res){
//     // kidneys=[1,2] expecting an  array like this 
//     console.log(req.body);
//     const kidneys =req.body.kidneys;
//     const kidneyLength=kidneys.length;
//     throw new Error("error occured");
//     res.send(" you have "+ kidneyLength +" kidneys");
// });

// // global catches - catch any error that occurs globally into this codebase 

// let errorCount=0;
// app.use(function(err,req,res,next){
//     errorCount++;
//     console.log(err);

//     res.json({
//         msg:" Some error occured it is "+ errorCount+"times",
        

//     })
//     next();
// });


// app.listen(port,()=>{
//     console.log(`Example app listening on port ${port}!`);
// });


// const express=require('express');
// const app=express();
// const z=require('zod');
// const port =3000

// const schema=z.array(z.number());

// app.use(express.json())
// // statement telling what kind of input I am expecting from my user 

// // const schema=z.object({
// //     email:z.string().email(),
// //     password:z.string().min(8),
// //     country:z.literal("IN").or(z.literal("US")),
// //     kidneys:z.array(z.number())
// // })


// app.post("/health-checkup",function (req,res){
//     // kidneys =[1,2] expecting an array like this 
//     const kidneys=req.body.kidneys;
//     const response = schema.safeParse(kidneys);
    

//     // res.send({
//     //     response
//     // })

//     if(!response.success){
//         res.status(411).send({
//             "message":"give proper input"
//         })
//     }else{
//         // res.send({
//         //     "message":"thankyou for giving proper input"
//         // })

//         const kidneyLength=kidneys.length;
   
//         res.send({
//             response
//         })
        

//         res.send("you have" + kidneyLength +" kidneys.");
//         console.log(response);

//     }
// });


// app.get('/',(req,res)=> res.send('Hello world!'));
// app.listen(port,()=> console.log(`Example app listening on port ${port}`));


// HW Question 

/*

If this is an array of strings with at least 1 input , return true else return false

function validateInput(){
    // we know z.array(z.number()).min(1)
}

*/

// another example of global catch 

// const express=require('express');
// const app=express();

// app.get('/',function(req,res){
//     console.log(req.body.kidneys.length); // as you cant read kidneys of undefined will rasise error 
//     res.json({
//         msg:"done"
//     });
// });



// // can also use arrays to do so 

// // list1 =[1,2,3];
// // function sum(a,b,c){
// //     return a+b+c;
// // }
// // console.log(sum(...list1));

// // console.log(undefined+2);
// //express.json() -> return a middleware




// // const middlewares=[express.json(),userValidator,kidneyValidator];

// // app.get('/allmidllewares',...middlewares,function (req,res,next){
// //     console.log(next);
// //     res.json({
// //       msg:"done"  
// //     })
// // });

// app.use(function(err,req,res,next){
//     res.send({
//         msg:"internal error "
//     })

    
// })

// app.listen(3000);



// multiple global catches , mandatory to call next 


const express=require('express');
const app=express();

app.get('/',function(req,res){
    // console.log(req.body.kidneys.length); // as you cant read kidneys of undefined will rasise error 
    res.json({
        msg:"done"
    });

    next("Error message wala chalo please.");
});


app.use(function(err,req,res,next){
    console.log("error")
    // res.send({
    //     msg:"internal error "
    // })
    console.log("Called global catch 1")
    console.log(next);
    next("Error"); 
  

    
})


app.use(function(err,req,res,next){
    console.log(" called gloabal catch 2 ");

})


// next("message") in last middlware calls global catch , next("message") next global catch and so on ....
// found argument is necessary.


// res.send and res.json dont break out of function .
// control flow 



app.listen(3000);


// general middlewares upar warna har route meh nhi jayega 
// you can share data across middlwares , yes 
// naive way req.user=1 , now use it in another middleware.


// general funda 
// all middlware
// all routes 
// all  global catches 






