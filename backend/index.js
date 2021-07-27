app = require('./src/app');
const { Router } = require('express');
const router = Router();

const Users = require('./src/domains/users/controllers');

router.post('/user/create', Users.create);

const cors = require('cors')
app.use(cors());
app.use(router);

const db = require('./src/database');
db.start();