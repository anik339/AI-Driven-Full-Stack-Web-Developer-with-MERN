import { PRIORITIES, STATUSES } from "../constants.js";
import { createId } from "../ids.js";

export class Task {
  #title;
  #description;
  #priority;
  #status;
  #dueDate;

  constructor({
    id = createId(),
    title,
    description = "",
    priority = "medium",
    status = "todo",
    dueDate = "",
    createdAt = new Date().toISOString(),
    updatedAt = createdAt
  }) {
    this.id = id;
    this.#title = Task.validateTitle(title);
    this.#description = String(description).trim();
    this.#priority = PRIORITIES.includes(priority) ? priority : "medium";
    this.#status = STATUSES.includes(status) ? status : "todo";
    this.#dueDate = String(dueDate || "");
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static validateTitle(value) {
    const title = String(value ?? "").trim();
    if (!title) throw new TypeError("Please enter a task title.");
    if (title.length > 90) throw new RangeError("Task titles must be 90 characters or fewer.");
    return title;
  }

  get title() { return this.#title; }
  set title(value) { this.#title = Task.validateTitle(value); this.touch(); }

  get description() { return this.#description; }
  set description(value) { this.#description = String(value ?? "").trim().slice(0, 300); this.touch(); }

  get priority() { return this.#priority; }
  set priority(value) {
    if (!PRIORITIES.includes(value)) throw new TypeError("Choose a valid priority.");
    this.#priority = value;
    this.touch();
  }

  get status() { return this.#status; }
  set status(value) {
    if (!STATUSES.includes(value)) throw new TypeError("Choose a valid task status.");
    this.#status = value;
    this.touch();
  }

  get dueDate() { return this.#dueDate; }
  set dueDate(value) { this.#dueDate = String(value || ""); this.touch(); }

  get isOverdue() {
    if (!this.#dueDate || this.#status === "done") return false;
    return new Date(`${this.#dueDate}T23:59:59`) < new Date();
  }

  touch() {
    this.updatedAt = new Date().toISOString();
  }

  update(changes) {
    if (Object.hasOwn(changes, "title")) this.title = changes.title;
    if (Object.hasOwn(changes, "description")) this.description = changes.description;
    if (Object.hasOwn(changes, "priority")) this.priority = changes.priority;
    if (Object.hasOwn(changes, "status")) this.status = changes.status;
    if (Object.hasOwn(changes, "dueDate")) this.dueDate = changes.dueDate;
    this.touch();
  }

  toJSON() {
    return {
      id: this.id,
      title: this.#title,
      description: this.#description,
      priority: this.#priority,
      status: this.#status,
      dueDate: this.#dueDate,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }

  static fromJSON(data) {
    return new Task(data);
  }
}
