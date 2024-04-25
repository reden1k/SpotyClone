import { Authorization } from '../backend/Authorization.js';
import { ipcRenderer, shell } from 'electron';

window.addEventListener('DOMContentLoaded', () => {
  const authButton = document.querySelector('.auth-button');
    authButton.addEventListener('click', () => {
      const authButton = document.querySelector('.auth-button');
      authButton.classList.toggle('active');
      const div = document.querySelector('.auth');
      div.classList.toggle('active');
      const img = document.querySelector('.logo');
      img.classList.toggle('upper')
    })
  });
    const authButton = document.querySelector('.auth-button');
    authButton.addEventListener('click', (e) => {
      console.log(Authorization.getAuthorizationCode())
      ipcRenderer.send('open-auth-window', (e, Authorization.getAuthorizationCode()));
    })
