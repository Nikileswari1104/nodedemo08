var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name:'R. Nikileswari',
  email:'nikila1104@gmail.com',
  contact:'9876543210',
  fatherName:'M. Ravikumar',
  dob:'11.04.2001',
  age:'21',
  bloodGroup:'B+ve' });
});

module.exports = router;
