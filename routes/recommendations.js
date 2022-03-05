const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const recommedantionsControllers = require('../controllers/recommendationsControllers')



router.post('/',
//First checking authentication, then get all recommedantions for this user
             
    recommedantionsControllers.findRecommendations
)


module.exports = router;

