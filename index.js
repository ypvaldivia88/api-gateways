const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 4000;

require('./src/config/db-handler');

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuring the database
const dbConfig = require('./src/config/db-handler');
dbConfig.connect();

// define a simple route
app.get('/', (req, res) => {
  res.json({
    message: 'api for Gateways application.',
  });
});

var deviceRoutes = require('./src/routes/deviceRoutes');
var gatewayRoutes = require('./src/routes/gatewayRoutes');

deviceRoutes(app);
gatewayRoutes(app);
