const { Router } = require('express');
const router = Router();

const { init_app } = require('../controllers/index.controller')


router.get('/', init_app)


module.exports = router;