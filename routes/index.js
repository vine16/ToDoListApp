const express = require('express');

const router = express.Router();
const tasksModel = require('../models/task');


router.use('/', require('./users'));


//this is the delete branch
router.get('/', async function(req, res)
{
    try{
        const tasks = await tasksModel.find({});
        
        // console.log(tasks);
        res.render('home',{
            title: 'My Tasks',
            tasks: tasks
        });
        res.end();
        //delete button branch
    }
    catch(err)
    {
        console.error(err, 'error in fetching tasks from db');
        return;
    }
    
})

module.exports = router;