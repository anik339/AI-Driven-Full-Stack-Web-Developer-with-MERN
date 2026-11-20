import { PRIORITY_ORDER } from "./constants.js";
import { createId } from "./ids.js";
import { isOverdue } from "./dates.js";

export function createTask(values) {
  const now = new Date().toISOString();
  return {
    id: createId(), title: values.title, description: values.description,
    priority: values.priority, category: values.category, dueDate: values.dueDate,
    completed: false, createdAt: now, updatedAt: now
  };
}

export function updateTask(tasks, id, values) {
  return tasks.map((task) => task.id === id
    ? { ...task, ...values, updatedAt: new Date().toISOString() }
    : task
  );
}

export function toggleTask(tasks, id) {
  return tasks.map((task) => task.id === id
    ? { ...task, completed: !task.completed, updatedAt: new Date().toISOString() }
    : task
  );
}

export function removeTask(tasks, id) {
  return tasks.filter((task) => task.id !== id);
}

export function getTaskStats(tasks) {
  return {
    total: tasks.length,
    active: tasks.filter((task) => !task.completed).length,
    completed: tasks.filter((task) => task.completed).length,
    overdue: tasks.filter(isOverdue).length
  };
}

export function getVisibleTasks(tasks, options) {
  const query = options.query.trim().toLowerCase();
  const visible = tasks.filter((task) => {
    const matchesFilter = options.filter === "active" ? !task.completed
      : options.filter === "completed" ? task.completed : true;
    const searchable = `${task.title} ${task.description} ${task.category}`.toLowerCase();
    return matchesFilter && searchable.includes(query);
  });

  return visible.sort((a, b) => {
    if (options.sort === "newest") return b.createdAt.localeCompare(a.createdAt);
    if (options.sort === "priority") return PRIORITY_ORDER[a.priority] - PRIORITY_ORDER[b.priority];
    if (!a.dueDate && !b.dueDate) return b.createdAt.localeCompare(a.createdAt);
    if (!a.dueDate) return 1;
    if (!b.dueDate) return -1;
    return a.dueDate.localeCompare(b.dueDate);
  });
}
