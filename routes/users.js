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



<<<<<<< HEAD

=======
router.patch('/toggle/:id', async function(req, res)
{
    const taskId = req.params.id;

    const targetTask = await task.findOne({_id: taskId});
    
    const prevState = targetTask.isCompleted;
    console.log('-----', targetTask);

    let newDoc;
    try{
        newDoc = await task.findOneAndUpdate(
            {_id : taskId},
            {isCompleted: !prevState},
            {new : true}
        )
    }
    catch(error)
    {
        console.error(error, 'err in toggling task in database');
        return;
    }

    // console.log(newDoc);
    res.json({message: 'task toggled successfully'});
    // res.redirect('back');
})
>>>>>>> dlt-btn

//delete all tasks
router.delete('/delete-tasks', async function(req, res)
{

    //get collection from the model
    let tasksCollection;
    try{
        // tasksCollection = await task.collection;
        // tasksCollection = await task.find({}); this will give an array of doc, not the mongodb object
        // console.log(tasksCollection);
        const filter = {isCompleted : true};
        const response = await task.deleteMany(filter);
        if (response.deletedCount > 0) {
            res.status(200).json({message: 'Completed tasks deleted successfully.'});
          } else {
            res.status(404).json({message: 'No completed tasks found to delete.'});
          }
    }
    catch(error)
    {
        console.log(error, 'error in deleting completed tasks');
    }
    
    
    // res.json({ message: 'task deleted successfully' });
})



module.exports = router;