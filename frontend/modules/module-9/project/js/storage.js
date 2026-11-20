import { STORAGE_KEYS } from "./constants.js";

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch (error) {
    console.error(`Could not read storage key ${key}.`, error);
    return fallback;
  }
}

export function loadTasks() {
  const saved = readJSON(STORAGE_KEYS.tasks, []);
  if (!Array.isArray(saved)) return [];
  return saved.filter((task) =>
    task && typeof task.id === "string" &&
    typeof task.title === "string" &&
    typeof task.completed === "boolean"
  );
}

export function saveTasks(tasks) {
  try {
    localStorage.setItem(STORAGE_KEYS.tasks, JSON.stringify(tasks));
    return true;
  } catch (error) {
    console.error("Could not save tasks.", error);
    return false;
  }
}

export function loadTheme() {
  return readJSON(STORAGE_KEYS.theme, "light") === "dark" ? "dark" : "light";
}

export function saveTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEYS.theme, theme);
    return true;
  } catch (error) {
    console.error("Could not save theme preference.", error);
    return false;
  }
}
