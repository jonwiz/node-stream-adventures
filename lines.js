var split = require('split');
var tr = require('through');

var count = 0;
process.stdin.pipe(split()).pipe(
	tr(
		function write(buffer){
			var s = buffer.toString();
			var out = count % 2 === 0 ? s.toLowerCase() : s.toUpperCase();
			this.queue(out + '\n');
			count++;
		}
	)).pipe(process.stdout);


