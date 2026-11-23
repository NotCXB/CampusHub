import { readTasks, saveTasks } from './common.js';
const form = document.querySelector('#task-form');
const list = document.querySelector('#task-list');
let tasks = readTasks();
function render() {
  list.replaceChildren();
  if (!tasks.length) { const item = document.createElement('li'); item.className = 'list-group-item'; item.textContent = 'No assignments yet.'; list.append(item); return; }
  tasks.forEach(task => {
    const item = document.createElement('li'); item.className = 'list-group-item d-flex align-items-center gap-3';
    const check = document.createElement('input'); check.type = 'checkbox'; check.checked = task.done; check.setAttribute('aria-label', `Mark ${task.title} complete`);
    check.addEventListener('change', () => { task.done = check.checked; saveTasks(tasks); render(); });
    const text = document.createElement('span'); text.className = 'flex-grow-1'; text.textContent = `${task.title} · ${task.course} · Due ${task.date}`; if (task.done) text.style.textDecoration = 'line-through';
    const remove = document.createElement('button'); remove.type = 'button'; remove.className = 'btn btn-outline-danger btn-sm'; remove.textContent = 'Delete'; remove.setAttribute('aria-label', `Delete ${task.title}`);
    remove.addEventListener('click', () => { tasks = tasks.filter(t => t.id !== task.id); saveTasks(tasks); render(); });
    item.append(check, text, remove); list.append(item);
  });
}
form.addEventListener('submit', event => { event.preventDefault(); const title = form.querySelector('#task-title').value.trim(); const course = form.querySelector('#task-course').value.trim(); const date = form.querySelector('#task-date').value; if (!title || !course || !date) return; tasks.push({ id: crypto.randomUUID(), title, course, date, done:false }); saveTasks(tasks); form.reset(); render(); });
render();
