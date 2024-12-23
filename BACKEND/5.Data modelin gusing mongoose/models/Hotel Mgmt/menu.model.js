const mongoose=require('mongoose')

const menuItemSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            unique:true,
            
        },
        price:{
            type:Number,
            required:true,
            
        },
        taste:{
            type:String,
            enum:['sweet','spicy','sour'],
            required:true,
        },
        is_drink:{
            type:Boolean,
            default:false,

        },
        is_veg:{
            type:Boolean,
            default:true,
        },
        ingredient:{
            type:[String], //as we are storing array of strings
           default:[]
        },
        num_sales:{
            type:Number,    
            default:0
        }



    },{timestamps:true})

const MenuItem=mongoose.model("MenuItem", menuItemSchema)
module.exports=MenuItem