import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema(
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
            enum:["male","female", "other"]
        },
        address:{
            type:String,
            required:true
        },
        contact:{
            type:String,
            required:true
        },
        diagonedWith:{
            type:String,
            required:true
        },
        bloodGroup:{
            type:String,
            required:true,
            enum:["A+","A-","B+","B-","AB+","AB-","O+","O-"]
        },
        admittedIn:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Hospital',
            required:true
        },
        doctor:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Doctor',
            required:true
        },
        medicalRecord:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'MedicalRecord',
            required:true
        },
        patientStatus:{
            type:String,
            required:true,
            enum:["admitted","discharged"]
        },
        patientStatusHistory:{
            type:Array,
            default:[]
        },
        dischargeDate:{
            type:Date
        },
        dischargeSummary:{
            type:String
        },
        patientId:{
            type:String,
            required:true
        },
        
        


        



    },{timestamps:true});

export const Patient = mongoose.model('Patient',PatientSchema);