function sum1(a,b){
    return a+b;
}


const sum2=(a,b)=>{
    return a+b;
}


// learnung how to use maps 

function TransformationFunction(a){
    return Math.pow(a,3);
}

const sampleArray=[1,2,3,4,5,6,7];


const TransformedSampleArray=sampleArray.map(TransformationFunction);


TransformedSampleArray.forEach(element => console.log(element));

// maps can even be used with strings 
const str="hello";

const result=Array.prototype.map.call(str,function (char){
    return char.toUpperCase();
});


console.log(result);

const arrayOfStrings=["apple","banana","cherry"];

const upercasedArray=arrayOfStrings.map(function(str){
    return str.toUpperCase();
})

console.log(upercasedArray);



// assignment answer
function MapYourArrays(sampleArray,TransformationFunction){
    let NewSampleArray=sampleArray.map(TransformationFunction);
    return NewSampleArray;

}

const sampleArray2=[1,2,3,4,5,6,7,8];

function SampleTransformationFunction(a){
    return a*3;
}

const NewSampleArray=MapYourArrays(sampleArray2,SampleTransformationFunction);

NewSampleArray.forEach(element => console.log(element));


// Learning syntax of how to use filter 
 const arr=[1,2,3,4,5,6]

 const ans=arr.filter(n => n%2===0);
 console.log(ans);

 // can use this with any type of arrays, example array of strings

 const names =['Alice','Bob','Charlie','David','Eve','Frank','Grace','Henry'];
 const filterNames=names.filter(name=> !name.toLowerCase().startsWith('h'));
 console.log(filterNames);

 // Cannot be used with strings and so for strings we have to first convert array of characters then use filter then resassemple if needed

 const inputString='Hello,World';
 const characterArray=inputString.split('');

 const filteredArray=characterArray.filter((char)=>char.toLowerCase() !== 'h');
 const filteredString=filteredArray.join('');
 console.log(filteredString);
