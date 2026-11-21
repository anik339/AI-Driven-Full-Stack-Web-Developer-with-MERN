import test from "node:test";
import assert from "node:assert/strict";
import { Task } from "../js/models/task.js";

test("Task trims its title and applies safe defaults", () => {
  const task = new Task({ title: "  Learn OOP  " });
  assert.equal(task.title, "Learn OOP");
  assert.equal(task.priority, "medium");
  assert.equal(task.status, "todo");
});

test("Task rejects an empty title", () => {
  assert.throws(() => new Task({ title: "   " }), /please enter a task title/i);
});

test("Task validates priority and status updates", () => {
  const task = new Task({ title: "Write tests" });
  assert.throws(() => { task.priority = "urgent"; }, /valid priority/i);
  assert.throws(() => { task.status = "blocked"; }, /valid task status/i);
  task.status = "done";
  assert.equal(task.status, "done");
});

test("Task serializes its public state without exposing private fields", () => {
  const task = new Task({ title: "Create a model", description: "Use private fields" });
  const data = task.toJSON();
  assert.equal(data.title, "Create a model");
  assert.equal(data.description, "Use private fields");
  assert.equal(Object.hasOwn(data, "#title"), false);
});

test("Task detects overdue unfinished work", () => {
  const overdue = new Task({ title: "Old task", dueDate: "2020-01-01", status: "todo" });
  const completed = new Task({ title: "Finished task", dueDate: "2020-01-01", status: "done" });
  assert.equal(overdue.isOverdue, true);
  assert.equal(completed.isOverdue, false);
});
