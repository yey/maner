var EventEmitter = require('events').EventEmitter;
var cell1 = new EventEmitter();
var cell2 = new EventEmitter();
var cell3 = new EventEmitter();

var i = 0;
function init(){
	cell2.emit('begin');
}

cell1.on('begin',function(v){
	console.log('cell1:begin:'+v);
});

cell2.on('begin',function(){
	console.log('cell2:begin:'+(++i));
	cell2.emit('begin',2);
});

init();

/**
 * result:
 * 不同的对象实例之间，事件即使同名也是各自分割的。
 * 循环调用（接受信号处理后又发送同一信号，且不收敛）会导致错误：RangeError: Maximum call stack size exceeded
 */