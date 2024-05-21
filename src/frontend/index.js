// import { Authorization } from '../backend/Authorization.js';
// import { ipcRenderer, shell } from 'electron';

window.addEventListener('DOMContentLoaded', () => {
  const authButton = document.querySelector('.auth-button');
    authButton.addEventListener('click', (e) => {

      const authButton = document.querySelector('.auth-button');
      authButton.classList.toggle('active');
      const div = document.querySelector('.auth');g
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

    function toggleAnimation() {
      var button = document.querySelector('.button-auth');
      if (!button.classList.contains('animation-active')) {
        button.classList.toggle('animation-active');
        setTimeout(function() {
          button.classList.add('fade-out');
          setTimeout(() => {
            button.style.display = 'none'; 
          }, 100)
          showLoader()
        }, 2000); /* задержка в 4 секунды */}
    }

    function showLoader() {
      var loaderContainer = document.querySelector('.loader-container');
      console.log(loaderContainer)
      loaderContainer.classList.add('show'); /* добавляем класс show для запуска анимации */
    }

