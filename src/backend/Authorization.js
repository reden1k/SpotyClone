export class Authorization {
    static CLIENT_ID = 'cb18dd90851c4cdbb12c12905aa51e30';
    static CLIENT_SECRET = 'b6ebc17b8a454eb3b5f2cf75fb48f5e1';
    static REDIRECT_URI = 'http://localhost:8080';
    static AUTH_URL = 'https://accounts.spotify.com/authorize';
    static TOKEN_URL = 'https://accounts.spotify.com/api/token';
    static code;

    static getLink() {
        return window.location.href;
    }

    static getAuthorizationUrl() {
        const encodedRedirectURI = encodeURIComponent(this.REDIRECT_URI);
        const scope = encodeURIComponent("user-read-private user-read-email playlist-read-private user-library-read playlist-modify-public playlist-modify-private");
        const url = `${this.AUTH_URL}?client_id=${this.CLIENT_ID}&response_type=code&redirect_uri=${encodedRedirectURI}&scope=${scope}`;
        return url
    }

    static getAuthCode(url) {
        return url.substring(url.indexOf("?code=") + 6)
    }

    static async requestAccessAndRefreshTokens(authCode) {
        const encodedCredentials = btoa(`${this.CLIENT_ID}:${this.CLIENT_SECRET}`);
        const url = new URL(this.TOKEN_URL)
        const postData = `grant_type=authorization_code&client_credentials&code=${authCode}&redirect_uri=${encodeURIComponent(this.REDIRECT_URI)}`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${encodedCredentials}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: postData
        });
    
        if (!response.ok) {
            throw new Error(`Failed to request access and refresh tokens: ${response.status} ${response.statusText}`);
        }
    
        const jsonResponse = await response.json();
        const accessToken = jsonResponse.access_token;
        console.log(jsonResponse)
        return accessToken;
    }

    static sendToken(accessToken) {
        fetch('/receiveAuthCode', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token: accessToken, type: 'token' })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            console.log('Response from server:', data);
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
    }
}
