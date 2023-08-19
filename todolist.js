// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = taskText;
  
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.onclick = function () {
        taskList.removeChild(listItem);
      };
  
      listItem.appendChild(removeButton);
      taskList.appendChild(listItem);
      taskInput.value = '';
    }
  }
  
  // Listen for 'Enter' key press to add a task
  document.getElementById('taskInput').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
  