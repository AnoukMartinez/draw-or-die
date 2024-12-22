const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 3000;
const uploadDirectory = path.join(__dirname, 'data/images');
var routes = require('./routes.ts')

app.use(cors());
app.use('/images', express.static(uploadDirectory));

// Routes

app.use('/', routes);
app.get('/users', routes);
app.get('/users/:userId', routes);
app.post('/users/:userId/images', routes);
app.get('/users/:id/images', routes)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
