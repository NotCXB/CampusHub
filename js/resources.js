import { resources } from './data.js';
const input = document.querySelector('#resource-search');
const results = document.querySelector('#resource-results');
function render() { const query = input.value.trim().toLowerCase(); const matches = resources.filter(item => `${item.title} ${item.author}`.toLowerCase().includes(query)); results.replaceChildren(); if (!matches.length) { results.textContent = 'No resources found.'; return; } matches.forEach(item => { const card = document.createElement('article'); card.className = 'card'; const title = document.createElement('h2'); const link = document.createElement('a'); link.href = item.url; link.textContent = item.title; title.append(link); const author = document.createElement('p'); author.className = 'text-secondary mb-0'; author.textContent = item.author; card.append(title,author); results.append(card); }); }
input.addEventListener('input', render); render();
