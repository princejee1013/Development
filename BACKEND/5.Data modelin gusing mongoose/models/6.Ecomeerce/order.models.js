import mongoose from "mongoose"

const orderItemSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
        default:0,
    },
})

const orderSchema=new mongoose.Schema(
    {
        orderPrice:{
            type:Number,
            required:true,
            default:0,
        },
        customer:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },
        orderItems:{
            type:[orderItemSchema],
            required:true,
        },
        address:{
            type:String,
            required:true,
        },
        status:{
            type:String,
            required:true,
            enum:["pending", "delivered", "cancelled"],
            default:"pending",
            },




    }
    ,{timestamps:true})

export const Order=mongoose.model("Order", orderSchema)