// Code Handbook 

const { openAsBlob } = require("fs");
const { parse } = require("path");

// String : length , indexOf(), lastIndexOf(), slice(),substring(),replace(),
// split(),trim(),toUpperCase(),etc 


// Length 

function getLength(str){
    console.log("Orignal String :"+str);
    console.log("Length :"+str.length);
}


getLength("Hello world");


// indexOf
function findIndexOf(str,target){
    console.log("Orignal String:"+str);
    console.log("Index:"+str.indexOf(target));
}

findIndexOf("Hello world","o");


//lastIndexOf

function findLastIndexOf(str,target){
    console.log("Orignal String :"+str);
    console.log("Index :"+str.lastIndexOf(target));
}

findLastIndexOf("Hello world","o");


// slice 
function getSlice(str,start,end){
    console.log("Orignal String :"+str);
    console.log("After slice: ",str.slice(start,end));

}
getSlice("Hello World",0,4);

//substring 
function getSubString(str , start ,end ){

    console.log("Orignal String :"+str);
    console.log("After substring :"+str.substring(start,end));
}

getSubString("Hello world",0,4);


// replace 

function replaceString(str,target,replacement){
    console.log("Orignal String :"+str);
    console.log("After Replace"+ str.replace(target,replacement));
    console.log("str after replace :"+str);
}

replaceString("Hello world","world","universe");

// split 
function splitString(str,seperator){
    console.log("Orignal String :"+str);
    console.log("After split: ",str.split(seperator));
    console.log("str After split: ",str)
}


splitString("Hello,world,this,is,beautiful,world",',');

// trim 
function trimString(str){
    console.log("Orignal String :"+str);
    console.log("After trim :",str.trim());
    console.log("str after trim:"+str); // no effect in orignal
}


// Important concept
trimString("    Hello world   ");
str="Hello";
//str[0]="X" In JS String are immutable you cannot modify them using indexes 
// rather make new one using + and substring 
// str="X"+str.substring(1)
console.log(str[3]);


// toUpperCase 
function toUpper(str){
    console.log("Orignal String :"+str);
    console.log("After toUpperCase:"+str.toUpperCase());
    console.log(" str is still the same :"+str);
}

toUpper("this is MixedCase String")


// toLowerCase 
function toLower(str){
    console.log("Orignal String :"+ str);
    console.log("After toLowerCase :"+str.toLowerCase());

}

toLower("this is MixedCase String")
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


function explainParseInt(value){
    console.log("Orignal Value:"+ value);
    let result=parseInt(value);
    console.log("After parseInt:"+result);

}


// Example Usage for parseInt 
explainParseInt("100")
explainParseInt("42px");
explainParseInt("3.14");
explainParseInt("abcx");


function explainParseFloat(value){

    console.log("Orignal Value:"+ value);
    let result=parseFloat(value);
    console.log("After parseFloat:"+result);

}


// Example Usage for parseFloat 

explainParseFloat("3.14")
explainParseFloat("42")
explainParseFloat("42px")
explainParseFloat("paxa")

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


// Array handbook 

// Array : push(), pop(), shift(), unshift(), splice() , slice(), 
// concat() , forEach(), map(), filter() , reduce() , find() , sort()

// push()

function pushExample(arr, element){
    console.log("Orignal Array:", arr);
    arr.push(element);
    console.log("After pop:",arr);
}

pushExample([1,2,3],4);


// pop()
function popExample(arr){
    console.log("Orignal Array:",arr);
    arr.pop();
    console.log("After pop:",arr);

}

popExample([1,2,3]);


// shift()

function shiftExample(arr){
    console.log("Orignal Array:",arr);
    arr.shift();
    console.log("After shift:"+arr);
}

shiftExample([1,2,3]);

// unshift()
function unshiftExample(arr,element){
    console.log("Orignal Array "+arr );
    arr.unshift(element);
    console.log("After unshift",arr);
}
unshiftExample([1,2,3],4);




// cancat()
function concatExample(arr1,arr2){
    console.log("Orignal Arrays: ",arr1,arr2);
    let arr3= arr1.concat(arr2);
    console.log("After concat arr1 , arr2, arr3 : ", arr1,arr2,arr3);
}
concatExample([1,2,3],[3,2,1]);

// forEach()

function forEachExample(arr){
    arr.forEach((item,index)=>{
        console.log(item,index);
    })
}

forEachExample([10,21,32]);

// map()

