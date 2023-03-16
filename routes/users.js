const express = require('express');

const router = express.Router();

const task = require('../models/task');


router.post('/create-task', async function(req, res){
    
    const formData = req.body;
//created inside the mongodb
    try{
        const newDoc  = await task.create({
            //... -> s used to copy all properties of the formData object to the new document being created.
            ...formData,
            isCompleted: false
        })
        console.log(`successfully inserted the task ${newDoc}`);
    }
    catch(err)
    {
        console.log("kya kar rha hai bhai tu", err);
    }
    
    res.redirect('back');

    res.end();
});





module.exports = router;