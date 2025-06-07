const { read } = require('fs');
const readline=require('readline');


// const rl=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });

// var a=1;
// a=2;
// console.log(a)



// let b=1;
// b=2;
// console.log(b)


// const c=9;
// // c=7 // not allowed as const 
// console.log(c);


// // let firstName="Harshal"
// // let age=19
// // let isMarried=false 

// // console.log("My name is "+ firstName + "and my age is "+age+ "and I am married :"+isMarried);


// // if(isMarried){
// //     console.log(firstName+" is married.")
// // }else{
// //     console.log(firstName+" is not married.")
// // }


// // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// // Program-0 Print sum of all numbers from 1 to n using for , while , do while loops

// // using a for loop 

// var totalSum=(n)=>{
//     let ans=0;
//     for(let i=1;i<=n;i++){
//         ans+=i;
//     }
//     console.log(ans);

// }

// // using a while loop 
// var totalSum2=(n)=>{
//     let ans=0;
//     let i=1;
//     while(i<=n){
//         ans+=i;
//         i++;
//     }
//     console.log(ans);
// }

// // using  a do-while loop 

// var totalSum3=(n)=>{
//     let ans=0;
//     let i=0;
//     do{
//         ans+=i;
//         i++;
//     }while(i<=n);

//     console.log(ans);
// }



// // using a for ... in loop 
// //(not recommended for arrays or similar structures)

// var totalSum4=(n)=>{


//     let ans=0;
//     for( let i in Array.from({length:n},(_,index)=>index+1) ){
//         // console.log(i); // index ayega 
//         // console.log(typeof(i))
//         ans+=parseInt(i)+1;
//         // console.log(parseInt(i)+1);
//     }
//     console.log("totalsum4 "+ ans);


// }


// // using a for ... of loop ( recommended for arrays and iterable objects)

// var totalSum5=(n)=>{
//     let ans=0;

//     for(let value of Array.from({length:n},(_,index)=>index+1)){
//         ans+=value;

//     }
//     console.log(ans);
// }

// // using Array.reduce()

// var totalSum6=(n)=>{
//     let ans=Array.from({length:n},(_,index)=>index+1).reduce((sum,value)=>sum+value,0);
//     console.log(ans);
    
// }


// rl.question('Enter a number : ',(answer)=>{
//     let n= parseInt(answer);
//     totalSum(n);
//     totalSum2(n);
//     totalSum3(n);
//     totalSum4(n);
//     totalSum5(n);
//     totalSum6(n);
//     rl.close();
// })





// program 1- write a program that greets a person given their first and last name 

// const greet=function(firstName,lastName){
//     console.log(`Hello ${firstName} ${lastName}`);
// }

// greet("Harshal","Jain");


// program 2- Write a program that greets a person based on gender 

// const greet=(gender)=>{
//     if(gender=="male"){
//         console.log("Hello male person");
//     }else {
//         console.log("Hello female person");
//     }
// }

// greet("female");



// program 3- Write a program that counts from 0-1000 and prints all of these numbers

// for(let i=0;i<=1000;i++){
//     console.log(i);
// }

// program 4- Write a program that prints all even numbers in an array.

// const value=[1,2,3,4,5,6,41,71,2,12,11,32,11];
// for(let i in value){
//     if(value[i]%2==0){
//         console.log(value[i]);
//     }
// }


// ans=value.filter((number)=>number%2==0);
// console.log(ans)

// program-5 write a  program that can print the biggest number in an array.


// let largest=Number.MIN_SAFE_INTEGER;
// const arr=[19,24,33,34,5,16,72,86,98];
// for( i in arr){
//     if(arr[i] > largest ){
//         largest=arr[i];
//     }
// }
// console.log(largest);



// program-6 write a program that prints all the male people's first name. given a complex object.

// const complexObject = {
//     states: {
//         Haryana: { Chandigarh: { males: { firstName: ["Raghu", "Surya", "Shailendra"] } } },
//         Punjab: { Moga: { males: { firstName: ["Jassi", "Raunak"] } } },
//         Rajasthan: {
//             Udaipur: { males: { firstName: ["Saket", "Saurabh"] } },
//             Pratapgarh: { males: { firstName: ["Abhinav"] } }
//         },
//         Karnataka: {
//             Bangalore: { males: { firstName: ["Harkirat"] } },
//             Bengaluru: { males: { firstName: ["Akshat", "Sidhant"] } }
//         }
//     }
// };


