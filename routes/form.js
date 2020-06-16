var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('form', {
        name: 'Lee Jin Hyun',
        blog: 'gocoder.tistory.com',
        homepage: 'gocoder.net'
    });
});


module.exports = router;
