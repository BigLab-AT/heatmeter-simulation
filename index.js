var express = require('express');
var app = express();
var Sensor = require('./models/sensor');

var sensors = [];
sensors.push(new Sensor(20,50));
sensors.push(new Sensor(50,70));
sensors.push(new Sensor(10,20));
sensors.push(new Sensor(10,90));

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.json({
  	'temp00' : sensors[0].getCurrentTemperature(),
  	'temp01' : sensors[1].getCurrentTemperature(),
  	'temp02' : sensors[2].getCurrentTemperature(),
  	'temp03' : sensors[3].getCurrentTemperature()
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


