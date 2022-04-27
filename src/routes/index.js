const express = require('express');
const router =express.Router();
var http = require('http');
var path = require("path");
var bodyParser = require('body-parser');
/*router.get('/',(req,res)=>{
    res.send('Estoy aqui')
});*/
router.get('/', (req, res) => {
    res.sendFile('index.html', {
      root: 'src/views/'
    });
 });

module.exports = router;