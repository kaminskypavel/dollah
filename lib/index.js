var _ = require('lodash'),
	exec = require('child_process').exec,
    child;

var cliInput = 	process.argv.slice(2,process.argv.length);
var cliString = _.map(cliInput).join(' ')

exports.run = function() {
	child = exec(cliString,
	  function (error, stdout, stderr) {
		  if(!stderr)
			console.log(stdout);
		else
			console.log(stderr);	
	});
}
