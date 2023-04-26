const express = require('express')
const connectDb = require('./config/db.js');
const bodyParser = require('body-parser');
const app = express()
const port = 5000


connectDb()

app.use('/uploads', express.static('uploads'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// parse application/json
app.use(bodyParser.json());

app.use('/api/images', require('./routes/imageRoutes'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))