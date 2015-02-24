var tr = require('through');

process.stdin.pipe(tr(
	function write(chunk){
		this.queue(chunk.toString().toUpperCase());
	},
	function write(chunk){
		this.queue(null);
	}
)).pipe(process.stdout);
