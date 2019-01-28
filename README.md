## JavaScript_Assignment
### Requirements
* addtask and subtask
* prioritization and categorization of tasks
* Edit Tasks and subtasks
* priority should be changed by drag and drop
* Listing of task based on date and time(default), priority and filter by priority and search by label
* should have functionality to delete tasks and subtasks

### Implmented Application can perform the following functioanlities
* All the Task and subtasks are added to the local storage so in case of refresh or closing browser wont affect the saved tasks.
* User can add task and subtasks (check console for js line 256 output after adding subtask)
* User can delete the task
* User can click on the sub tasks button to view subtasks **but due to some bug the subtasks dont pop up on the page but you can view the console at line js_287 to see the fetched subtasks and line js_308 to see the form in which subtasks data is added**
* User can not be able to delete subtasks because of above reason but subtasks can be deleted in the same manner we are deleting the tasks.**
* When user clicks on **tasks list** button tasks will be displayed in sorted form based on date and time by default.
* On **tasks list** page have functionality to sort task based on priority(**after sorting by priority tasks will be shown in colored border red->high priority blue->medium priority yellow->low priority**) and filter tasks based on priority and search based on title name.
* When editing the task please enter priority in form of **("High", "Medium", "Low")**.

I hope you will like this project.
