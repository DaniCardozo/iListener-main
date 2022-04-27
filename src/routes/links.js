const express = require('express');
const router =express.Router();
var http = require('http');
var path = require("path");
var bodyParser = require('body-parser');

const pool = require('../database');
router.use(express.static(__dirname + '/views'));

router.get('/add',(req,res)=>{
   res.render('links/add');
});
router.post('/add',(req,res)=>{
   console.log(req.body);
   res.send('received');
});
router.post('/add', async(req,res)=>{
   const {title,url,description} = req.body;
   const newLink= {
      title,
      url,
      description
   }
   await pool.query('INSERT INTO links set ?',[newLink]);
   res.send('received');
});




module.exports = router;