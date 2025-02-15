// Provides input/output functions like printf and scanf
#include <stdio.h>

// Provides functions like exit for program termination
#include <stdlib.h>

// Provides string manipulation functions like strcspn
#include <string.h>


/* Define constants */
// Maximum number of tasks the app can handle (100 in this case).
#define MAX_TASKS 100

//Maximum length of a task description (256 characters).
#define TASK_LENGTH 256

/* Define the task structure */
typedef struct {
    char task[TASK_LENGTH];
    int completed; // An integer flag
} Task;

/* Declare global variables */
Task tasks[MAX_TASKS];
int task_count = 0;
