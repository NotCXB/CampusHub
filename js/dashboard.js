import { readTasks } from './common.js';
const next = document.querySelector('#next-tasks');
const tasks = readTasks().filter(task => !task.done).sort((a,b) => a.date.localeCompare(b.date)).slice(0,3);
if (tasks.length) { next.replaceChildren(); tasks.forEach(task => { const p = document.createElement('p'); p.textContent = `${task.title} · ${task.course} · Due ${task.date}`; next.append(p); }); }
