const { RedisClient } = require('redis');
const db = require('../utils/db');
const redis = require('../utils/redis');

class AppController {
    static getStatus(req, res) {
        response.status(200).json({ redis: RedisClient.isAlive(), db: dbClient.isAlive() });
    }

    getStats() {
        return ({ "users": db.nbUsers, "files": db.nbFiles }), 200;
    }
}

module.exports = AppController;
