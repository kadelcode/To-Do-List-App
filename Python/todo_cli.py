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
            print(f'{i + 1}. {task}')
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

# Main function
def main():
    # Call the show_help function
    show_help();

    # Creating an infinite loop
    while True:
        command = input('\nEnter command: ').strip().lower()
        if command.startswith('add '):
            task = command[4:].strip('"')
            add_task(task)

        elif command.startswith('remove '):
            try:
                task_number = int(command.split()[1]) - 1
                remove_task(task_number)
            except (IndexError, ValueError):
                print('Please provide a valid task number.')
