var http = require('http');
var through = require('through');


http.createServer(function(req, res){

	if(req.method == "POST"){
		req.pipe(through(
			function write(buf){
				this.queue(buf.toString().toUpperCase());
			},
			function end(){
				this.queue(null);
			}
		)
		).pipe(res);

	}else{
		res.end();
	}


}).listen(process.argv[2]);
