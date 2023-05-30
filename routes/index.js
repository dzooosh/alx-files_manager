const app = require('../server');
const AppController = require('../controllers/AppController')

app.get('/status', (req, res) => AppController.getStatus);
app.get('/stats', (req, res) => AppController.getStats);
