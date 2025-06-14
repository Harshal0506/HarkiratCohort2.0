const { sign } = require('crypto');
const jwt=require('jsonwebtoken');
const jwtpassword="secret";
const zod=require("zod");


const emailSchema=zod.string().email();
const passwordSchema=zod.string().min(6);

function signJwt(username,password){
    const usernameResponse=emailSchema.safeParse(username);
    const passwordResponse=passwordSchema.safeParse(password);
    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }

    const signature=jwt.sign({
        username
    },jwtpassword);

    return signature;
}

function verifyJwt(token){
    let ans=true;
    try{
        jwt.verify(token,jwtpassword);
    }catch(e){
        ans=false;
    }
    return ans;
}

function decodeJwt(token){
    const decoded=jwt.decode(token);
    if(decoded){
        return true;
    }else{
        return false;
    }
}



module.exports={
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtpassword
}