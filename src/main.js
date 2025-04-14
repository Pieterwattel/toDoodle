import "./styles.css";
import { nameInput, createTodoBtn, todoDisplay } from "./domDeclarations.js";
import { createTodo } from "./todoGod.js";
import { todoStorageArray } from "./todoStorage.js";
import { displayPage } from "./displayTodos.js";

createTodoBtn.addEventListener("click", () => {
  let newTodo = createTodo(nameInput.value);
  todoStorageArray.push(newTodo);
  displayPage(todoDisplay, todoStorageArray);
});
