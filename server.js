const express = require('express');
const app = express();

app.use(express.static(__dirname + '/www'));
console.log(__dirname  + '/www');

app.listen(process.env.PORT || 8081);