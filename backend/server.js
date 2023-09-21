
// import and export syntax for es6 type: module
// importing packages
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";




//importing files 
import connectDb from "./config/db.js"//we have to .js extension while using type: module instead of common js
import testRoutes from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";




// config of env variable

dotenv.config();

// Connection with Database (It should done before setting environement variable because connectDb function file using environment variables)
// importing from config / db.js
connectDb();


//rest object
// instance of application
const app=express();

// port

const PORT=process.env.PORT||8080;


// middleware 

app.use(express.json());// so, express can handle post req
app.use(cors());         // Connect the frontend to backend;
app.use(morgan("dev"));








// routes...
// now, we use middleware function to get the route here
try{
    app.use("/api/v1/test",testRoutes);
    app.use("/api/v1/auth",authRoutes);

}catch(e){
    console.log(e);
}















app.listen(PORT,()=>{
    console.log(`Node server running ${process.env.DEV_MODE} Mode here on ${PORT}`.bgCyan);
})










// IN this application I am using MVC design pattern 

// model: database design
// view: template engine or react js
// controller :business logic