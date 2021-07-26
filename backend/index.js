app = require('./src/app');
const { Router } = require('express');
const router = Router();

const Users = require('./src/controllers/users');

router.post('/user/create', Users.create);

const cors = require('cors')
app.use(cors());
app.use(router);