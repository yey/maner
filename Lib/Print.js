var Print = exports;
var Cmd = require('./Cmd.js');

Print.sound = function(words){
	Cmd.spawn('say', words, '-vVicki', function(type, data){
		console.log(type+":"+data);
	});
}

Print.read = function(path){
	Cmd.spawn('say', '-f'+path, '-vVicki', function(type, data){
		console.log(type+":"+data);
	});
}

Print.web = function(website){

}

/**
 * done
 * say a output
 * read from file 
 * 
 */

/**
 * read from website
 * 
 * 逐字打印效果
 * 随便按出代码效果
 */