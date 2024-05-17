import express from 'express';
import open from 'open';
import { createServer } from 'http'
import { Server as SocketIOServer } from 'socket.io';

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
        const io = new SocketIOServer(3000);

        io.on('connection', (socket) => {
            console.log('Client connected!')
            socket.emit('auth-code', { accessToken: token })
        })
    }
}

Server.app.post('/receiveAuthCode', Server.handlePostRequest);