// function printMaleFirstName(complexObject){
//     for(const state in complexObject.states){
//         const stateObj=complexObject.states[state]
//         for(const city in stateObj){
//             const cityObj=stateObj[city];
//             if(cityObj.males && cityObj.males.firstName){
//                 const maleNames=cityObj.males.firstName;
//                 console.log(`Male names in ${state} , ${city} : ${maleNames.join(" ,")}`);
//             }
//             // console.log(complexObject.states[state][city].males.firstName);

//         }
//     }
//     // console.log("Ended ");


// }




// // calling the function with provided complexObject 
// printMaleFirstName(complexObject);


//Program-7: write a program that reverses all the element of an array 

// const reverse=function(arr){
//     let finalarr=[];
//     for(let i=arr.length-1;i>=0;i--){
//         finalarr.push(arr[i]);
//     }

//     console.log(finalarr);
//     console.log(finalarr.join('_')); 
// }



// arr=["Hello","world","India","is","great"];
// reverse(arr);


// we can also use below methods to reverse  string (not array of string )

// const reverse=(str)=>{
//     return Array.from(str).reverse().join('');

// }


// const reverse2=(str)=>{
//     return str.split('').reverse().join('');
// }

// // console.log(reverse('helloworld'));
// console.log(reverse2("helloworld"));


// lastly we can also do it by creating an empty string and iterating in reverse and adding 

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// const personArray=["Sarthak","Harkirat","Harshal"];
// const arraySize=personArray.length;
// console.log(personArray[2]+" is best friend of "+personArray[0]);

// personArray.push("Abhay");
// personArray.push("Saurabh");


// console.log(personArray[3]);
// console.log(arraySize);
// const UpdatedArraySize=personArray.length;
// console.log(UpdatedArraySize);

// As updating the previous arraySize will throw error ( as const ) but adding removing changing values of const array doesn't give error 


// const allUsers=[
//     {
//         firstName:"Sarthak",
//         lastName:"Sachdev",
//         metadata: [  // here metadata is an array of objects and not an object in itself but an array 
//             {
//                 age:21, 
//             }
//         ],
//         gender:'male',
//     },{
//         firstName:"Harkirat",
//         lastName:"Singh",
//         gender:"female",
//     },{
//         firstName:"Harshal",
//         lastName:"Jain",
//         metadata:[
//             {
//                 phones: 2
//             }
//         ],
//         gender:"male"
//     },{
//         firstName:"Harshit",
//         lastName:"Shah",
//         metadata:[
//             {
//                 age:0,
//                 phones: 2
//             }
//         ],
//         gender:"male"
//     }

// ];


// for(let i=0;i<allUsers.length;i++){
//     if(allUsers[i]["gender"]=="male"){
//         console.log(`${allUsers[i].firstName} is male`);


//         // check if metadata exists before accessing age property 

//         if(allUsers[i]["metadata"] && allUsers[i]["metadata"][0]["age"]!==undefined){ // understand the importance of this condition 
//             console.log(allUsers[i]["firstName"]+" is male and "+allUsers[i]["metadata"][0]["age"]+" is his age");
//         }else{
//             console.log(`${allUsers[i]["firstName"]} is male , but age is not available`);

//         }


//     }
// }

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


// Q1 Write a function that finds sum of 2 numbers


// const sum=function(a,b){
//     return a+b;
// }


// console.log(sum(2,4))

// Q2. Write a function that takes this sum and prints it in passive tense 


// function sum(num1,num2,fnToCall){
//     return fnToCall(num1+num2);
// }


// function displayResult(result){
//     console.log("Result of sum is:"+result);
// }

// function displayResultInPassive(data){
//     console.log("Sum's result is"+data);
// }
// // if we are only allowed to call one function after this and we don't know which function user will call that is why we add callback (fnToCall) in out function to do this:-

// const ans=sum(1,2,displayResultInPassive);
// console.log(ans);
// // sum=10;
// sum(1,2,displayResult);
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


//  let sum=0;
//  for(let i=0;i<10000000000;i++){
//     sum+=i;
//  }

//  console.log(sum); // bounty question


 // first way of calling functions 

//  var bro1=function(a,b){
//     return a+b;
//  }

//  console.log(bro1(2,5));


