const express = require('express')
const app = express()
const port = 3000

// function Checkroute(req,res,next){
//      console.log(req.url);
     
// }

// app.use(Checkroute);

app.use((req,res,next) => {
 console.log('data') 
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('welcome to the About page')
})

app.get('/home', (req, res) => {
  res.send('welcome to home page!')
})

app.get('/login', (req, res) => {
  res.send('welcome to login page')
})

app.get('/regi', (req, res) => {
  res.send('welcome to registration page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

