import { Authorization } from '../backend/Authorization.js';
window.addEventListener('DOMContentLoaded', () => {
  let isClicked = false;
  const button = document.querySelector('.button-auth');
  button.addEventListener('click', async () => {
    if (!isClicked) {
      isClicked = true;
      const link = Authorization.getLink();
      const code = Authorization.getAuthCode(link);
      let token;
      await Authorization.requestAccessAndRefreshTokens(code)
    .then((result) => {
      token = result;
    })
    .catch((e) => {
      console.error('Error in Promise: ', e);
    })
      Authorization.sendToken(token);
    }
  })
})
  