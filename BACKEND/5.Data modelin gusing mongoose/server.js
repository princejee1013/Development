const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
require('dotenv').config();

app.use(bodyParser.json()); // process data and save it to req.body


const passport=require('./auth')
const PORT = process.env.PORT || 3000;





//middleware function
const logReq=(req, res, next)=>{
    console.log(`[${new Date().toLocaleString()}] Request made to : ${req.originalUrl}`)
    next(); //move to the next phase

}

//to apply this log mw to entire endpoint
app.use(logReq);



//initialise the passport
app.use(passport.initialize());

const localAuthMidWare=passport.authenticate('local', {session:false})
//apply the local auth mw to the login endpoint
app.get("/", (req, res) => {
  res.send("Welcome to my Hotel");
});


//routes import

const personRoutes = require("./routes/personRoutes");

//use the routes
app.use('/person',  personRoutes)



//operations on menu
//import menuroute

const menuRoutes=require('./routes/menuRoutes')
//use menuroute
app.use('/menu', menuRoutes)



app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
