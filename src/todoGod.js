class todo {
  constructor(name, finished) {
    this.name = name;
    this.finished = finished;
  }
}

function createTodo(name) {
  let newTodo = new todo(name, false);
  return newTodo;
}

export { createTodo };
