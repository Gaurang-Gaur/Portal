import mongoose from "mongoose";

// I am make the function to be async because I does not 
// want my flow of code to be block...

const connectDb=async()=>{
    try{
        const connection=await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connect to mongoDb ${mongoose.connection.host}`.bgMagenta.white);

    }catch(e){
        console.log(`MongoDB error${e}`.bgRed.white);

    }

}

export default connectDb;// type: module

// module.exports=connectDb // type: commonjs