app = require('./src/app');
const { Router } = require('express');
const router = Router();

const db = require('./src/database');
db.start();

const Dev = require('./src/domains/devs/controllers');

router.post('/dev/create', Dev.create);

app.use(router);

