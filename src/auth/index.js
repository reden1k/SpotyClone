import { Authorization } from '../backend/Authorization.js';

window.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.button-auth');
  const link = Authorization.getLink();
  const code = Authorization.getAuthCode(link);
  let token;
  Authorization.requestAccessAndRefreshTokens(code)
  .then((result) => {
    token = result;
  })
  .catch((e) => {
    console.error('Error in Promise: ', e);
  })

  button.addEventListener('click', () => {
    Authorization.sendToken(token);
  })
})
  