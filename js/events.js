import { upcomingEvents, eventDate } from './data.js';
const container = document.querySelector('#events-list');
const events = upcomingEvents();
if (!events.length) container.textContent = 'No upcoming events right now.';
events.forEach(event => { const card = document.createElement('article'); card.className = 'card mb-3'; const title = document.createElement('h2'); title.textContent = event.title; const details = document.createElement('p'); details.textContent = `?? ${eventDate(event)} · ${event.place}`; const description = document.createElement('p'); description.className = 'mb-0 text-secondary'; description.textContent = event.description; card.append(title,details,description); container.append(card); });
