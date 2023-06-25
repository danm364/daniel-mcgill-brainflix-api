const express = require('express')
const cors = require('cors');
const app = express()
const bodyParser = require('body-parser');
const videoRoutes = require("./routes/videoRoutes");


const port = 3500

app.use(cors());

app.use(express.json());

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  app.use("/videos", videoRoutes);