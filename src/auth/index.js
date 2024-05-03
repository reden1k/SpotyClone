import { Authorization } from '../backend/Authorization.js';
// import { ipcRenderer } from 'electron';
// import ipcRender and send commands, handle it in app!

window.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.button-auth');
  button.addEventListener('click', () => {
    //mb tyt classtoggle
    const link = Authorization.getLink() // Получить ссылку и вывести ее отсюда
    const code = Authorization.getAuthCode(link)
    // ipcRenderer.send('send-code-for-auth', (null, code));
    console.log(Authorization.requestAccessAndRefreshTokens(code))
    console.log(link);
    console.log(code);
  })
})
  