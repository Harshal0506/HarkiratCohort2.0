const {JWT_SECRET}=require("../config");
const jwt=require("jsonwebtoken");

function userMiddleware(req,res,next){
    const token=req.headers.authorization;
    const words=token.split(" ");
    const jwtToken=words[1];
    const decodedValue=jwt.verify(jwtToken,JWT_SECRET);


    if(decodedValue.username){

        req.username=decodedValue.username;
        req.randomData="Adbsjsiqldjscdh";
        next();

    }else{
        res.status(403).json({
            msg:"You are not authenticated"; // actually try catch wale se handle hoga 
        })
    }
}


module.exports=userMiddleware;