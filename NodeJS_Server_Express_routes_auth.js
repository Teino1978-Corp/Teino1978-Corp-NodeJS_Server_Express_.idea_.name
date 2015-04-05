/**
 * Created by User on 05/04/2015.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('auth', { title: 'Authentication' });
});

module.exports = router;
