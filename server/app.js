const fs = require("fs");
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/create', function (req, res) {
  res.send('Got a POST request');
  fs.writeFile(`${req.body.noteTitle}.txt`, req.body.noteBody, (err) => {
    if (err) throw err;
    console.log(`The file ${req.body.noteTitle} has been saved!`);
  });
  console.log(req.body);
});

app.listen(3000, () => console.log('Notes app awaiting orders on port 3000!'));
