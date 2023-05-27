import { createClient } from 'redis';
import { promisify } from 'util';


class RedisClient {
  constructor() {
    this.client = createClient();
    this.status = true;
    this.client.on('error', (err) => {
      console.log('Redis Client Error', err);
      this.status = false;
    });
  }

  isAlive() {
    // isAlive - return true if connection is successful
    return this.status;
  }

  async get(key) {
    // get - takes a string key and
    // returns the Redis value stored in this key
    const getAsync = await promisify(this.client.get).bind(this.client);
    return getAsync(key);
  };

  async set(key, value, dur) {
    // set - takes a string key, value and duration and
    // store it in Redis for a duration specified seconds
    const setAsync = promisify(this.client.set).bind(this.client);
    await setAsync(key, value, 'EX', dur);
  }

  async del(key) {
    // del - takes a string key and removes the value in Redis
    const delAsync = promisify(this.client.del).bind(this.client);
    await delAsync(key);
  }
}

const redisClient = new RedisClient();

module.exports = redisClient;
