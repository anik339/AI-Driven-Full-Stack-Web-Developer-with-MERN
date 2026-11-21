import test from "node:test";
import assert from "node:assert/strict";
import { ProjectService } from "../js/services/project-service.js";

class MemoryRepository {
  data = [];
  load() { return this.data; }
  save(projects) {
    this.data = projects.map((project) =>
      typeof project.toJSON === "function" ? project.toJSON() : project
    );
    return true;
  }
}

test("ProjectService creates a default project for a new workspace", () => {
  const service = new ProjectService(new MemoryRepository());
  assert.equal(service.getProjects().length, 1);
  assert.equal(service.getProjects()[0].name, "My Development Board");
});

test("ProjectService creates projects and prevents duplicate names", () => {
  const service = new ProjectService(new MemoryRepository());
  service.createProject("Portfolio");
  assert.equal(service.getProjects().length, 2);
  assert.throws(() => service.createProject("portfolio"), /already exists/i);
});

test("ProjectService supports task creation, update, status changes and deletion", () => {
  const service = new ProjectService(new MemoryRepository());
  const project = service.getProjects()[0];
  const task = service.addTask(project.id, { title: "Build a card" });
  assert.equal(project.summary.total, 1);
  service.updateTask(project.id, task.id, { title: "Build an accessible card" });
  assert.equal(project.findTask(task.id).title, "Build an accessible card");
  service.advanceTask(project.id, task.id);
  assert.equal(project.findTask(task.id).status, "in-progress");
  assert.equal(service.deleteTask(project.id, task.id), true);
  assert.equal(project.summary.total, 0);
});

test("ProjectService exports and imports a JSON backup", () => {
  const service = new ProjectService(new MemoryRepository());
  const project = service.getProjects()[0];
  service.addTask(project.id, { title: "Prepare release notes" });
  const backup = service.exportJSON();

  const restored = new ProjectService(new MemoryRepository());
  restored.importJSON(backup);
  assert.equal(restored.getProjects()[0].tasks.length, 1);
  assert.equal(restored.getProjects()[0].tasks[0].title, "Prepare release notes");
});

test("ProjectService rejects malformed backup data", () => {
  const service = new ProjectService(new MemoryRepository());
  assert.throws(() => service.importJSON('{"projects":"not-an-array"}'), /valid codetrack backup/i);
});
