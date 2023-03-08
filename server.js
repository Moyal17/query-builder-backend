const express = require('express');
const compression = require('compression');
const bodyParser = require("body-parser");
const cors = require('cors');

const PORT = process.env.PORT || 8082;

const app = express();
app.use(compression());

const whitelist = ['http://localhost:3000'];
const corsOptions = process.env.IS_TEST ? {} : {
  origin (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {  // !origin -> mean its the same origin!
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./routes/'));

app.listen(PORT, () => {
  console.error(`Node server listening on port http://localhost:${PORT}`);
});

