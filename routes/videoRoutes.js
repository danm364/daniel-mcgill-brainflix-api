const express = require('express');
const fs = require('fs');
const router = express.Router();
 //use fs module instead

const dataPath = `./data/video-details.json`

console.log(dataPath)

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

  router.post('/', (req, res) => {
    
    let sentInfo = req.body

    fs.readFile(dataPath, 'utf-8', (err,data) => {
      if (err) throw err;
      data = JSON.parse(data)
      let newData = JSON.stringify([sentInfo, ...data])
      fs.writeFile(dataPath, newData, 'utf-8', (err) => {
        if(err) {
          console.log(err)
        }
      })
      
    })

   res.send("new Data Recieved")

    

  })


module.exports = router;