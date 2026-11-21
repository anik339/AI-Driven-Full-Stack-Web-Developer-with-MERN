import { STORAGE_KEY } from "../constants.js";

export class StorageRepository {
  #memory = [];

  load() {
    try {
      const raw = globalThis.localStorage?.getItem(STORAGE_KEY);
      if (!raw) return this.#memory;
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) throw new TypeError("Saved project data is not an array.");
      this.#memory = parsed;
      return parsed;
    } catch (error) {
      console.warn("CodeTrack could not read browser storage; using in-memory data.", error);
      return this.#memory;
    }
  }

  save(projects) {
    this.#memory = projects.map((project) =>
      typeof project.toJSON === "function" ? project.toJSON() : project
    );
    try {
      globalThis.localStorage?.setItem(STORAGE_KEY, JSON.stringify(this.#memory));
      return true;
    } catch (error) {
      console.warn("CodeTrack could not persist data in this browser.", error);
      return false;
    }
  }
}
