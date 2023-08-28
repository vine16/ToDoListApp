$(document).ready(function() {

    const taskDescriptions = $('.task-description');
    const tasksList = $('#tasks-ul');
    $('#task-submit-form').submit(function(event)
    {
        event.preventDefault();
        const formData = $(this).serialize();
        $.ajax({
            url: '/create-task', 
            method: 'POST', 
            data: formData,
            success: function(data) {
                // Handle successful response here
                const newTask = createNewTaskElement(data.data.task);
                tasksList.append(newTask);
                alert('Task Added successfully');
            },
            error: function(error) {
              // Handle error here
              alert('Error adding task: ' + error);
            }
          });
    })


    taskDescriptions.each(function() {
        
        $(this).click(function(event){
            event.preventDefault();
            
        })

    })
    
    function createNewTaskElement(task)
    {
        console.log(task.id, task._id);
        const dueDate = new Date(task.dueDate);
        const newTask = `<li>
        <div>
            <input disabled id="${task._id}" type="checkbox" class="my-checkbox" data-task-id="${task._id}">
            <label class="description-class" for="${task._id}"><a href="/toggle/${task._id}"> ${task.description} </a></label>
        </div>
        <div class="deadline-class">
            <span class="deadline">${dueDate.toLocaleDateString('en-US', {month: 'short', day: 'numeric', year: 'numeric' })}</span>
        </div>
        <div data-category-id="${task.category}" class="category-div">
            ${task.category}
        </div>
    </li>`
        return newTask;
    }

})

