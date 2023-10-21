// require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const youtube_routes = require('./routes/youtube_routes');


// express.json() and cors() are middlewares
app.use(express.json());
app.use(cors());

//routes
app.use('/api/youtube', youtube_routes);


// Add Port 
const port = 5000;

app.listen(5000, () => console.log(`Listening on Port No. ${port}...`));


