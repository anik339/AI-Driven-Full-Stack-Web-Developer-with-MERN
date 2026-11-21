import { createId } from "../ids.js";
import { Task } from "./task.js";

export class Project {
  #name;
  #tasks;

  constructor({ id = createId(), name, tasks = [], createdAt = new Date().toISOString() }) {
    const cleanName = String(name ?? "").trim();
    if (!cleanName) throw new TypeError("Project name is required.");
    if (cleanName.length > 48) throw new RangeError("Project names must be 48 characters or fewer.");
    this.id = id;
    this.#name = cleanName;
    this.#tasks = tasks.map((task) => task instanceof Task ? task : Task.fromJSON(task));
    this.createdAt = createdAt;
  }

  get name() { return this.#name; }
  get tasks() { return [...this.#tasks]; }

  rename(name) {
    const cleanName = String(name ?? "").trim();
    if (!cleanName || cleanName.length > 48) throw new TypeError("Enter a project name of 1–48 characters.");
    this.#name = cleanName;
  }

  addTask(task) {
    if (!(task instanceof Task)) throw new TypeError("Project.addTask expects a Task instance.");
    this.#tasks.unshift(task);
    return task;
  }

  findTask(taskId) {
    return this.#tasks.find((task) => task.id === taskId) ?? null;
  }

  updateTask(taskId, changes) {
    const task = this.findTask(taskId);
    if (!task) throw new Error("Task not found in this project.");
    task.update(changes);
    return task;
  }

  removeTask(taskId) {
    const previousLength = this.#tasks.length;
    this.#tasks = this.#tasks.filter((task) => task.id !== taskId);
    return this.#tasks.length !== previousLength;
  }

  get summary() {
    return this.#tasks.reduce((result, task) => {
      result.total += 1;
      result[task.status] += 1;
      if (task.isOverdue) result.overdue += 1;
      return result;
    }, { total: 0, todo: 0, "in-progress": 0, done: 0, overdue: 0 });
  }

  toJSON() {
    return {
      id: this.id,
      name: this.#name,
      tasks: this.#tasks.map((task) => task.toJSON()),
      createdAt: this.createdAt
    };
  }

  static fromJSON(data) {
    return new Project(data);
  }
}
