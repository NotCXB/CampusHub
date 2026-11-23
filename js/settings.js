import { readPreferences, applyPreferences } from './common.js';
const form = document.querySelector('#settings-form');
const nameInput = document.querySelector('#display-name');
const theme = document.querySelector('#theme');
const status = document.querySelector('#settings-status');
function populate() { const prefs = readPreferences(); nameInput.value = prefs.name || ''; theme.value = prefs.theme === 'dark' ? 'dark' : 'light'; }
populate();
form.addEventListener('submit', event => { event.preventDefault(); localStorage.setItem('campushub.preferences', JSON.stringify({name:nameInput.value.trim(), theme:theme.value})); applyPreferences(); status.textContent = 'Preferences saved.'; });
document.querySelector('#reset-preferences').addEventListener('click', () => { localStorage.removeItem('campushub.preferences'); populate(); applyPreferences(); status.textContent = 'Preferences reset.'; });
