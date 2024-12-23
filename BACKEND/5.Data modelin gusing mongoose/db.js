//for connecting mongodb server with nodejs server

const mongoose = require('mongoose');

//define mongoDb connection url
const mongoURL='mongodb://localhost:27017/mydb'; //replace mydb with your own database name
 

//set up mongodb connection
mongoose.connect(mongoURL).then(()=>{
    console.log("Database connected successfully")
}).catch((err)=>{
    console.log("Error connecting to database", err)
    
})

//get default conncetion
const db=mongoose.connection;

//define event listener for db conncetion 
db.on('connected', ()=>{
    console.log("MongoDB connected to db") 
})
db.on('error', (err)=>{
    console.log("MongoDB connection error", err)
}
)
db.on('disconnected', ()=>{
    console.log("MongoDB disconnected from db")
}
)