const passport =require('passport')
const LocalStstrategy=require('passport-local').Strategy
const Person= require('./models/Hotel Mgmt/user.model')

//passport middleware
passport.use(new LocalStstrategy(async (userName, pass, done)=>{
    //authnticatio logic here
    try {
   
      const user= await Person.findOne({username:userName})
  
      if(!user)
        return done(null, false, {message: 'Invalid username, try again'})
      
      const isPassMatch=await user.comparePassword(pass);
      if(isPassMatch){
        return done(null, user);
      }else{
        return done(null, false, {message: 'Invalid password, try again'})
      }
  
    } catch (error) {
      return done(error);
      
    }
  }))


  module.exports=passport;