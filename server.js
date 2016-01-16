var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	httpServer = require("http").createServer(app),  
	five = require("johnny-five"),
    config = {
    	host: "0.0.0.0",
    	port: 3000
    };


var arduino = new five.Board(), //{ port : '\\\\.\\COM4' }
	led13 = null,
	lcd = null;
arduino.on("ready", function() {
	// Create a standard `led` component instance
	led13 = new five.Led(13);
	lcd = new five.LCD({
		// LCD pin name  RS  EN  DB4 DB5 DB6 DB7
		// Arduino pin # 7    8   9   10  11  12
		// pins: [8, 9, 4, 5, 6, 7],
		pins: [12, 11, 5, 4, 3, 2],
		backlight: 10,
		rows: 2,
		cols: 16
	});
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
 
app.get('/', function(request, response) {  
    response.sendFile(__dirname + '/public/index.html');
});

app.get('/led13', function(request, response) {
	try {
		// "blink" the led 13 in 500ms on-off phase periods
		led13.blink(500);  
	    response.send('Piscando LED');
	} catch (e) {
		response.send('Erroooooou');
	}
});

app.post('/lcd', function(request, response) {
	try {
		var text = request.body.text || 'none';
		lcd.useChar('heart');
		lcd.clear().print(text);		  
	    response.send('Escrevendo LCD');
	} catch (e) {
		response.send('Erroooooou');
	}
});
 
httpServer.listen(config.port, config.host);

console.log('Server available at http://' + config.host + ':' + config.port);