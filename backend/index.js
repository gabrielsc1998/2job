app = require('./src/app');
const { Router } = require('express');
const router = Router();

const Users = require('./src/domains/users/controllers');

router.post('/user/create', Users.create);

app.use(router);

const db = require('./src/database');
db.start();