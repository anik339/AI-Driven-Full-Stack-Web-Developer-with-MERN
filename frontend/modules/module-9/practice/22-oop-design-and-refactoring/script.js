const output = document.querySelector("#output");
    const lines = [];
    const show = (label, value) => lines.push(`${label}: ${value}`);

    class Task {
  constructor(title) {
    if (!title.trim()) throw new Error("A task title is required.");
    this.title = title.trim();
    this.completed = false;
  }

  complete() {
    this.completed = true;
  }
}

class TaskRepository {
  #tasks = [];

  add(task) {
    this.#tasks.push(task);
  }

  getAll() {
    return [...this.#tasks];
  }
}

class TaskService {
  constructor(repository) {
    this.repository = repository;
  }

  create(title) {
    const task = new Task(title);
    this.repository.add(task);
    return task;
  }
}

    const repository = new TaskRepository();
const service = new TaskService(repository);
service.create("Practise OOP responsibilities");
show("Repository task count", repository.getAll().length);
show("First task", repository.getAll()[0].title);
output.textContent = lines.join("\n");
console.log(lines.join("\n"));
