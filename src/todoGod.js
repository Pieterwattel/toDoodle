import { displayTodoDetails, todoStorageArray } from "./main";

let i = 0;

class todo {
  constructor(name, finished, displayTodoDetails) {
    this.id = i++;
    this.name = name;
    this.finished = finished;
    this.displayTodoDetails = displayTodoDetails;
  }

  viewDetails() {
    this.displayTodoDetails();
  }
}

function createTodo(name) {
  let newTodo = new todo(name, false);
  return newTodo;
}

function removeTodo(todo) {
  const removalIndex = todoStorageArray.findIndex(
    (element) => element.id == todo.id
  );
  todoStorageArray.splice([removalIndex], 1);
  console.log(todoStorageArray);
}

export { createTodo, removeTodo };
