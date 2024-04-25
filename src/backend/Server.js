import express from 'express';
import axios from 'axios';
import open from 'open';
import path from 'path';

const frontendPath = path.resolve(process.cwd(), 'frontend')
const backendPath = path.resolve(process.cwd(), 'backend')
console.log(frontendPath)

export class Server {
    static app = express();
    static port = 8080;
    static server;

    static start() {
        this.server = this.app.listen(this.port, () => {
            console.log(`Server started at ${this.port} port`);
        })
        // open('http://localhost:8080');
    }

    static close() {
        this.server.close(() => {
            console.log(`Server closed!`);
        })
    }
}
