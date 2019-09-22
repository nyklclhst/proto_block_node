var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let cookie = req.cookies.access_token;
  console.log(req.headers['host']);
  console.log(req.hostname);
  console.log(req.protocol);
  if(cookie == null){
    return res.redirect(req.protocol+'://'+req.hostname+':3000/auth/github');
  } else {
    cookie = cookie.slice(2,66);
    request.get({ url : req.protocol+'://'+req.hostname+':3000/api/system/ping',
  headers: { "X-Access-Token": cookie }},function(resp,err,bdy){
      if(err != null){
        let errCode = err.statusCode;
        console.log('error:', errCode);
        if(errCode === 500){
          return res.redirect(req.protocol+'://'+req.headers['host']+'/ask');
        } else if(errCode === 200){
          return res.redirect(req.protocol+'://'+req.headers['host']+'/data');
        } else {
          return res.redirect(req.protocol+'://'+req.hostname+':3000/auth/github');
        }
      } else {
        console.log(bdy);
      }
      console.log(cookie);
    })
  }  
});

module.exports = router;