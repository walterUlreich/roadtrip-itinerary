var express = require('express')

var app = express()

app.use(express.static('./public'))

// html files
// main.css
// images

app.get('/', function(req, res) {
  res.sendFile('./index.html', {root: './public'})
})

app.get('/nashville', function(req, res) {
  res.sendFile('./nashville.html', {root: './public'})
})

app.get('/new-orleans', function(req, res) {
  res.sendFile('./new-orleans.html', {root: './public'})
})

app.get('/austin', function(req, res) {
  res.sendFile('./austin.html', {root: './public'})
})

app.get('/las-vegas', function(req, res) {
  res.sendFile('./las-vegas.html', {root: './public'})
})

app.listen(8000)
