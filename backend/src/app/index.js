const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const { port } = require('../../config').app;

app.listen(port, () => {
  console.log(`\n ## Server is listening on http://localhost:${port}`);
});

module.exports = app;