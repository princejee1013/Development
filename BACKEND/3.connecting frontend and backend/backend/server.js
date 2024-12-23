import express from 'express';

const app=express()


app.get('/', (req, res)=>{
    res.send('Server is up and running')

});

app.get('/api/jokes', (req, res)=>{
     const jokes=[
      {
        id:1,
        title: "Joke 1",
        content: "this is a joke 1"
      },
      {
        id:2,
        title: "Joke 2",
        content: "this is a joke 2"
      },
      {
        id:3,
        title: "Joke 3",
        content: "this is a joke 3"
      },
      {
        id:4,
        title: "Joke 4",
        content: "this is a joke 4"
      }




     ]
     res.send(jokes)
})

const port= process.env.PORT || 3000;




app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
} )