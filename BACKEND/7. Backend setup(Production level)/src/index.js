// require("dotenv").config({path:'./env'});
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
const app = express();



dotenv.config({
    path: "./env",
});

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 3000, ()=> {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.error("MongoDb Connection failed",err);
    
});


/*

(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        app.on("error", (err)=>{
            console.log("Error connecting to database", err)
            throw err
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`Server is running on port ${process.env.PORT}`)
        })
        
    } catch (error) {
        console.error(error);
        throw err
        
    }

})()*///for connecting mongodb server with nodejs server