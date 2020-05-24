const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./router.js');
const path = require('path');
// database connection -- set to open connection pool on npm start
var mongoose = require('mongoose');
var connection = mongoose.connection;
var mongoUri = 'mongodb://localhost/SDC';

mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  }, (err, db) => {
    if(err){
      console.log(err)
      mongoose.connection.close()
    }
    app.locals.db = db; // storing db pool into express's locals db property
    console.log("MongoDB connected with 'SDC'!")
  }
)

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cors());

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.use('/api', router);

app.get(('/bundle.js'), (req, res) => {
  if (err) {
    console.log(err);
  } else {
    res.status(200).sendFile('../client/dist');
  }
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
module.exports = app;