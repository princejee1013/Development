const mongoose=require('mongoose')
const bcrypt = require('bcrypt')

const PersonSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    age:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        enum:['chef','waiter', 'manager'],
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }

},{timestamps:true})

PersonSchema.pre('save', async function(next){
    const person=this; // to store the current instance of the model

     //hash the password only if it is modified
     if(!person.isModified('password')) return next(); //this methofd checks if the  specified field here 'password is modified

    try {
        //hash the passsword generation

        const salt =await bcrypt.genSalt(10); //generate 10 random characters
        //hash the password
        const hashedPassword=await bcrypt.hash(person.password, salt); //contain both pass plus salt

        //assign the hashed password to the user password
        person.password=hashedPassword;
       next(); //if the password filed i snot modified, the fn immediately returns the next middleware
    } catch (error) {
        return next(error)
    }
})

PersonSchema.methods.comparePassword= async function(candidatePassword){
    try {
        //use bycrpyt to comopare the password with hashed passswoerd
        const isMatch= await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    } catch (error) {
        throw error;
    }

}


const Person=mongoose.model("Person", PersonSchema)
module.exports=Person