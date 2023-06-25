const express = require('express');
const fs = require('fs');
const router = express.Router();
 //use fs module instead

const dataPath = `C:\\Users\\danm3\\bootcamp\\daniel-mcgill-brainflix-api\\data\\video-details.json`

router.get('/', (req, res) => {
  fs.readFile(dataPath, 'utf8', (err,data) => {
    if (err) throw err;
    data = (data)
    console.log(data)
    res.json(JSON.parse(data))
  })
    // res.send(videoDetails)
  });

router.get('/:id', (req, res) => {
    
    fs.readFile(dataPath, 'utf-8', (err,data) => {
      if (err) throw err;
      data = JSON.parse(data)
      video = data.find(element => element.id === req.params.id)
      res.json(((video)));
    })
 
  });


module.exports = router;