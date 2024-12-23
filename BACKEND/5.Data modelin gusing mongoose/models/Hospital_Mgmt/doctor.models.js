import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true

        },
        age:{
            type:Number,
            required:true
        },
        gender:{
            type:String,
            required:true,
            enum:["male","female"]
        },
        address:{
            type:String,
            required:true
        },
        contact:{
            type:String,
            required:true
        },
        specialization:{
            type:String,
            required:true
        },
        hospital:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Hospital',
            required:true
        },
        patient:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Patient',
            required:true
        },
        qualification:{
            type:String,
            required:true
        },
        experience:{
            type:Number,
            required:true,
            min:0
            
        },
        salary:{
            type:Number,
            required:true
        },
        doctorStatus:{
            type:String,
            required:true,
            enum:["active","inactive"]
        },




    },{timestamps:true});

export const Doctor = mongoose.model('Doctor',doctorSchema);