
const express = require('express');//import statement
const { time } = require('node:console');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const time = Date();
  res.json({
    time1 : time
  })
})

app.listen(port, () => {
  console.log(`pratiksha here ${port}`)
})
