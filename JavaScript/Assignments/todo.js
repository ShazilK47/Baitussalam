// Todo app

//quit, list , new, delete

const todoList = [
  { id: 1, task: "Reading", completed: false },
  { id: 2, task: "Research", completed: false },
  { id: 3, task: "Playing", completed: true },
];

function viewAllTasks(todoList) {
  console.log("Your Todos:");
  todoList.forEach((task) => {
    console.log(
      `${task.id}. ${task.task} - ${
        task.completed ? "Completed" : "Not completed"
      }`
    );
  });
}

function addTask(todoList) {
  const newTask = {
    id: todoList.length + 1,
    task: prompt("Enter your new task:"),
    completed: false,
  };
  todoList.push(newTask);
  console.log("Task added successfully!");
  viewAllTasks(todoList);
}

function deleteTask(todoList) {
  const taskId = parseInt(
    prompt("Enter the ID of the task you want to delete:")
  );
  const taskIndex = todoList.findIndex((task) => task.id === taskId);

  if (taskIndex === -1) {
    console.log("Task not found!");
    return;
  }

  todoList.splice(taskIndex, 1);
  console.log("Task deleted successfully!");
}

while (1) {
  cmd = prompt("list, new, delete, quit").toLocaleLowerCase();
  if (cmd === "quit") {
    console.log("Goodbye!");
    break;
  } else if (cmd === "list") {
    viewAllTasks(todoList);
  } else if (cmd === "new") {
    addTask(todoList);
  } else if (cmd === "delete") {
    deleteTask(todoList);
  } else {
    console.log("Invalid command!");
  }

  //   switch (cmd) {
  //     case "list":
  //       viewAllTasks(todoList);
  //     case "new":
  //       addTask(todoList);
  //     case "delete":
  //       deleteTask(todoList);
  //     case "quit":
  //       console.log("Goodbye!");
  //       break;
  //     default:
  //       console.log("Invalid command!");
  //   }
}
