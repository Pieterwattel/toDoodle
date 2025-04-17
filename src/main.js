import "./styles.css";
import {
  nameInput,
  createTodoBtn,
  todoDisplay,
  todoDetails,
} from "./domDeclarations.js";
import { createTodo, removeTodo } from "./todoGod.js";
import { todoStorageArray } from "./todoStorage.js";
import { displayPage, displayTodoDetails } from "./displayTodos.js";

createTodoBtn.addEventListener("click", () => {
  let newTodo = createTodo(nameInput.value);
  todoStorageArray.push(newTodo);
  displayPage(todoDisplay, todoStorageArray, todoDetails);
});

export { removeTodo, displayTodoDetails, todoStorageArray };
