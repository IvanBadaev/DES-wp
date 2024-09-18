const express = require('express');
const path = require('path');
const app = express()
const port = 3000

app.use(express.static('public'))
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/scripts', express.static(path.join(__dirname, 'scripts')))
app.use('/css', express.static(path.join(__dirname, 'css')))

app.use('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/main.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})