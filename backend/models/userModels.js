import mongoose from "mongoose";
import validator from "validator";

// Schema 

const userSchema=new mongoose.Schema({
    
    name:{
        type:String,
        required:[true,"Name is require"]
    },
    lastName:{
        type:String,
        
    },
    email:{
        type:String,
        require:[true,"Email is require"],
        unique:true,
        validate:validator.isEmail// here, validate inside the mongoose
    },
    password:{
        type:String,
        required:[true,"Password is require"]
    },
    location:{
        type:String,
        default:"India"
    },
    
       


},{timestamps:true} 
);
// mongoose.Schema have to two input objects...



export default mongoose.model("User",userSchema);
// This User will automatically become pural and lowercase
// this will going to set the relationship between projects...
// userModel is created using mongoose.model, which generates a model for
//  the "User" collection in the database based on the defined schema.