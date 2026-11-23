import { locations } from './data.js';
const list = document.querySelector('#location-list');
function render(filter) { list.replaceChildren(); locations.filter(place => filter === 'All' || place.type === filter).forEach(place => { const item = document.createElement('li'); item.className = 'list-group-item'; const strong = document.createElement('strong'); strong.textContent = place.name; const p = document.createElement('p'); p.className = 'mb-0 text-secondary'; p.textContent = place.description; item.append(strong,p); list.append(item); }); }
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === button))); render(button.dataset.filter); }));
render('All');
