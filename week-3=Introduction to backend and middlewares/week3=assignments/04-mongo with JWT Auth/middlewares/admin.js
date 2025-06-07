const jwt=require("jsonwebtoken");
const {JWT_SECRET}=require("../config");

// Middlware for handling auth 

function adminMiddleware(req,res,next){


    const token=req.headers.authorization; // bearer token 
    const words=token.split(" ");
    const jwtToken=words[1];
    try{

        const decodedValue=jwt.verify(jwtToken,JWT_SECRET);
        if(decodedValue.username){
            next();
        }else{
            res.status(403).json({
                msg:"username not valid";
            });
        }




    }catch(e){

        res.json({
            msg:
            "Incorrect (Invalid ) JWT"
        })

    }
}


module.exports=adminMiddleware;