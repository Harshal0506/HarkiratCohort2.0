// const express=require('express')

// function sumTillNum(n){
//     let sum=0;
//     console.log(typeof n)
//     for(let i=1;i<=n;i++){
        
//         sum+=i;
//     }
//     return sum;
// }


// const app=express();
// const port=3001
// app.get('/',(req,res)=>{
//     console.log(req.query);
//     const n=req.query.n;
    
//     const ans=sumTillNum(n);
//     res.send(ans.toString());
// })

// app.listen(port,()=>{
//     console.log("App is listening on port 3001");
// })


const express=require('express');
const body_parser=require('body-parser');
const app=express();

const users=[{
    name:'john',
    kidneys:[{
        healthy:false
    },{
        healthy:true
    }]
}]

app.use(body_parser.json());
// app.use(express.json())

app.get('/',function(req,res){
    const  johnKidneys=users[0].kidneys;
    let numberOfKidneys=johnKidneys.length;
    // console.log(numberOfKidneys);
    let numberOfHealthyKidneys=0;
    for(let i=0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy==true){
            numberOfHealthyKidneys++;

        }

    }

    let numberOfUnHealthyKidneys=numberOfKidneys-numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnHealthyKidneys
    });

})


app.post('/',function(req,res){
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"done"
    })
})

app.put('/',function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }

    res.json({
        msg:"done"
    });
})


app.delete('/',function(req,res){
    if(checkUnHealthyKidneys()){

        const newKidneys=[];
        for(let i=0;i<users[0].kidneys.length;i++){
          
            if(users[0].kidneys[i].healthy){
            newKidneys.push({
                    healthy:true
            })
            }


            
           

        }
        users[0].kidneys=newKidneys;

        res.json({
            msg:"Done!!!"
        });

    }else{
        res.status(411).json({
            msg:"you don't have any healthy kidneys."

        });
    }
})




function checkUnHealthyKidneys(){
    let unHealthyKidneysPresent=false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            unHealthyKidneysPresent=true;
        }
    }

    return unHealthyKidneysPresent;
}

app.listen(3000,()=>{
    console.log("listening on port 3000");
});
