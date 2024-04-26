import { Authorization } from '../backend/Authorization.js';

window.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.button-auth');
  button.addEventListener('click', () => {
    //mb tyt classtoggle
    const link = Authorization.getLink() // Получить ссылку и вывести ее отсюда
    const code = Authorization.getAuthCode(link)
    const tokens = Authorization.requestAccessAndRefreshTokens(code);
    console.log(link);
    console.log(code)
    console.log(tokens)
  })
})
  