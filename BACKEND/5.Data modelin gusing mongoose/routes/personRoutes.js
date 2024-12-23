const express = require("express");
const router = express.Router();
const Person = require("../models/Hotel Mgmt/user.model");
const {jwtauthMiddleware, generateToken}=require('../jwt.js')

//POST route to add a new person
router.post("/signup", async (req, res) => {
  const data = req.body; //assuming that req body contain the person data

  //create a new person doc uing mongoose model
  const newPerson = new Person(data);

  //save the new person data to db using call back but rather we use async await
  // newPerson.save((error, personSaved)=>{
  //   if(error){
  //     console.log('Error saving person data', error);
  //     res.status(500).json('Internal server error')

  //   }else{
  //     console.log('data saved successfully')
  //     res.status(200).json(personSaved)
  //   }
  // })

  //using async await

  try {
    const response = await newPerson.save();
    console.log("data saved successfully");

    const payload={
        id:response._id,
        username:response.username,

    }
    console.log(JSON.stringify(payload))

    //generate token
    const token = generateToken(payload);
    console.log("Token generated successfully", token);

    res.status(200).json({ response: response, token: token });
  } catch (error) {
    console.log("Error saving person data", error);
    res.status(500).json("Internal server error");
  }
});

//login route to authenticate the user
router.post('/login', async(req, res)=>{

    try {
        //extract the username and password from the request body
        const {username, password}=req.body;

        //find the user with the username
        const user=await Person.findOne({username: username});

        //if user does not exisit or pass is not matched
        if(!user || !(await user.comparePassword(password))){
            return res.status(401).json({error: 'Invalid username or password'})
        }

        //generate the token
        const payload={
            id: user.id,
            username: user.username
        }
        const token=generateToken(payload);

        //return thr token as response
        res.json({token})
    } catch (error) {
        console.log('Error logging in', error);
        res.status(500).json({error:'Internal server error'})
    }

})

//profile route to get the user profile (protected route)

router.get('/profile', jwtauthMiddleware, async(req,res)=>{
    try {
        //get userdata from the request object
        const userData=req.userPayload;
        console.log('User data', userData);

       //finding user by its unique id
        const userId=userData.id;// store the id here
        const user=await Person.findById(userId);

        res.status(200).json({user})
    } catch (error) {
        console.log('Error logging in', error);
        res.status(500).json({error:'Internal server error'})
    }
})


//get method to get person data
router.get("/", jwtauthMiddleware, async (req, res) => {
  try {
    const data = await Person.find(); // it fetch the data in oerson collection inside database
    console.log("data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log("Error fetching data", error);
    res.status(500).json("Internal server error");
  }
});
//parameterised api
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType; //extract worktype from the url parameter
    if (workType == "chef" || workType == "waiter" || workType == "manager") {
      const response = await Person.find({ work: workType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json("Invalid work type");
    }
  } catch (error) {
    console.log("Error fetching data", error);
    res.status(500).json("Internal server error");
  }
});

//update the person details using the unique id stored in database
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id; //extract the id from the URL parameter
    const updatedPerson = req.body; //extract the updated data from the request body

    const response = await Person.findByIdAndUpdate(personId, updatedPerson, {
      new: true, //return updated document
      runValidators: true, // Run mongoose validators
    });

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }

    console.log("Person data updated successfully");
    res.status(200).json(response);
  } catch (error) {
    console.log("Error updating data", error);
    res.status(500).json("Internal server error");
  }
});

//deleting the person data
router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id; //extract the id from the URL parameter
    const response = await Person.findByIdAndRemove(personId);

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }

    console.log("Person data deleted successfully");
    res.status(200).json({ message: "person deleted successfully" });
  } catch (error) {
    console.log("Error deleting data", error);
    res.status(500).json("Internal server error");
  }
});

module.exports = router;
