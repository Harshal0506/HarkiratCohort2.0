// example of synchronous code 
// function sum(n){
//     let sum=0;
//     for(let i=0;i<n;i++){
//         sum+=i;
//     }
//     return sum;
// }
// console.log(sum(10))


// example of asynchronous code 

setTimeout(function(){
    console.log("Hello world");
},100);


function sum(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
}
console.log(sum(2100000000));
console.log("Namaste duniya");
setTimeout(function(){
    console.log(sum(21));
},1)


/* In JavaScript, setTimeout schedules a function to run asynchronously after a specified delay. However, the actual execution order is influenced by the event loop and the nature of the tasks involved.

Let's analyze the code:

The first setTimeout is scheduled to execute console.log("Hello world") after a delay of 100 milliseconds.

The synchronous console.log(sum(2100000000)) is executed. This operation is time-consuming due to the large loop in the sum function.

While the main thread is busy executing the synchronous console.log(sum(2100000000)), the timer for the first setTimeout expires.

The callback function console.log("Hello world") is placed in the event queue.

The main thread finishes the execution of the synchronous code (console.log(sum(2100000000))).

The event loop picks up the callback from the event queue and executes console.log("Hello world").

So, even though the setTimeout for "Hello world" was declared first, its actual execution was delayed by the synchronous execution of the sum(2100000000) code. The asynchronous nature of setTimeout allows other tasks to proceed while waiting for the specified delay, but the order of execution is determined by the event loop and the completion of tasks. 

In the context of your example, the output of the asynchronous function scheduled with setTimeout waits for the completion of the synchronous function (console.log(sum(2100000000))) before its own output is displayed. The asynchronous function is indeed calculated before, but its output is deferred until the synchronous code has completed execution. This behavior is a result of how the event loop in JavaScript manages the execution of asynchronous tasks alongside synchronous tasks.*/


// filesystem module 

const fs= require('fs');
fs.readFile("notes.txt","utf-8",function(err,data){
    console.log(data.length);
})

console.log("hi there ");
// this will run first because the above function is async function and only ater the thread is not busy will it go on and output all the pending callbacks like the fs.readFile callback function 



console.log("#############");

// const fs=require('fs');

function MyOwnAsyncFunction(callback){
    fs.readFile("notes.txt","utf-8",function(err,data){
        if(err){
            console.log("Error reading file",err);
            return;
        }
        console.log("##############");
        callback(data);



    })
}

function onDone(data){
    console.log(data.length);
}

MyOwnAsyncFunction(onDone);



// cleaner way to create your own async function 

// const fs=require('fs');
const { callbackify }=require('util');


function HarshalReadFile(){
    return new Promise(function(resolve,reject){
        fs.readFile("notes.txt","utf-8",function(err,data){
            resolve(data);

        })
    });
}

function OnDone(data){
    
    
    console.log("Done reading data"+ data.length);
}


HarshalReadFile().then(OnDone);




var a= HarshalReadFile();

console.log(a); // pending state 
// IMP !!! this will display Promise { <pending > } as output because the .then statement is not written yet

// setTimeout(()=>{
//     console.log(a);
// },1000) // it has been resolved.

a.then((data)=>{
    console.log(data.length +" data received.");
})


// async await syntax explained with an example 

function HarshalSaysHello(){
    return new Promise(function (resolve,reject){
        setTimeout(function (){
            resolve("Hi there");
        },1000);
    })
}


async function main(){
    const value=await HarshalSaysHello();
    // work if function is promisified .
    console.log(value);

    // catch exception in case of reject 
    console.log(" This will wait for promise to resolve")
    
}

main();
console.log("Thread doesn't wait for main to get completed and this will print first ");

