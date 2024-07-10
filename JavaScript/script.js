document.addEventListener('DOMContentLoaded', () => {
	const taskForm = document.getElementById('task-form');
	const taskInput = document.getElementById('task-input');
	const taskList = document.getElementById('task-list');

	loadTasks();

	taskForm.addEventListener('submit', (e) => {
		e.preventDefault(); // prevents the form from reloading the page
		add(taskInput.value);

		// set the task input value to empty after adding the task
		taskInput.value = '';
	});

	// Handling clicks on the task list
	taskList.addEventListener('click', (e) => {
		if (e.target.classList.contains('delete')) {
			deleteTask(e.target.parentElement);
		} else if (e.target.classList.contains('edit')) {
			editTask(e.target.parentElement);
		} else if (e.target.classList.contains('complete')) {
			toggleCompleteTask(e.target.parentElement);
		}
	});

	// Load tasks from local storage
	function loadTasks() {
		const tasks = getTasksFromStorage();
		tasks.forEach(task => addTaskToDoM(task));
	}

	// Get tasks from local storage
	function getTasksFromStorage() {
		const tasks = localStorage.getItem('tasks')
		return tasks ? JSON.parse(tasks) : [];
	}

	// Save tasks to storage
	function saveTasksToStorage(tasks) {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}
});
