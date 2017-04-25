var express = require("express");
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res) {
    db.symptom.findAll().then(function(symptom) {

        res.render('symptoms/all', { symptoms: symptom });
    });
});

router.post('/', function(req, res) {
    console.log(req.body);
    db.symptom.create(req.body).then(function(symptom) {
        console.log('yay, this thing happened');
        console.log(symptom);
        res.redirect('/symptoms');
    }).catch(function(error) {
        console.log('error happened', error);
        res.send('ERROR');

    });
});

router.get('/add', function(req, res) {
    res.render('symptoms/add');
});


module.exports = router;
