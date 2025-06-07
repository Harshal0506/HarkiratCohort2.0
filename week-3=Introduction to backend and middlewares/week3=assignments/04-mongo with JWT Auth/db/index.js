const mongoose=require('mongoose');
// const { PassThrough } = require('stream');

// connect to MongoDB 


mongoose.connect("mongodb+srv://harshaljain0055:MudSWDOnp3EIqfoU@cluster0.e9vpz1e.mongodb.net/?appName=Cluster0").then(()=>{
    console.log("Connected to MongoDB");
});


// Define Schema 
const AdminSchema=new mongoose.Schema({
    // Schema definition here 
    username : String ,
    Password: String
});

const UserSchema=new mongoose.Schema({
    username: String , 
    password:String ,
    purchasedCourses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'

    }]
});

const CourseSchema=new mongoose.Schema({
    title:String , 
    description:String ,
    imageLink:String , 
    price:Number 

});

const Admin=mongoose.model("Admin",AdminSchema);
const User=mongoose.model("User",UserSchema);
const Course=mongoose.model("Course",CourseSchema);

module.exports={
    Admin,
    User,
    Course

}