//define the schema for the task here
const mongoose = require('../config/mongoose');

const taskSchema = new mongoose.Schema({
    //fields
    description:{
        type: String,
        required: true,
        unique: true
    },
    category:{
        type: String,
        required: true
    },
    dueDate:{
        type: Date,
        required: true
    },
    isCompleted:{
        type: Boolean,
        required: true
    }
});
                            //collection name
                            //if not specified -> 'tasks'
const Task = mongoose.model('toDoTask', taskSchema);

module.exports = Task;