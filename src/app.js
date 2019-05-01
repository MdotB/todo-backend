const express = require('express');
const cors = require('cors');
require('../src/db/connection')
const router = require('./routes/todo');

const app = express();
const port = process.env.PORT || 4000

app.use(express.json())

app.use(cors());

app.use('/', router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});