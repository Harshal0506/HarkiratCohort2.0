const express=require('express');
const app=express();


// app.get('/hello',(req,res,next)=>{
//     res.send("Hello");
//     next();
// },(req,res,next)=>{
//     console.log("World");
//     // next();
// });


// app.get('/hello',()=>{
//     console.log(" I am second route handling for hello .")
// })



app.get('/user/:id',(req,res,next)=>{

    // if the User ID is 0 , skip to the next route 


    if(req.params.id=="0") next('route')
    // otherwise pass the control to the next middleware function function in this stack 
    else 
    next()
},(req,res,next)=>{
    res.send('regular');
})


app.get('/user/:id',(req,res,next)=>{
    res.send("special");
    // next("error message");
});

app.use(function(err,req,res,next){
    console.log(err);

})


app.listen(3000);