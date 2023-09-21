// end point are add to seperate file
// then we directly access them in seperate controllers
// route functioning is made in controllers folder 
// and we can access them in server.js

import express from "express";
import {testPostController} from "../controllers/testController.js";


// router object

const router=express.Router();


// route

router.post("/test-post",testPostController);


// export default 

export default router;