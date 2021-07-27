const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const { port } = require('../../config').app;

app.listen(port, () => {
  console.log(`\n ## Server started - listening on http://localhost:${port}`);
});

module.exports = app;