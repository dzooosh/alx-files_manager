# ALX FILE MANAGER

> This project implements: Authentication, NodeJS, MongoDB, Redis, Pagination and Background processing.

## Objective

The objective is to build a simple platform to upload and view files:

- User authentication via a token
- List all files
- Upload a new file
- Change permission of a file
- View a file
- Generate thumbnails for images

### [0. Redis utils](./utils/redis.js "redis.js")

> `redis.createClient()` 
- Creating a redisClient class to perform basic redis operations `(SET, GET, DEL)`
- Used promisify and bind
    - `promisify` converts functions with callback to promise based function
    - `bind` allows you maintain a consistent 'this' value and pre-define some arguments of a function, creates new function that expects the remaining arguments.

### [1. MongoDB utils](./utils/db.js "db.js")
