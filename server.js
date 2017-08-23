var express = require('express')

var app = express()
var bodyParser = require('body-parser')

app.use(express.static('./public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

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

app.get('cargo-validator', function(req, res) {
  res.sendFile('./cargo-validator.html', {root: './public'})
})

app.post('/validate', function(req,res) {
  console.log(req.body.price)
  console.log(req.body.weight)
  if(req.body.price > 200 && req.body.weight > 200) {
    res.send("Sorry. Your total price and total weight exceed the limit. Please remove an item from the list.")
  } else if(req.body.price > 200) {
    res.send("Sorry. Your total price exceeds the $200 limit. Please remove an item from the list.")
  } else if(req.body.weight > 200) {
    res.send("Sorry. Your total weight exceeds the 200 lb. limit. Please remove an item from the list.")
  } else {
    res.send("Congrats! Your cargo is valid!")
  }
})

app.listen(8000)
