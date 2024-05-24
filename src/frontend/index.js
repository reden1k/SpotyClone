import { Authorization } from '../backend/Authorization.js';
import { ipcRenderer, shell } from 'electron';

window.addEventListener('DOMContentLoaded', () => {
    const authButton = document.querySelector('.button-start');
    authButton.addEventListener('click', (e) => {
      console.log(Authorization.getAuthorizationUrl())
      ipcRenderer.send('open-auth-window', (e, Authorization.getAuthorizationUrl()));
    })
});
