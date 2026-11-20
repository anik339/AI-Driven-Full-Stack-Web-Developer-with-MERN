import { VALID_CATEGORIES, VALID_PRIORITIES } from "./constants.js";

export function validateTask(input) {
  const title = String(input.title ?? "").trim();
  const description = String(input.description ?? "").trim();
  const priority = String(input.priority ?? "medium");
  const category = String(input.category ?? "Learning");
  const dueDate = String(input.dueDate ?? "");

  if (title.length < 2) return { valid: false, message: "Enter a title with at least 2 characters." };
  if (title.length > 90) return { valid: false, message: "Keep the title within 90 characters." };
  if (description.length > 500) return { valid: false, message: "Keep the description within 500 characters." };
  if (!VALID_PRIORITIES.includes(priority)) return { valid: false, message: "Choose a valid priority." };
  if (!VALID_CATEGORIES.includes(category)) return { valid: false, message: "Choose a valid category." };
  if (dueDate && !/^\d{4}-\d{2}-\d{2}$/.test(dueDate)) return { valid: false, message: "Choose a valid due date." };

  return { valid: true, value: { title, description, priority, category, dueDate } };
}
