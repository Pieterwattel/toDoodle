import { todoDetails } from "./domDeclarations";
import { removeTodo } from "./main";

function displayPage(todoDisplay, todoStorageArray) {
  todoDisplay.textContent = "";
  todoStorageArray.forEach((todo) => {
    let tableRow = document.createElement("tr");

    let checkbox = document.createElement("input");
    let nameParagraph = document.createElement("p");

    checkbox.setAttribute("type", "checkbox");

    todoDisplay.appendChild(tableRow);
    tableRow.appendChild(checkbox);
    tableRow.appendChild(nameParagraph);
    nameParagraph.textContent = todo.name;

    tableRow.setAttribute("title", "click for more info");
    tableRow.addEventListener("click", () => displayTodoDetails(todo));
  });
}

function displayTodoDetails(todo) {
  todoDetails.textContent = "";
  let nameParagraph = document.createElement("p");
  nameParagraph.textContent = todo.name;

  let removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove todo";
  removeBtn.addEventListener("click", () => removeTodo(todo));

  todoDetails.appendChild(nameParagraph);
  todoDetails.appendChild(removeBtn);
}

export { displayPage, displayTodoDetails };
