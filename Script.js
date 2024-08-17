document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    if (taskInput.value.trim() !== "") {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `${taskInput.value} <button class="delete-btn">Delete</button>`;
        
        taskList.appendChild(taskItem);
        taskInput.value = '';

        // Add event listener to the delete button of the new task
        taskItem.querySelector('.delete-btn').addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });
    }
});
