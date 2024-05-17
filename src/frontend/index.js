// import { Authorization } from '../backend/Authorization.js';
// import { ipcRenderer, shell } from 'electron';

window.addEventListener('DOMContentLoaded', () => {
  const authButton = document.querySelector('.auth-button');
      authButton.addEventListener('click', (e) => {
      authButton.classList.toggle('active');
      const div = document.querySelector('.auth');
      div.classList.toggle('active');
      const img = document.querySelector('.logo');
      img.classList.toggle('upper')
      console.log(Authorization.getAuthorizationUrl())
      ipcRenderer.send('open-auth-window', (e, Authorization.getAuthorizationUrl()));
    })

  });
    function toggleAnimation() {
      var button = document.querySelector('.button-auth');
      button.classList.toggle('animation-active');
    }

