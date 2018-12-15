const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const router = require('./routes');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyparser.text());
app.use(router);

const port = 1128;
app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

