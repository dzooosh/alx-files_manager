const { RedisClient } = require('redis');
const db = require('../utils/db');
const redis = require('../utils/redis');

class AppController {
    static async getStatus(req, res) {
        res.status(200).json({ redis: RedisClient.isAlive(), db: dbClient.isAlive() });
    }

    static async getStats(req, res) {
        res.status(200).json({ "users": db.nbUsers, "files": db.nbFiles });
    }
}

module.exports = AppController;
