const express = require('express');
const cors = require('cors');
const app = express();
const furniture = require('./routes/furniture');

// middlewares
app.use(express.json());
app.use(cors());
app.use('/furniture', furniture);

// port
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening on Port: ${port}`));