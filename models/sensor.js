
function Sensor(min,max) {
	this.min = min;
	this.max = max;
	this.temperature = min;
	this.step = 'up';
}

Sensor.prototype.getCurrentTemperature = function() {
	var rise = Math.floor(Math.random() * 10) / 10;
	console.log(this.step+ " " + this.temperature + " " + rise);

	if (this.step == 'up') {
		this.temperature += rise;
	}
	else {
		this.temperature -= rise;
	}

	if (this.temperature > this.max) {
		this.step = 'down';
	}
	if (this.temperature < this.min) {
		this.step = 'up';
	}
	console.log(this.temperature);
	return this.temperature;
}

module.exports = Sensor;