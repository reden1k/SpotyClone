import { Authorization } from '../backend/Authorization.js';
import { ipcRenderer, shell } from 'electron';

window.addEventListener('DOMContentLoaded', () => {

    const authButton = document.querySelector('.auth-button');
    authButton.addEventListener('click', (e) => {
      console.log(Authorization.getAuthorizationCode())
      ipcRenderer.send('open-auth-window', (e, Authorization.getAuthorizationCode()));
    })
});
