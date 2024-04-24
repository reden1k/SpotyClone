import { Authorization } from '../backend/Authorization.js';
window.addEventListener('DOMContentLoaded', () => {
    const authButton = document.querySelector('.auth-button');
    if (authButton) {
      authButton.addEventListener('click', () => {
        authButton.remove();
      });
    }
  });