// // second way of calling functions 

// var bro2=(a,b)=>{
//     return a+b;
// }

// // third way 
// var bro3=new Function('a','b','return a+b');


// // fourth way 

// var obj={
//     bro4: function(a,b){
//         return a+b;
//     }
// };

// console.log(bro1(4,6) +" "+ bro2(7,4)+" "+bro3(3,6)+" "+obj.bro4(8,4));


// var bro3=new Function('a','b',`

//     // This is more complex function 

//     var result=a+b;
//     if(result>10){
//         return 'High';
//     }else{
//         return 'Low';
//     }


// `);  // multiple var declaration allowed 

// // Example of calling the function 
// console.log(bro3(4,3));
// console.log(bro3(10,11));

// console.log(`Hello
//  world`);

// function calculation(a,b,arithmaticFunction){
//     const ans=arithmaticFunction(a,b);
//     return ans;
// } 

// function sum(a,b){
//     return a+b;

// }

// function sub(a,b){
//     return a-b;
// }

// function mul(a,b,c){
//     return a*b*c;
// } // This function has been added to explain that this is not use-case of callbacks as we should know number of arguments and thus we will have to call mul function seperately

// const value=calculation(2,3,sum);
// console.log(value);

// const value2=calculation(2,5,sub);
// console.log(value2);

// const value3=calculation(2,10,mul); // NaN 
// console.log(value3);

// some examples of callbacks are setTimeout function and setInterval function where we pass them a function and a time arguments and the function is run after that amount of time in setTimeout function and after every x interval of time till we stop the function in case of set Interval function 
// ALERT !!! Callback is not recursion , recursion is function calling itself but in case of callbacks we call any function not specifically the same function ( it might cause an error if we call the same function as it might go into an infinite loop of callbacks )


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


// Q1. Create a counter in Javascript(Counts down from 30 to 0 )


// for(let i=30;i>=0;i--){
//     // console.log(i);

//     setTimeout(()=> console.log(i),10000*(30-i));
// }


// Q2. Create a terminal clock (HH:MM:SS) 

// const readline=require('readline');
// function startClock(hours,minutes,seconds){

// }

// const rl=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });

// function startClock(hours,minutes,seconds){
//     // console.log(typeof a+" "+typeof b + " "+typeof c );
//     // console.log(a+" "+b+" "+c);

//     if(isNaN(hours) || isNaN(minutes) || isNaN(seconds) ){

//         console.log("Invalid input. please enter valid numbers for hours,minutes and seconds");
//         return;
//     }

//     // calculate total seconds from user input 

//     let totalSeconds=hours*3600+minutes*60+seconds;

//     function formatTime(value){
//         return value<10 ? '0'+value:value;
//     }

//     function updateClock(){
//         const currentHours=Math.floor(totalSeconds/3600)%24; // Handle rollover 
//         const currentMinutes=Math.floor((totalSeconds/60)%60);

//         const currentSeconds=totalSeconds%60;


//         // print the formatted time 
//         // console.log("I am called");
//         process.stdout.write(`\r${formatTime(currentHours)}:${formatTime(currentMinutes)}:${formatTime(currentSeconds)}`);
//         totalSeconds--;
//         setTimeout(updateClock,1000);


//     }
//     // start the clock
//     updateClock();

// }

// rl.question("Enter hours",(hours)=>{
//     rl.question("Enter Minutes:",(minutes)=>{
//         rl.question("Enter seconds",(seconds)=>{
//             // start the clock with user input 
//             startClock(parseInt(hours),parseInt(minutes),parseInt(seconds));
//             // rl.close();
            
//         })
//     })
// })

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


function findNestedEntry(obj,key){

    for(let prop in obj ){
        if(obj.hasOwnProperty(prop)){
            if(prop==key){
                return obj[prop]; // found the key, return its value 
            }else if(typeof obj[prop]=='object'){
                const result=findNestedEntry(obj[prop],key);
                if(result!==undefined){
                    return result; //found the key in nested object , return its value 
                }
            }
        }

       
    }

     // key not found 
     return undefined;
}


// we can use programs like this to find entried in nested complex objects using recursion and loop for each level

// let key1="key100";
// console.log(findNestedEntry({age :10, name:"Harshal",property:{
//     "key":"value",
//     key2:"value2",
//     key1
// }},"key1"))