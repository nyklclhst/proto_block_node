var express = require('express');
let request = require('request');
var router = express.Router();
let ID = []
let name = []
let kontak = []
let jumbar = []
let barang = []
let status = []
let waktu = []

router.get('/', function(req, res, next) {
    ID = []
    name = []
    kontak = []
    jumbar = []
    barang = []
    status = []
    waktu = []
    request.get({ url : req.protocol+'://'+req.hostname+':3000/api/DataPeminjaman',
        headers: { "X-Access-Token": cookie }}, function(error, response, body){
        console.log('error:', error);
        let data = JSON.parse(body);
        if(error == null){
            if(data.length === 0){
                console.log('Empty Data');
            } else {
                for(i=0;i<data.length;i++){
                    const dataBarang = data[i].Barang.substr(26);
                    const waktu = data[i].WaktuPengembalian.slice(0,-14);
                    ID.push(data[i].IDPeminjaman);
                    name.push(data[i].NamaPeminjam);
                    jumbar.push(data[i].JumlahBarang);
                    kontak.push(data[i].KontakPeminjam);
                    barang.push(dataBarang);
                    status.push(data[i].Status);
                    waktu.push(waktu);
                }
            }
        } else {
            console.log(error)
        }
        res.render('pinjam',{id: ID, name: name, jumbar: jumbar, kontak: kontak, barang: barang, 
            status: status, waktu: waktu, msg: ID.length, msg1: ''});
    })
});

module.exports = router;