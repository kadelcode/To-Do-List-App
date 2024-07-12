import sys

# create an empty list of tasks
tasks = []

# Add task
def add_task(task):
    tasks.append(task)
    print(f'Task added: {task}')

# Remove task
def remove_task(task_number):
    if 0 <= task_number < len(tasks):
        removed_task = tasks.pop(task_number)
        print(f'Task removed: {removed_task}')
    else:
        print(f'Task number {task_number} not found.')

# View tasks
def view_tasks():
    if tasks:
        print('To-Do List:')
        for i, task in enumerate(tasks):
            print(f'{i + 1}. {task)')
    else:
        print('No tasks in the list.')

# Help commands
def show_help():
    print('To-Do List Application')
    print('Commands:')
    print(' add "task"      Add a new task')
    print(' remove n        Remove a task by number')
    print(' view            View all tasks')
    print(' help            Show this help message')
    print(' exit            Exit the application')
