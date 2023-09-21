import express from "express";
import {registerController} from "../controllers/authController.js";



// router objects

const router=express.Router()




// routes

router.post("/register",registerController);// create user


// export 

export default router;