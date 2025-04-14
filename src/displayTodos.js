function displayPage(todoDisplay, todoStorageArray) {
  todoDisplay.textContent = "";
  todoStorageArray.forEach((todo) => {
    let tableRow = document.createElement("tr");
    let details = document.createElement("details");
    let summary = document.createElement("summary");
    let paragraph = document.createElement("p");

    todoDisplay.appendChild(tableRow);
    tableRow.appendChild(details);
    details.appendChild(paragraph);
    details.appendChild(summary);

    paragraph.textContent = `details, details about ${todo.name}`;

    summary.textContent = todo.name;
  });
}

export { displayPage };
