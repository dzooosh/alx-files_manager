import { MongoClient } from 'mongodb';

const HOST = process.env.DB_HOST || 'localhost';
const PORT = process.env.DB_PORT || 27017;
const DATABASE = process.env.DB_DATABASE || 'files_manager';
const url = `mongodb://${HOST}:${PORT}`;


class DBClient {
    constructor() {
        this.client = new MongoClient(url, { useUnifiedTopology: true, useNewUrlParser: true });
        this.client.connect().then(() => {
            this.db = this.client.db(`${DATABASE}`);
        }).catch((err) => console.log(err));
    }

    isAlive() {
        return this.client.isConnected();
    }


    async nbUsers() {
        const userNum = await this.db.collection('users').countDocuments();
        return userNum;
    }

    async nbFiles() {
        const filesNum =  await this.db.collection('files').countDocuments();
        return filesNum;
    }
};

const dbClient = new DBClient();

module.exports = dbClient;