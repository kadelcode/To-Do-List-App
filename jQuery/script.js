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
    $('#taskList').append(taskItem);
  }

	function saveTasks() {
		let tasks = [];
		
		$('#taskList li').each(function () {
			let task = {
				text: $(this).find('.task-text').text(),
				completed: $(this).find('.task-text').hasClass('completed')
			}
			tasks.push(task);
		});
		localStorage.setItem('tasks', JSON.stringify(tasks));
	} // end saveTasks() function
		}
