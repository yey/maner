var Cmd = exports;

Cmd.spawn = function(cmd, args, options, cb){
	var ls = require('child_process').spawn(cmd, [options, args]);
	ls.stdout.on('data', function (data){
		cb('out', data.toString());
	});
	ls.stderr.on('data', function (data){
		cb('err', data.toString());
	});
	ls.on('exit', function (code){
		cb('exit', code);
	});
}

Cmd.exec = function(cmds, cb){
	require('child_process').exec(cmds, cb);
}