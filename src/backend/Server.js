import express from 'express';
import open from 'open';

export class Server {
    static app = express();
    static port = 8080;
    static server;

    static start(link) {
        this.app.use(express.static('distLocal'))
        this.server = this.app.listen(this.port, () => {
            console.log(`Server started at ${this.port} port`);
        })
        open(link);
    }

    static close() {
        if (this.server) {
            this.server.close(() => {
                console.log(`Server closed!`);
            })
        }
    }
}
