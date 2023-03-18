const express = require('express');

const router = express.Router();
const tasksModel = require('../models/task');


router.use('/', require('./users'));


<<<<<<< HEAD
=======
//this is the delete branch
>>>>>>> dlt-btn
router.get('/', async function(req, res)
{
    try{
        const tasks = await tasksModel.find({});
<<<<<<< HEAD

        console.log(tasks);
        res.render('home',{
        title: 'My Contacts',
        tasks: tasks
        });
        res.end();
=======
        
        // console.log(tasks);
        res.render('home',{
        title: 'My Tasks',
        tasks: tasks
        });
        res.end();
        //delete button branch
>>>>>>> dlt-btn
    }
    catch(err)
    {
        console.error(err, 'error in fetching tasks from db');
        return;
    }
    
})

module.exports = router;