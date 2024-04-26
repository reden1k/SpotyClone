import { Authorization } from "../src/backend/Authorization.js";

window.addEventListener('DOMContentLoaded', () => {
    const authButton = document.querySelector('.auth-button');
    
    authButton.addEventListener('click', (e) => {
        console.log(Authorization.getLink())
    })
});