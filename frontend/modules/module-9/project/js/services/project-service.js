import { Project } from "../models/project.js";
import { Task } from "../models/task.js";

export class ProjectService {
  constructor(repository) {
    this.repository = repository;
    this.projects = repository.load().map((item) => Project.fromJSON(item));

    if (this.projects.length === 0) {
      this.projects.push(new Project({ name: "My Development Board" }));
      this.persist();
    }
  }

  persist() {
    this.repository.save(this.projects);
  }

  getProjects() {
    return [...this.projects];
  }

  getProject(projectId) {
    return this.projects.find((project) => project.id === projectId) ?? null;
  }

  createProject(name) {
    const duplicate = this.projects.some(
      (project) => project.name.toLowerCase() === String(name).trim().toLowerCase()
    );
    if (duplicate) throw new Error("A project with that name already exists.");
    const project = new Project({ name });
    this.projects.push(project);
    this.persist();
    return project;
  }

  addTask(projectId, taskData) {
    const project = this.requireProject(projectId);
    const task = new Task(taskData);
    project.addTask(task);
    this.persist();
    return task;
  }

  updateTask(projectId, taskId, changes) {
    const task = this.requireProject(projectId).updateTask(taskId, changes);
    this.persist();
    return task;
  }

  advanceTask(projectId, taskId) {
    const task = this.requireProject(projectId).findTask(taskId);
    if (!task) throw new Error("Task not found.");
    const next = { todo: "in-progress", "in-progress": "done", done: "todo" };
    task.status = next[task.status];
    this.persist();
    return task;
  }

  deleteTask(projectId, taskId) {
    const removed = this.requireProject(projectId).removeTask(taskId);
    if (removed) this.persist();
    return removed;
  }

  exportJSON() {
    return JSON.stringify({
      application: "CodeTrack",
      schemaVersion: 1,
      exportedAt: new Date().toISOString(),
      projects: this.projects.map((project) => project.toJSON())
    }, null, 2);
  }

  importJSON(rawText) {
    const data = JSON.parse(rawText);
    if (!data || !Array.isArray(data.projects)) {
      throw new TypeError("This file is not a valid CodeTrack backup.");
    }
    const imported = data.projects.map((item) => Project.fromJSON(item));
    if (imported.length === 0) throw new TypeError("The backup does not contain any projects.");
    this.projects = imported;
    this.persist();
    return this.getProjects();
  }

  requireProject(projectId) {
    const project = this.getProject(projectId);
    if (!project) throw new Error("The selected project no longer exists.");
    return project;
  }
}
