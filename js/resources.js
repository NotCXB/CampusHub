import { resources } from './data.js';
const input = document.querySelector('#resource-search');
const results = document.querySelector('#resource-results');
function render() { const query = input.value.trim().toLowerCase(); const matches = resources.filter(item => `${item.title} ${item.author}`.toLowerCase().includes(query)); results.replaceChildren(); if (!matches.length) { results.textContent = 'No resources found.'; return; } matches.forEach(item => { const card = document.createElement('article'); card.className = 'card'; const title = document.createElement('h2'); const link = document.createElement('a'); link.href = item.url; link.textContent = item.title; title.append(link); const author = document.createElement('p'); author.className = 'text-secondary mb-0'; author.textContent = item.author; card.append(title,author); results.append(card); }); }
input.addEventListener('input', render); render();
// Open Library searches only when the user submits; local resources remain available above.
const bookForm = document.querySelector('#book-form');
const bookResults = document.querySelector('#book-results');
bookForm.addEventListener('submit', async event => {
  event.preventDefault(); const query = document.querySelector('#book-query').value.trim(); if (!query) return;
  bookResults.textContent = 'Searching Open Library…';
  try {
    const response = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(query)}&limit=8&fields=key,title,author_name`);
    if (!response.ok) throw new Error('Search failed'); const data = await response.json(); bookResults.replaceChildren();
    if (!data.docs.length) { bookResults.textContent = 'No books found. Try another title.'; return; }
    data.docs.forEach(book => { const card = document.createElement('article'); card.className = 'card'; const h = document.createElement('h3'); h.className = 'h5'; const a = document.createElement('a'); a.href = `https://openlibrary.org${book.key}`; a.textContent = book.title; h.append(a); const p = document.createElement('p'); p.className = 'mb-0 text-secondary'; p.textContent = book.author_name?.join(', ') || 'Author unknown'; card.append(h,p); bookResults.append(card); });
  } catch { bookResults.textContent = 'Book search is unavailable right now. Please try again later.'; }
});
