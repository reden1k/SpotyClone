import { Authorization } from '../backend/Authorization.js';
import { ipcRenderer, shell } from 'electron';

window.addEventListener('DOMContentLoaded', () => {
    const authButton = document.querySelector('.button-auth');
      authButton.addEventListener('click', (e) => {
      console.log(Authorization.getAuthorizationUrl())
      ipcRenderer.send('open-auth-window', (e, Authorization.getAuthorizationUrl()));
    })
<<<<<<< HEAD

  });
    function toggleAnimation() {
      var button = document.querySelector('.button-auth');
      button.classList.toggle('animation-active');
    }

=======
});

>>>>>>> 04a9b093100fa0530c3a84a391c0bc738076f6d7
