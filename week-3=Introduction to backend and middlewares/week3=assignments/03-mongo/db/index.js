const { count } = require('console');
const mongoose=require('mongoose');
const { PassThrough } = require('stream');

// connect to mongoDB 

mongoose.connect("mongodb+srv://harshaljain0055:MudSWDOnp3EIqfoU@cluster0.e9vpz1e.mongodb.net/?appName=Cluster0").then((data)=>{
    console.log("Connected to MongoDB");
});


const AdminSchema=new mongoose.Schema({
    username:{type: String , unique:true , required:true},
    password:{type:String,required:true},
    courses:[{type:mongoose.Schema.ObjectId , ref:"Course"}],
});


const UserSchema=new mongoose.Schema({
    username:{type:String,unique:true,required:true},
    password:{type:String,required:true},
    myCourses:[{type:mongoose.Schema.ObjectId , ref:"Course"}]
});

const CourseSchema=new mongoose.Schema({
    title: String,
    description:String,
    price:Number,
    image:String,
    owner:String,
    published:{type:Boolean,default:false},
});


const Admin=mongoose.model("Admin",AdminSchema);
const User=mongoose.model("User",UserSchema);
const Course=mongoose.model("Course",CourseSchema);


// const Course1=new Course({

//     title: "Algorithms by abdul bari",
//     description:"Learn DSA",
//     price:1001,
//     image:"Image Link ",
//     owner:"Me ",
//     published:true 
// })

// Course1.save().then((data)=>console.log(data)).catch((err)=>console.log(err));


module.exports={
    Admin,
    User,
    Course,
};