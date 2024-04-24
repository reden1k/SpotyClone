import axios from 'axios';


export class Authorization {
    static CLIENT_ID = 'cb18dd90851c4cdbb12c12905aa51e30';
    static CLIENT_SECRET = 'b6ebc17b8a454eb3b5f2cf75fb48f5e1';
    static REDIRECT_URI = 'http://localhost:8080';
    static AUTH_URL = 'https://accounts.spotify.com/authorize';
    static TOKEN_URL = 'https://accounts.spotify.com/authorize';

    static getAuthorizationCode() {
        //TODO Here should be part with redirect (do it on java)!
        console.log('ITS WORKING!')
        open(this.REDIRECT_URI)
        const currentUrl = window.location.href;
        console.log(currentUrl)
        const urlParams = new URLSearchParams(new URL(currentUrl).search);

        const authorizationCode = urlParams.get('code');

        console.log(authorizationCode);
        return authorizationCode;
    }

    static getAccessAndRefreshTokens(authCode) {
        const encoded = atob(authCode);
    }
}




