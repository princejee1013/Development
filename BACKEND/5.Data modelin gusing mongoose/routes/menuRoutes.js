const express=require('express')
const router =express.Router()

const MenuItem = require("../models/Hotel Mgmt/menu.model");


//POST route to add a new menu item
router.post("/", async (req, res) => {
    try {
      const data = req.body;
      const newMenuItem = new MenuItem(data);
      const response = await newMenuItem.save();
      console.log("data saved successfully");
      res.status(200).json(response);
    } catch (error) {
      console.log("Error saving menu item data", error);
      res.status(500).json("Internal server error");
    }
  });
  
  //get method to get menu data
  router.get("/", async (req, res) => {
    try {
      const data = await MenuItem.find(); // it fetch the data in oerson collection inside database
      console.log("data fetched");
      res.status(200).json(data);
    } catch (error) {
      console.log("Error fetching data", error);
      res.status(500).json("Internal server error");
    }
  });

  //parameterised endpoit for menu based on type of food

  router.get('/:tasteType', async(req, res)=>{
    try {
        const tasteType=req.params.tasteType

        if(tasteType=='spicy' || tasteType=='sour' || tasteType=='sweet3'){
            const response=await MenuItem.find({taste:tasteType});
            console.log('response fetched');
            res.status(200).json(response)
        }
    } catch (error) {
        console.log('Error fetching data', error);
        res.status(500).json('Internal server error')
        
    }
  })


  module.exports=router;
