$(document).ready(function () {
  // Add task function
  function addTask(taskText) {
    let taskItem = `
      <li>
        <span class="task-text">${taskText}</span>
        <button class="remove">Remove</button>
      </li>
    `;
    
    // Append the task item to the list
    $('#taskList`).append(taskItem);
  }        
