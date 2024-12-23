import mongoose, {Schema} from mongoose;
import jwt from "jsonwebtoken";

import bcrypt from "bcrypt"


const userSchema=new Schema(
    {
       username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        index:true //for optimised seraching

       } ,

       email:{
        type:String,
        required:true,
        unique:true,
        trim:true
        

       } ,

       fullname:{
        type:String,
        required:true,
        trim:true,
        index:true //for optimised seraching
       },

       avatar:{
        type:String, //cloudinary url
        required:true,

       },
       coverImage:{
        type:String, //cloudinary url

       },
       watchHistory:[

        {
            type:Schema.Types.ObjectId,
            ref:'Video',
        }
       ],
       password:{
        type:String,
        required:[true, "password is required"]
       },
       refreshToken:{
        type:String,
       }



    } ,{timestamps:true})


    //Pre save mw
userSchema.pre("save", async function(next){
     
    if(!this.isModified("password")) return next();

    this.password=bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken=function(){
    return jwt.sign(
        {
           _id: this.id,
           email:this.email,
           username:this.username,
           fullname:this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS-TOKEN_EXPIRY
        }
    )

}

userSchema.methods.generateRefreshToken=function(){

    return jwt.sign(
        {
           _id: this.id,
          
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}



export const User=mongoose.model("User", userSchema)










/*
P R E    S A V E    M I D D L E W A R E

Purpose:
Hashes the password before saving the user to the database.
Ensures that even if the database is exposed, the actual password remains secure.


Explanation:
isModified("password"): Checks if the password field has been modified (e.g., during an update). If not, it skips hashing to avoid rehashing an already hashed password.
bcrypt.hash(): Hashes the plain-text password with a salt factor of 10.


2. generateAccessToken:

Purpose:
Generates a short-lived JWT for authentication.

Explanation:
jwt.sign(): Creates the token, embedding user-specific data (like _id, email) and signing it with the ACCESS_TOKEN_SECRET.
expiresIn: Configures the token's lifespan (e.g., 15m for 15 minutes).










2. generateAccessToken
javascript
Copy code
userSchema.methods.generateAccessToken = function() {
    return jwt.sign(
        {
            _id: this.id,
            email: this.email,
            username: this.username,
            fullname: this.fullname,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
};
Purpose:
Generates a short-lived JWT for authentication.
Explanation:
jwt.sign(): Creates the token, embedding user-specific data (like _id, email) and signing it with the ACCESS_TOKEN_SECRET.
expiresIn: Configures the token's lifespan (e.g., 15m for 15 minutes).



3. generateRefreshToken

Purpose:
Generates a long-lived token used to renew access tokens without requiring re-login.

Explanation:
Similar to generateAccessToken, but usually has a longer expiresIn duration (e.g., 7d for 7 days).




*/