const express = require('express');
const app = express();
const compression = require('compression');

app.use(compression());
app.use(express.json())

app.engine('ejs', require('ejs').__express);
app.set('view engine', 'ejs');

app.use(require('./controllers'));
app.use(express.static(__dirname + '/public'));

app.listen(3022, () => { console.log(`App is listening on port 3022`) });