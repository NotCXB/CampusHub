export const taskKey = 'campushub.tasks';
export function readTasks() { try { const data = JSON.parse(localStorage.getItem(taskKey) || '[]'); return Array.isArray(data) ? data : []; } catch { return []; } }
export function saveTasks(tasks) { localStorage.setItem(taskKey, JSON.stringify(tasks)); }
const preferenceKey = 'campushub.preferences';
export function readPreferences() { try { return JSON.parse(localStorage.getItem(preferenceKey) || '{}') || {}; } catch { return {}; } }
export function applyPreferences() { const preferences = readPreferences(); document.documentElement.dataset.theme = preferences.theme === 'dark' ? 'dark' : 'light'; const welcome = document.querySelector('#welcome'); if (welcome && preferences.name) welcome.textContent = `Welcome back, ${preferences.name}`; }
applyPreferences();
