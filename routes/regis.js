var express = require('express');
let request = require('request');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.render('regis',{msg: ''})

});

router.post('/', function(req, res){
  let username = req.body.username
  let email = req.body.email
  let tgl = new Date()
  const data = { "$class": "model.userData", 
    "userID": username+"@seculab-network", 
    "username": username, 
    "email": email, 
    "tglPembuatan": tgl }
  request.post({
    url: req.protocol+'://'+req.hostname+':3001/api/userData',
    body: data,
    json: true
  }, function(error, response, body){
    if(error === null){
      console.log(body);
        if(response.statusCode === 200){
          res.render('regis',{msg: 'success'})
        } else {
          res.render('regis',{msg: 'failed'})
        }
    } else {
      console.log(body);
      res.render('regis',{msg: 'failed'})
    }
  });
})

module.exports = router;
