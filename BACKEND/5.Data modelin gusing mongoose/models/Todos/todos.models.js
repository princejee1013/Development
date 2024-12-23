import mongoose from "mongoose"

const todoSchema=new mongoose.Schema(
 {

    content:{
        type:String,
        required:true,

    }, 
    complete:{
        type:Boolean,
        default:false,
    },
    createdBy:{ //When taking ref from othe r schema, implement like this
       type: mongoose.Schema.Types.ObjectId,
         ref:"User", 
    }, //this created by also contain the ref of user, cuz someone must have created the todo who is the current user. and ref name should be same as the model name of user , here User, not the variable name
    subTodos:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"SubTodo"
        }
    ] //array of subtodos , it contain ref from subtodo schema
  


 }, {timestamps:true}


)

export const Todo=mongoose.model("Todo", todoSchema)