var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name:'P.Hephzibah',
  email:'hephzibahp@anjaconline.org',
  contact:'6374406605',
  fathername:':R.Paulraj',
  dob:':01.05.2001',
  age:':21',
  bloodgroup:':A+'});
});

module.exports = router;
