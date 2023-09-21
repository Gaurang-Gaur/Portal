
import userModel from "../models/userModels.js";
// here usermodel is a variable which represent the user data 
// in database 


export const registerController= async (req,res)=>{
   
    try{
        const {name,email,password,lastName,location}=req.body;
        if(!name){
            return res.status(400).send({success:false,message:"please provide name"});
            
        }
        if(!lastName){
            return res.status(400).send({success:false,message:"please provide lastName"});

        }
        if(!email){
            return res.status(400).send({success:false,message:"please provide email"});

        }
        if(!location){
            return res.status(400).send({success:false,message:"please provide location"});

        }
        if(!password){
            return res.status(400).send({success:false,message:"please provide password"});

        }
        
        const exitingUser=await userModel.findOne({email});// to check is there exiting user m
        // So, when you see await userModel.findOne({ email }), it means you are using this user model to query
        //  the database and check if a user with the provided email address already exists.


        // checking exiting user...
        if(exitingUser){
           return res.status(200).send({
                success:false,
                message:"Email Already register please login"
            });
        }


        // creating new user here
        const user=await userModel.create({name,email,password});
        res.status(201).send({
            success:true,
            message:"User  created Successfully",
            user,
        });// due to this user is last i can see the user responds in postman



        
    }catch(e){
        console.log(e);
        res.status(400).send({
            message:"Error in register controller",
            success:false,
            e,
        })
    }

};