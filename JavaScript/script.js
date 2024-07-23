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

	// Adding a task
	function addTask(taskText) {
		const task = { text: taskText, completed: false };
		addTaskDOM(task);
		saveTask(task);
	}

	function addTaskToDOM(task) {
		const li = document.createElement('li');
		li.textContent = task.text;
		if (task.completed) {
			li.classList.add('completed');
		}

		const completeBtn = document.createElement('button');
		completeBtn.textContent = '>';
		completeBtn.classList.add('complete');
		li.appendChild(completeBtn);

		const editBtn = document.createElement('button');
		editBtn.textContent = '-';
		editBtn.classList.add('edit');
		li.appendChild(editBtn);

		const deleteBtn = document.createElement('button');
		deleteBtn.textContent = 'x';
		deleteBtn.classList.add('delete');
		li.appendChild(deleteBtn);

		taskList.appendChild(li);
	}
});
