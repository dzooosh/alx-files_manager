const app = require('../server');

class UsersController {
    static postNew(req, res) {
        const { email,password } = request.body;
    }
    
    if (!email) {
        res.status(400).json({ "error": "Missing email" });
        return;
    }

    if (!password) {
        return res.status(400).json({ "error": "Missing password" });
    }

}