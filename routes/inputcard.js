var express = require('express');
var request = require('request');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('inputcard',{msg: ''});
});

router.post('/', function(req,res){
  let f = req.files.icard;
  let cookie = req.cookies.access_token;
  cookie = cookie.slice(2,66);
  let name = req.body.name;
  const url = req.protocol+'://'+req.hostname+':3000/api/wallet/import?name='+name;
  let formData = {
    'card' :{
      value: f.data,
      options:{
        contentType: f.mimetype,
        filename: f.name
      }
    }
  }
  request.post({ url: url, headers: {"X-Access-Token": cookie}, formData: formData},
  function(er,re,bd){
    if(er === null){
      console.log(bd);
      if(re.statusCode === 204){
        res.render('inputcard',{msg: 'success'});
      } else {
        res.render('inputcard',{msg: 'failed'});
      }
    } else {
      console.log(bd);
      res.render('inputcard',{msg: 'failed'});
    }
  })
})

module.exports = router;