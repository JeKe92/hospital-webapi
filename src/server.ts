import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { db } from './database';

import { router } from './routes';

class Server {
    private app: Application;
    private port: string;
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';

        db.connect();
        this.config();
    }

    config(): void {
        this.app.use('/api', router);
        this.app.use(express.json());
        this.app.use(morgan('tiny'));
        this.app.use(cors());
    }

    start(): void {
        this.app.listen(this.port, () => {
            console.log(`Escuchando en puerto ${this.port}`)
        });
    }

}

const server = new Server();
server.start();
