var express = require('express');
let request = require('request');
var router = express.Router();
let ID = [];
let dataLength = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');

  request.get('http://localhost:3001/api/DataBarang', function(error, response, body){
    console.log('error:', error);
    let data = JSON.parse(body);
    console.log('statusCode:',data.length);
    if(data.length === 0){
      ID.push('Data Kosong');
    } else {
      for(i=0;i<data.length;i++){
        ID.push(data[i].IDBarang);
        console.log(ID[i]);
      }
    }
    res.render('data',{id: ID})
    ID = [];
  })
});

module.exports = router;