const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./router.js');
const path = require('path');

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cors());

app.use('/', router);
app.use(express.static(path.join(__dirname, '/../client/dist')));

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});