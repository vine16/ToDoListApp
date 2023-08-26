// const dlt_btn = document.getElementById('delete-all-button');
// const my_checkbox = document.getElementsByClassName('my-checkbox');

// const elementArray = [...my_checkbox];

// async function deleteCompletedTasks()
// {
//     try{
//         const response = await fetch('/delete-tasks/', {method: 'DELETE'});
        
//         if(response.ok){
//             window.location.href = '/';
//             // setTimeout(function(){
//             //     location.reload();
//             // }, 1000);
//         }
//         const jsonData = await response.json();

//         console.log(jsonData);
//     }
//     catch(err)
//     {
//         console.log(err, 'cant perform delete operation');
//     }
// }

// async function toggleTaskStatus(taskId)
// {
    
//     try{
//         const response = await fetch(`/toggle/${taskId}`,{
//                 method: 'PATCH'
//         })

//         const msg = await response.json();
//         console.log(msg);
//     }
//     catch(error)
//     {
//         console.log(error, 'not able to toggle task in server');
//     }
    
// }


// dlt_btn.addEventListener('click', deleteCompletedTasks);

// elementArray.forEach(function(element){
//     element.addEventListener('change', (event)=>{
//         const taskId = event.target.dataset.taskId;
//         console.log(taskId);
//         toggleTaskStatus(taskId);
//     });    
// });


