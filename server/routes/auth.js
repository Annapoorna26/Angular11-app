var express = require('express');
var router = express.Router();

router.get('/login', (req, res) => {
    res.send({userName:'Anu', role: 'customer'})
});

module.exports = router;