import mongoose from "mongoose"

const userSchema=new mongoose.Schema(
{

    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,

    },

    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,

    },

    password:{
        type:String,
        required:[true, "password is required"],

    }
}, {timestamps:true} //it will be taken as second object under mongoose schem athat will store createdAt and updatedAt time in db
)






export const User=mongoose.model("User", userSchema) //models takes 2 input, for whom the schema should be made-{here, User} and second based on what {here based on userSchema}
//we can also use mongoose.model() function to create a model from a schema. This function takes
//two arguments: the name of the model and the schema to use for the model. The name of the model   
//should be singular and capitalized.
//The model is a class with which we construct documents. Each document will be an instance of the model
//and will have properties and methods provided by mongoose.


//  INTERVIEW****************************
//in mongo db when tbis name User goes inside the db it stores as all small letters and in plural form => users , it is because
//mongoose automatically converts the model name to lowercase and pluralizes it. So, for example, the model User is stored as users in the database.
//This is why the model name should be singular and capitalized, as it is converted to lowercase and pluralized when stored in the database.    

