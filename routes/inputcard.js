var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('inputcard');
});

router.post('/', function(req,res){
  let name = req.body.name;
  let icard = req.body.icard;
  console.log(icard)

})

module.exports = router;