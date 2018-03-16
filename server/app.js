const fs = require("fs");
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => res.send('Creating note.'))

app.post('/create', function (req, res) {
  res.send('Got a POST request');
  fs.appendFile("something.txt", "Hello boo!");
  console.log(req.body);
});

app.listen(3000, () => console.log('Notes app awaiting orders on port 3000!'));
