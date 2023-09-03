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
                // attachAjaxForToggleButton(newTask);
                alert('Task Added successfully');
            },
            error: function(error) {
              // Handle error here
              alert('Error adding task: ' + error);
            }
          });
    })


    tasksList.on('click', '.description-class', function(event) {
        event.preventDefault();
        const toggleTaskRoute = $(this).find('a').attr('href');
        const forCheckbox = $(this).find('a').data('check-box');
        $.ajax({
            url: toggleTaskRoute,
            method: 'GET',
            success: function(data) {
                // Handle successful response here
                console.log('task toggled successfully');
                const newState = data.data.newState;
                // Check or uncheck the corresponding checkbox
                console.log(forCheckbox);
                $(`#${forCheckbox}`).prop('checked', newState);
            },
            error: function(error) {
                // Handle error here
                alert('Error toggling task: ' + error);
            }
        });
    });


    //delete completed tasks asynchronously
    function deleteCompletedTasks() {
        $('#delete-all-button').on('click', function (e) {
            e.preventDefault();
    
            // Make an AJAX request to delete completed tasks
            $.ajax({
                url: '/delete-tasks',
                method: 'GET',
                dataType: 'json',
                success: function (response) {
                    if (response.success) {
                        // Iterate through the checked checkboxes and remove their corresponding list items
                        $('.my-checkbox:checked').each(function () {
                            const taskId = $(this).data('task-id');
                            console.log("taskid", taskId);
                            $(`li[data-list-id="${taskId}"]`).remove();
                        });
                    } else {
                        alert('An error occurred while deleting tasks.');
                    }
                },
                error: function () {
                    alert('An error occurred while communicating with the server.');
                }
            });
        });
    }
    


    function createNewTaskElement(task)
    {
        console.log(task.id, task._id);
        const dueDate = new Date(task.dueDate);
        const newTask = `<li data-list-id=${task._id}>
        <div>
            <input disabled id="${task._id}" type="checkbox" class="my-checkbox" data-task-id="${task._id}">
            <label class="description-class" for="${task._id}"><a data-check-box="${task._id}" href="/toggle/${task._id}"> ${task.description} </a></label>
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

    deleteCompletedTasks();
})