function mapExample(arr){
    console.log("Orignal Array:",arr);
   let newarr= arr.map((item)=>{
        return item*2;
    })

    console.log("After map: oldarr, maparr :",arr,newarr);

}


mapExample([1,2,3]);


//filter()

function filterExample(arr){
    console.log("Orignal Array :" ,arr);
    let newarr=arr.filter(function(item){
        return item>3;
    });


    console.log("After filter: oldarr, maparr :",arr,newarr);
    


}

filterExample([2,1,10,11,0,-1,3,2,1,9]);

// find()

function findExample(arr){
    console.log("Orignal Array ", arr);

    let found=arr.find((item)=>item>3);
    console.log("After find : ", found);
}

findExample([1,2,3,13,2,1,0]);

// sort()
function sortExample(arr){
    console.log("Orignal Array :" , arr);
    arr.sort(function(a,b){
        return a-b;

    });

    // inplace 
    console.log("After sort :", arr);
}

sortExample([11,2,3,4]);

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX



class Animal{

    constructor(name,legCount){
        this.name=name;
        this.legCount=legCount;
    }


    describe(){
        return `${this.name} has ${this.legCount} legs`;
    }

}


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


function dateMethods(){
    const currentDate=new Date();
    console.log("Current Date",currentDate);


    // Getting various components of the date 

    console.log("Date :", currentDate.getDate());
    console.log("Month: ",currentDate.getMonth()+1); // months are 0 indexed , so adding 1
    console.log("Year :",currentDate.getFullYear());


    console.log("Hours: ",currentDate.getHours());
    console.log("Minutes",currentDate.getMinutes());
    console.log("Seconds ",currentDate.getSeconds());



    // Setting Components of the datE


    currentDate.setFullYear(2022);
    console.log("After setFullYear :",currentDate);

    currentDate.setMonth(5); // setting month to June basically 
    console.log("After setMonth :",currentDate);

    // Getting and setting time in milliseconds since 1970 


    console.log("Time in milliseconds since 1970 :",currentDate.getTime());


    const newDate=new Date(2023,8,15); //creating a new date
    console.log("New Date : ",newDate);





}


dateMethods();

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

function jsonMethods(jsonString){

    console.log("Orignal JSON String :",jsonString);
    

    // parsing json string to JavaStript Object 

    let parsedObject=JSON.parse(jsonString);
    console.log("After JSON.parse()",parsedObject);

    // Stringifying Javascript object to JSON string 

    let jsonStringified=JSON.stringify(parsedObject);
    console.log("After JSON.stringify()",jsonStringified);



    



}

//Example Usage for JSON Methods 
const sampleJSONString='{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


function mathMethods(value){
    console.log("Orignal Value :",value);

    let rounded =Math.round(value);
    console.log("After round():",rounded);

    let ceiling=Math.ceil(value);
    console.log("After ceil():",ceiling);

    let flooring=Math.floor(value);
    console.log("After floor()",flooring);


    let randomValue=Math.random();
    console.log("After random(): ", randomValue);

    let maxValue=Math.max(1,2,3);
    console.log("After max():",maxValue);

    let minValue=Math.min(1,2,3);
    console.log("Atfer min():"+minValue);

    let powerOfTwo=Math.pow(value,2);
    console.log("After pow()",powerOfTwo );

    let squareRoot=Math.sqrt(value);
    console.log("After sqrt():",squareRoot);



}

// Example Usage for Math Methods

mathMethods(4.56);
mathMethods(9);
mathMethods(25);



// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


// Object Methods Explanation 
function objectMethods(obj){
    console.log("Orignal Object :",obj);

    let keys=Object.keys(obj);
    console.log("After Object.keys():" ,keys);

    let values=Object.values(obj);
    console.log("After Object.values(): ",values);

    let entries=Object.entries(obj);
    console.log("After Object.entries() ", entries);

    let hasProp= obj.hasOwnProperty('str');
    console.log("After Object.hasOwnProperty() ", hasProp );
    let objTest={};
    let listTest=[1,2,3]
    let newObj=Object.assign(objTest,{newProperty:"newValue",listTest}); // to know deep copy or shallow copy
    listTest.push(11);
    console.log("After Object.assign():",newObj);

    console.log("After Object.assign() obj is:",objTest);


}



objectMethods({a:12,b:"hello",stri:"hello - world"});


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// Bonus Section - Prototypes

const sampleObj={
    name:"Sarthak",
    age:24,
    gender:"make"
};


sampleObj.__proto__={
    salary:24000
}

console.log(sampleObj.salary);