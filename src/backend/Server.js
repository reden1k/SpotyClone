import express from 'express';
import open from 'open';
import { Server as SocketIOServer } from 'socket.io';
import WebSocket from 'ws';

export class Server {
    static app = express();
    static port = 8080;
    static server;
    
    static start(link) {
        if (!this.server) {
            this.app.use(express.static('distLocal'));
            this.app.use(express.json());
            this.app.use(express.urlencoded({ extended: true })); 
            this.server = this.app.listen(this.port, () => {
            console.log(`Server started at ${this.port} port`);
            })
        }
        open(link);
    }

    static close() {
        if (this.server) {
            this.server.close(() => {
                console.log(`Server closed!`);
            })
        }
    }

    static handlePostRequest(req, res) {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const token = JSON.parse(body).token;
        console.log('Received message from browser:', body);
        Server.sendTokensToApp(token);
        res.send('Message received successfully!');
        
    });
    }

    static sendTokensToApp(token) {
        const socket = new WebSocket('ws://localhost:3000');

        socket.onopen = () => {
            socket.send(JSON.stringify({ accessToken: token, type: 'token' }))
            socket.close();
        };
    }
}

Server.app.post('/receiveAuthCode', Server.handlePostRequest);
