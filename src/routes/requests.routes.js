const { Router } = require('express');
const router = Router();

const { New_Request } = require('../controllers/requests.controller')

router.post('/api/new_request', New_Request)


module.exports = router;