const fs = require("fs");
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Creating note.'))

app.post('/', function (req, res) {
  res.send('Got a POST request');
  fs.appendFile("something.txt", "Hello boo!");
  console.log(req.body);
});

app.listen(3000, () => console.log('Notes app awaiting orders on port 3000!'));
