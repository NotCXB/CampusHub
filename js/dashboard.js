import { readTasks } from './common.js';
const next = document.querySelector('#next-tasks');
const tasks = readTasks().filter(task => !task.done).sort((a,b) => a.date.localeCompare(b.date)).slice(0,3);
if (tasks.length) { next.replaceChildren(); tasks.forEach(task => { const p = document.createElement('p'); p.textContent = `${task.title} · ${task.course} · Due ${task.date}`; next.append(p); }); }
import { upcomingEvents, eventDate } from './data.js';
const eventsContainer = document.querySelector('#upcoming-events');
const events = upcomingEvents().slice(0, 3);
eventsContainer.replaceChildren();
if (!events.length) eventsContainer.textContent = 'No upcoming events right now.';
events.forEach(event => { const p = document.createElement('p'); p.textContent = `${event.title} · ${eventDate(event)}`; eventsContainer.append(p); });
// Default location is New York City until campus coordinates are configured.
const weather = document.querySelector('#weather');
weather.textContent = 'Loading weather for New York City…';
fetch('https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current=temperature_2m,weather_code&temperature_unit=fahrenheit').then(response => { if (!response.ok) throw new Error('Weather unavailable'); return response.json(); }).then(data => { weather.textContent = `New York City · ${Math.round(data.current.temperature_2m)}°F`; }).catch(() => { weather.textContent = 'Weather is unavailable right now. Please try again later.'; });
