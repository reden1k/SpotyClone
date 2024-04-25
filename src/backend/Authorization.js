import axios from 'axios';


export class Authorization {
    static CLIENT_ID = 'cb18dd90851c4cdbb12c12905aa51e30';
    static CLIENT_SECRET = 'b6ebc17b8a454eb3b5f2cf75fb48f5e1';
    static REDIRECT_URI = 'http://localhost:8080';
    static AUTH_URL = 'https://accounts.spotify.com/authorize';
    static TOKEN_URL = 'https://accounts.spotify.com/authorize';

    static getAuthorizationCode() {
        const encodedRedirectURI = encodeURIComponent(this.REDIRECT_URI);
        const scope = encodeURIComponent("user-read-private user-read-email playlist-read-private user-library-read playlist-modify-public playlist-modify-private");
        const url = `${this.AUTH_URL}?client_id=${this.CLIENT_ID}&response_type=code&redirect_uri=${encodedRedirectURI}&scope=${scope}`;
       
        return url;
    }

    static getAccessAndRefreshTokens(authCode) {
        const encoded = atob(authCode);
    }
}




