// -------------------------
// bank code 


// const jwt=require('jsonwebtoken');

// // decode verify generate 

// const value={
//     name:"Sarthak",
//     accountNumber:1234567890
// }

//const token=jwt.sign(value,"secret"); // can also add , {expiresIn:"1h"} after "secret" for setting expiration time limit

//console.log(token);

// this token has been generated using this secret , and hence this token can only be verified using this secret 
// this jwt generated is my cheque book 

// intruder code 

// const jst=require('jsonwebtoken');

// // // pretending to be the intruder and genereting the token using the decoded token 

// const value={
//     "name":"Sarthak",
//     "accountNumber":1234567890,
//     "iat":1708761737
// }

// const newToken=jwt.sign(value,"blahblahblah");
// console.log(newToken);


// This new token generated using the second code will come out wrong in verification as it generated using wrong signature and doesn't contain the secret the bank has put inside its cheque book and even though the intruder put the same contents inside the token , it will still be wrong as the signature is wrong.


// jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2FydGhhayIsImFjY291bnROdW1iZXIiOjEyMzQ1Njc4OTAsImlhdCI6MTcwODc2MTczN30.rphioa5vKSi1rqz_fbbE53S80jbR79sqBH7X_Jms96s","secret")
// ___________________________
// Try catch code 

// function getLength(){
//     let name;
//     return name.length;
// }



// console.log(getLength());


// console.log("Printing this after successful complition of our code"); // this line does not get executed because name.length throws an error 


// error catchijng solution 

// function getLength(){
//     let name;

//     try {
//     return name.length;
//     console.log("Inside try statement");
//     }catch(err){
//         console.log("Error: "+err);
//     }finally{
//         console.log("Finally over");
//     }

// }


// console.log(getLength());


