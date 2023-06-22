const express = require('express');
const router = express.Router();
let videoDetails = require("../data/video-details.json")

router.get('/', (req, res) => {
    res.send(videoDetails)
  });

router.get('/:id', (req, res) => {
    
    video = videoDetails.find(element => element.id === req.params.id)
    

    res.json((video));
  });


module.exports = router;