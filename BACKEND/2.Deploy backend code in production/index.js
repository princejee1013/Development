require('dotenv').config()
const express=require('express')
const app=express()

const PORT=3000;

app.get('/', (req,res)=>{
    res.send('Hello World')
})

app.get('/twitter', (req,res)=>{
    res.send('Twitter ke page par hai')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Please Login at Chai aur code</h1>')
})




app.listen(process.env.PORT, ()=>{
    console.log(`Server is running at PORT ${PORT}`);
})
