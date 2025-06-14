// app.js 



//app1.js 
const express=require('express');
const app=express();


app.get('/',(req,res)=>{
    res.send(' Hello from App 1 ');
});

module.exports=app;



// app2.js 
const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send('Hello from App 2');
})

module.exports=app;


// server.js 

const app1=require('./app1');
const app2=require('./app2');
const express=require('express');
const app=express();

const selectedApp=process.env.APP_TO_RUN || 'app1';

if(selectedApp == 'app1'){
    app.use(app1);

}else if(selectedApp == 'app2'){
    app.use(app2);
}else{
    console.log("Invalid app selection.");
    process.exit(1);
}


app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});

// with this setup you can choose which app to run by setting the APP_TO_RUN environment variable when starting your server


bash 
APP_TO_RUN=app1 node server.js
APP_TO_RUN=app2 node server.js 

// This way, you can have multiple Express.js applications pointing to the same port, but you can control which one is actually running.

// These different servers created are like different doctors of same hospital, they can work together in different rooms(different ports) or work in the same room but turn by turn. And the get, post, patch etc commands written in an express server are like the variety of services provided by the doctor to a patient.

// Now we will learn more about the get, post, put, delete, patch etc commands in HTTP methods and how they are used in Express application with reference to the doctor analogy we talked about before-

// GET- Going for a consultation to get a checkup(When you are asking something from the server, example- we asked the server what is sum till query)
// POST- Going to get a new kidney inserted(If we want to put some data on our backend, example- creating new insta post)
// PUT- Going to get a kidney replaced(Whenever we want to update data in backend, example- updating name on website)
// DELETE- Going to get a kidney removed(If we want to delete some data on our backend, example- deleting your account)

// Status codes-
// 200- Everything is fine
// 404- Doctor is not in the hospital(If request is invalid example- Route doesn't exist)
// 500- Mid surgery power-out happened(if something goes wrong, example- error thrown, or error encountered all give back status code 500)
// 411- Wrong person came for surgery(Inputs were incorrect, example- instead of sending number to sum function, we sent text)
// 403- You were not allowed to enter the hospital(Unauthorized access, example- try to change password for someone else's account)
// And many many many more...


//HTTP 304 not modified status code means that the website you're requesting hasn't been updated since the last time you accessed it. Typically, your browser will save (or cache) web pages so it doesn't have to repeatedly download the same information. This is an attempt to speed up page delivery.


//The express code we wrote till get and post request is working just the way social media and other apps do, we put a new post on instagram(POST request), it gets updated for each person that is using instagram app and there is a common place connected to their server where each one can see the new posts(GET request). Mostly these requests are made asynchronous in nature so if a website is unable to get the data



// Using in-memory data storage systems certainly has its advantages, such as fast access times and efficient data processing. However, there are several disadvantages associated with this approach:

// Limited Storage Capacity: In-memory data storage is typically limited by the amount of RAM available on the system. This limitation can restrict the amount of data that can be stored and processed, especially for large-scale applications with massive datasets.

// Cost: RAM is more expensive than traditional disk storage. Scaling up in-memory data storage systems to accommodate growing datasets can become cost-prohibitive, especially for organizations with budget constraints.

// Data Volatility: In-memory data is volatile and is lost when the system is powered off or restarted. This makes it unsuitable for storing persistent data that needs to be retained across sessions unless additional mechanisms like data replication or persistence layers are implemented, which can add complexity and overhead.

// Data Consistency: In-memory data systems may face challenges in maintaining data consistency, especially in distributed environments or in the event of system failures. Ensuring that data remains consistent across all nodes in a distributed system can be complex and may require implementing sophisticated replication and synchronization mechanisms.

// Scalability: While in-memory data storage systems offer excellent performance for small to medium-sized datasets, scaling them to handle large and growing datasets can be challenging. Distributed in-memory data storage solutions exist to address scalability concerns, but implementing and managing such systems can be complex.

// Data Persistence: Unlike traditional disk-based storage systems, in-memory data storage systems do not inherently provide data persistence. Ensuring data persistence often requires additional measures such as periodic serialization of data to disk or integrating with external data storage solutions, which can introduce additional complexity and overhead.

// Risk of Data Loss: In-memory data storage systems are susceptible to data loss in the event of system failures or crashes. Without proper backup and recovery mechanisms in place, organizations risk losing critical data stored in-memory, leading to potential business disruptions and data loss.

// Increased Memory Footprint: In-memory data storage systems consume significant amounts of memory resources, which can lead to increased memory footprint and resource contention, especially in shared or virtualized environments. This can impact the overall performance and stability of the system.

// Security Concerns: In-memory data storage systems may pose security risks, as sensitive data stored in-memory can be vulnerable to unauthorized access or attacks. Implementing robust security measures such as encryption, access controls, and monitoring is essential to mitigate these risks.

// Complexity of Management: Managing in-memory data storage systems can be more complex compared to traditional disk-based storage systems. Tasks such as data replication, synchronization, and memory management require specialized knowledge and expertise, increasing the complexity and operational overhead of managing these systems.

// Overall, while in-memory data storage offers significant performance benefits, organizations must carefully consider these disadvantages and weigh them against their specific requirements and constraints when evaluating the suitability of in-memory data storage solutions for their applications.


// Its the duty of a backend engineer to take care of all edge cases and ensure that server is up and running always and not displaying unknown errors or crashing and should always return the correct status codes when encountered by different scenarios.


// To catch anything written after a certain route, we add :fileName(fileName is a not a fixed keyword and can be anything) after the route when mentioning the route in method and thus have to also do const a = req.params.fileName to get the query parameters.

// In assignment we have to http-fy the fs readFile into a get method and take any random query parameters using above line to read certain file.


