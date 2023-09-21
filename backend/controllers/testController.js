// It handle the logic when the user hit our
// api end they are event handler function

export const testPostController=(req,res)=>{

    const {name}=req.body; // we get this from the user when they hit api end point
    // to get this name we have to use body-parser because
    // by default express can not handle post request from F.E.
    
    res.status(200).send(`Your Name is ${name}`);

};