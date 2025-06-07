const express=require('express');
const jwt=require('jsonwebtoken');
const jwtPassword="harshaljain05@";



const app=express();

const ALL_USERS=[
    {
        username:"harkirat@gmail.com",
        password:"123",
        name:"harkirat singh",
    },
    {
        username:"raman@gmail.com",
        password:"123321",
        name:"raman singh",
    },{
        username:"priya@gmail.com",
        password:"123456",
        name:"Priya kumari",
    },
];


function userExists(username,password){

for(let user of ALL_USERS){
    if(user.username==username && user.password==password){
        return true;
    }
}

return false;

}

app.use(express.json());


app.post("/signin",function(req,res){

    const username=req.body.username;
    const password=req.body.password;

    if(!userExists(username,password)){
        return res.status(403).json({
            msg:"User doesnt exist in our in memory db",
        })
    }

    var token=jwt.sign({
        username
    },jwtPassword);

    return res.json({
        token,
    });

});


app.get("/users",function(req,res){
    const token=req.headers.authorization;
    console.log(token);
    try{

        const decoded=jwt.verify(token,jwtPassword);
        const username=decoded.username;

        const l=[];
        for(let user of ALL_USERS){
            if(user.username !=username){
                l.push(user);
            }
        }

        res.json(
            {
                msg:l,
            }
        )

    }catch(err){
        console.log(err);
        return res.status(403).json(
            {
                msg:"Invalid token",
            }
        )
    }
})




// console.log(userExists("harkirat@gmail.com","123"));
app.listen(3000);