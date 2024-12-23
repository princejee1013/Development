import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        contact:{
            type:String,
            required:true
        },
        hospitalStatus:{
            type:String,
            required:true,
            enum:["active","inactive"]
        },
        speciality:{
            type:String,
            required:true
        },
        doctor:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Doctor',
            required:true
        },
        patient:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Patient',
            required:true
        },
        hospitalType:{
            type:String,
            required:true,
            enum:["government","private"]
            },
        hospitalId:{
            type:String,
            required:true
            },
        hospitalRating:{
            type:Number,
            required:true
            },
        hospitalReview:{
            type:String,
            required:true
            },
        hospitalImage:{
            type:String,
            required:true
            },
            




    },{timestamps:true});

export const Hospital = mongoose.model('Hospital',hospitalSchema);