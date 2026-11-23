export const taskKey = 'campushub.tasks';
export function readTasks() { try { const data = JSON.parse(localStorage.getItem(taskKey) || '[]'); return Array.isArray(data) ? data : []; } catch { return []; } }
export function saveTasks(tasks) { localStorage.setItem(taskKey, JSON.stringify(tasks)); }
